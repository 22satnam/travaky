import { NextRequest, NextResponse } from 'next/server'
import { SignJWT } from 'jose'
import { supabaseAdmin } from '@/lib/supabase/admin'

// TODO: replace with your real verification
async function verifyAppJWT(authorizationHeader?: string): Promise<{ userId: string } | null> {
  // e.g., "Bearer <your-app-jwt>"
  if (!authorizationHeader?.startsWith('Bearer ')) return null
  const token = authorizationHeader.slice('Bearer '.length)

  // Verify your existing JWT here (HMAC/RS256/etc.)
  // For now, assume it has { sub: <uuid> }
  const payload = JSON.parse(Buffer.from(token.split('.')[1] || '', 'base64').toString('utf8') || '{}')
  if (!payload?.sub) return null
  return { userId: payload.sub }
}

export async function GET(req: NextRequest) {
  const auth = req.headers.get('authorization') || undefined
  const verified = await verifyAppJWT(auth)
  if (!verified) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  // Optional: ensure profile exists
  await supabaseAdmin
    .from('profiles')
    .upsert({ id: verified.userId }, { onConflict: 'id', ignoreDuplicates: false })

  const secret = new TextEncoder().encode(process.env.SUPABASE_JWT_SECRET!)
  const now = Math.floor(Date.now() / 1000)
  const exp = now + 60 * 60 // 1 hour

  const supabaseToken = await new SignJWT({
      role: 'authenticated',
      iss: 'travaky-app',
      sub: verified.userId,
      // You can embed more claims if you need them in policies
    })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt(now)
    .setExpirationTime(exp)
    .sign(secret)

  return NextResponse.json({ access_token: supabaseToken, token_type: 'bearer', expires_in: 3600 })
}
