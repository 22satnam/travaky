// 'use client'

// import Image from 'next/image'
// import { useState } from 'react'
// import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog'
// import { Eye, EyeOff, CheckCircle2, Clock3, Globe2 } from 'lucide-react'
// import { useAuth } from '@/context/AuthContext'
// import { useAuthDialog } from '@/context/AuthDialogProvider' // your provider’s open/close + mode
// import { cn } from '@/lib/utils'

// type Mode = 'login' | 'signup'

// export default function AuthDialogs() {
//   const { isOpen, mode, next, close, switchMode } = useAuthDialog()
//   const [passwordVisible, setPasswordVisible] = useState(false)
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [loading, setLoading] = useState(false)

//   const { login, signup } = useAuth()

//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     try {
//       setLoading(true)
//       if (mode === 'login') {
//         await login(email, password, next)
//       } else {
//         await signup(email, password, next)
//       }
//       close()
//     } finally {
//       setLoading(false)
//     }
//   }

//   const title = mode === 'login' ? 'Log in to Travaky' : 'Create your Travaky account'
//   const cta   = mode === 'login' ? 'Log In' : 'Sign Up'

//   return (
//     <Dialog open={isOpen} onOpenChange={(open) => (open ? null : close())}>
//       {/* tinted overlay so the background isn’t fully visible */}
//       <DialogOverlay className="bg-slate-900/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out" />

//       <DialogContent
//         className={cn(
//           'w-[92vw] max-w-3xl p-0 overflow-hidden rounded-2xl',
//           // blue glass + subtle border to match ui_hero palette
//           'bg-gradient-to-b from-[#0b4aa8]/80 via-[#083f8c]/75 to-[#072f69]/80',
//           'border border-white/15 shadow-[0_20px_60px_-10px_rgba(5,25,70,0.55)]',
//           'text-white'
//         )}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2">
//           {/* LEFT: brand & trust */}
//           <div className="relative p-7 md:p-9 border-b md:border-b-0 md:border-r border-white/10">
//             <div className="flex items-center gap-3">
//               {/* logo */}
//               <div className="relative size-9">
//                 <Image
//                   src="/brand/travaky-mark.svg"
//                   alt="Travaky"
//                   fill
//                   sizes="36px"
//                   className="object-contain drop-shadow-[0_2px_10px_rgba(255,255,255,.25)]"
//                 />
//               </div>
//               <div className="text-xl font-extrabold tracking-tight">Travaky</div>
//             </div>

//             <h2 className="mt-6 text-2xl md:text-3xl font-extrabold leading-tight">
//               Visa on Autopilot
//             </h2>
//             <p className="mt-3 text-white/85">
//               Fill once. We handle the rest—documents, appointments and delivery. Get your visa
//               approved with a secure, managed process.
//             </p>

//             {/* trust badges */}
//             <div className="mt-6 space-y-3">
//               <div className="flex items-center gap-3 text-white/90">
//                 <CheckCircle2 className="h-5 w-5 text-emerald-300" />
//                 <span className="font-semibold">99% Approval Rate</span>
//               </div>
//               <div className="flex items-center gap-3 text-white/90">
//                 <Clock3 className="h-5 w-5 text-sky-300" />
//                 <span className="font-semibold">24–48 Hour Response</span>
//               </div>
//               <div className="flex items-center gap-3 text-white/90">
//                 <Globe2 className="h-5 w-5 text-blue-200" />
//                 <span className="font-semibold">150+ Countries</span>
//               </div>
//             </div>

//             {/* tiny footer text */}
//             <p className="mt-8 text-xs text-white/65">
//               By continuing, you agree to our Terms of Service and Privacy Policy.
//             </p>
//           </div>

//           {/* RIGHT: form */}
//           <div className="p-7 md:p-9">
//             <h3 className="text-xl font-bold">{title}</h3>
//             <p className="mt-1.5 text-white/80">
//               Welcome{mode === 'login' ? ' back' : ''}. Enter your credentials to continue.
//             </p>

//             <form className="mt-6 space-y-4" onSubmit={onSubmit}>
//               <label className="block text-sm text-white/85">Email</label>
//               <input
//                 type="email"
//                 required
//                 autoFocus
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="you@email.com"
//                 className={inputCls}
//               />

//               <label className="block text-sm text-white/85">Password</label>
//               <div className="relative">
//                 <input
//                   type={passwordVisible ? 'text' : 'password'}
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="••••••••"
//                   className={inputCls}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setPasswordVisible((s) => !s)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
//                   aria-label={passwordVisible ? 'Hide password' : 'Show password'}
//                 >
//                   {passwordVisible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//                 </button>
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={cn(
//                   'mt-2 w-full rounded-xl py-3 font-semibold',
//                   'bg-white text-slate-900 hover:bg-white/90 transition',
//                   'shadow-[0_6px_18px_-4px_rgba(255,255,255,0.35)]'
//                 )}
//               >
//                 {loading ? 'Please wait…' : cta}
//               </button>
//             </form>

//             {/* footer links */}
//             <div className="mt-4 flex items-center justify-between text-sm">
//               <button
//                 type="button"
//                 className="text-white/75 hover:text-white underline-offset-4 hover:underline"
//                 onClick={() => switchMode(mode === 'login' ? 'signup' : 'login')}
//               >
//                 {mode === 'login'
//                   ? "Don't have an account? Sign up"
//                   : 'Already have an account? Log in'}
//               </button>

//               <a
//                 href="/forgot"
//                 className="text-white/75 hover:text-white underline-offset-4 hover:underline"
//               >
//                 Forgot password?
//               </a>
//             </div>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   )
// }

// const inputCls =
//   'mt-1 w-full rounded-xl bg-white/10 text-white placeholder:text-white/60 ' +
//   'border border-white/20 focus:border-white/40 outline-none ' +
//   'px-4 py-3 backdrop-blur-sm transition'


// 'use client'

// import Image from 'next/image'
// import { useState } from 'react'
// import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog'
// import { Eye, EyeOff, CheckCircle2, Clock3, Globe2 } from 'lucide-react'
// import { useAuth } from '@/context/AuthContext'
// import { useAuthDialog } from '@/context/AuthDialogProvider'
// import { cn } from '@/lib/utils'
// import { toast } from 'sonner'
// import { useRouter } from 'next/navigation'

// export default function AuthDialogs() {
//   const router = useRouter()
//   const { isOpen, mode, next, close, switchMode } = useAuthDialog()
//   const { login, signup, refreshSession } = useAuth()

//   const [passwordVisible, setPasswordVisible] = useState(false)
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [loading, setLoading] = useState(false)

//   const title = mode === 'login' ? 'Log in to Travaky' : 'Create your Travaky account'
//   const cta   = mode === 'login' ? 'Log In' : 'Sign Up'

//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     try {
//       setLoading(true)
//       if (mode === 'login') {
//         await login(email, password)
//         toast.success('Logged in!')
//       } else {
//         await signup(email, password)
//         toast.success('Account created')
//       }
//       await refreshSession()
//       close()
//       router.push(next || '/dashboard')
//     } catch (err: any) {
//       toast.error(err?.message || 'Something went wrong')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <Dialog open={isOpen} onOpenChange={(open) => (open ? null : close())}>
//       <DialogOverlay className="bg-slate-900/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out" />

//       <DialogContent
//         className={cn(
//           'w-[92vw] max-w-3xl p-0 overflow-hidden rounded-2xl',
//           'bg-gradient-to-b from-[#0b4aa8]/80 via-[#083f8c]/75 to-[#072f69]/80',
//           'border border-white/15 shadow-[0_20px_60px_-10px_rgba(5,25,70,0.55)]',
//           'text-white'
//         )}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2">
//           {/* LEFT: brand & trust */}
//           <div className="relative p-7 md:p-9 border-b md:border-b-0 md:border-r border-white/10">
//             <div className="flex items-center gap-3">
//               <div className="relative size-9">
//                 <Image
//                   src="/img/logo.png"
//                   alt="Travaky"
//                   fill
//                   sizes="36px"
//                   className="object-contain drop-shadow-[0_2px_10px_rgba(255,255,255,.25)]"
//                 />
//               </div>
//               <div className="text-xl font-extrabold tracking-tight">Travaky</div>
//             </div>

//             <h2 className="mt-6 text-2xl md:text-3xl font-extrabold leading-tight">
//               Visa on Autopilot
//             </h2>
//             <p className="mt-3 text-white/85">
//               Fill once. We handle the rest—documents, appointments and delivery. Get your visa
//               approved with a secure, managed process.
//             </p>

//             <div className="mt-6 space-y-3">
//               <div className="flex items-center gap-3 text-white/90">
//                 <CheckCircle2 className="h-5 w-5 text-emerald-300" />
//                 <span className="font-semibold">99% Approval Rate</span>
//               </div>
//               <div className="flex items-center gap-3 text-white/90">
//                 <Clock3 className="h-5 w-5 text-sky-300" />
//                 <span className="font-semibold">24–48 Hour Response</span>
//               </div>
//               <div className="flex items-center gap-3 text-white/90">
//                 <Globe2 className="h-5 w-5 text-blue-200" />
//                 <span className="font-semibold">150+ Countries</span>
//               </div>
//             </div>

//             <p className="mt-8 text-xs text-white/65">
//               By continuing, you agree to our Terms of Service and Privacy Policy.
//             </p>
//           </div>

//           {/* RIGHT: form */}
//           <div className="p-7 md:p-9">
//             <h3 className="text-xl font-bold">{title}</h3>
//             <p className="mt-1.5 text-white/80">
//               Welcome{mode === 'login' ? ' back' : ''}. Enter your credentials to continue.
//             </p>

//             <form className="mt-6 space-y-4" onSubmit={onSubmit}>
//               <label className="block text-sm text-white/85">Email</label>
//               <input
//                 type="email"
//                 required
//                 autoFocus
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="you@email.com"
//                 className={inputCls}
//               />

//               <label className="block text-sm text-white/85">Password</label>
//               <div className="relative">
//                 <input
//                   type={passwordVisible ? 'text' : 'password'}
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="••••••••"
//                   className={inputCls}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setPasswordVisible((s) => !s)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
//                   aria-label={passwordVisible ? 'Hide password' : 'Show password'}
//                 >
//                   {passwordVisible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//                 </button>
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={cn(
//                   'mt-2 w-full rounded-xl py-3 font-semibold',
//                   'bg-white text-slate-900 hover:bg-white/90 transition',
//                   'shadow-[0_6px_18px_-4px_rgba(255,255,255,0.35)]'
//                 )}
//               >
//                 {loading ? 'Please wait…' : cta}
//               </button>
//             </form>

//             <div className="mt-4 flex items-center justify-between text-sm">
//               <button
//                 type="button"
//                 className="text-white/75 hover:text-white underline-offset-4 hover:underline"
//                 onClick={() => switchMode()}
//               >
//                 {mode === 'login'
//                   ? "Don't have an account? Sign up"
//                   : 'Already have an account? Log in'}
//               </button>

//               <a
//                 href="/forgot"
//                 className="text-white/75 hover:text-white underline-offset-4 hover:underline"
//               >
//                 Forgot password?
//               </a>
//             </div>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   )
// }

// const inputCls =
//   'mt-1 w-full rounded-xl bg-white/10 text-white placeholder:text-white/60 ' +
//   'border border-white/20 focus:border-white/40 outline-none ' +
//   'px-4 py-3 backdrop-blur-sm transition'

'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog'
import { Eye, EyeOff, CheckCircle2, Clock3, Globe2 } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { useAuthDialog } from '@/context/AuthDialogProvider'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export default function AuthDialogs() {
  const router = useRouter()
  const { isOpen, mode, next, close, switchMode } = useAuthDialog()
  const { login, signup, refreshSession } = useAuth()

  const [passwordVisible, setPasswordVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const title = mode === 'login' ? 'Log in to Travaky' : 'Create your Travaky account'
  const cta   = mode === 'login' ? 'Log In' : 'Sign Up'

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      if (mode === 'login') {
        await login(email, password)
        toast.success('Logged in!')
      } else {
        await signup(email, password)
        toast.success('Account created')
      }
      await refreshSession()
      close()
      router.push(next || '/dashboard')
    } catch (err: any) {
      toast.error(err?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => (open ? null : close())}>
      {/* darker but clean; kills navbar distraction */}
      <DialogOverlay className="fixed inset-0 z-[1000] bg-slate-950/75 backdrop-blur-sm" />

      <DialogContent
        className={cn(
          'z-[1001] rounded-2xl p-0 overflow-hidden',
          // fixed 2-pane width — no stacking
          'w-[min(92vw,980px)] min-w-[820px]',
          // Travaky glass
          'bg-gradient-to-br from-[#0b4aa8]/92 via-[#0a3e8a]/88 to-[#062a61]/92',
          'border border-white/12 shadow-[0_22px_70px_-10px_rgba(6,16,45,.7)] text-white'
        )}
      >
        {/* ALWAYS two columns */}
        <div className="grid grid-cols-[0.9fr,1.1fr]">
          {/* LEFT: brand */}
          <div className="relative p-7 border-r border-white/10">
            <div className="flex items-center gap-3">
              <div className="size-9 shrink-0 rounded-full bg-[#0b4aa8] ring-2 ring-white/50 grid place-items-center">
                <Image
                  src="/img/logo.png"
                  alt="Travaky"
                  width={20}
                  height={20}
                  className="opacity-95"
                />
              </div>
              <div className="text-[18px] font-extrabold tracking-tight">Travaky</div>
            </div>

            <div className="mt-6 space-y-3 text-[14px]">
              <div className="flex items-center gap-2.5 text-white/90">
                <CheckCircle2 className="h-4.5 w-4.5 text-emerald-300" />
                <span className="font-semibold">99% Approval Rate</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/90">
                <Clock3 className="h-4.5 w-4.5 text-sky-300" />
                <span className="font-semibold">10-min Response</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/90">
                <Globe2 className="h-4.5 w-4.5 text-blue-200" />
                <span className="font-semibold">150+ Countries</span>
              </div>
            </div>

            <p className="mt-6 text-[11px] text-white/70 leading-relaxed">
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>

          {/* RIGHT: form */}
          <div className="p-7">
            <h3 className="text-[20px] font-bold">{title}</h3>
            <p className="mt-1 text-white/80 text-[13.5px]">
              Welcome{mode === 'login' ? ' back' : ''}. Enter your credentials to continue.
            </p>

            <form className="mt-6 space-y-4" onSubmit={onSubmit}>
              <label className="block text-[12px] text-white/85">Email</label>
              <input
                type="email"
                required
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className={inputCls}
              />

              <label className="block text-[12px] text-white/85">Password</label>
              <div className="relative">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={inputCls}
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
                  aria-label={passwordVisible ? 'Hide password' : 'Show password'}
                >
                  {passwordVisible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={cn(
                  'mt-1.5 w-full rounded-xl py-2.5 font-semibold',
                  'bg-white text-slate-900 hover:bg-white/90 transition',
                  'shadow-[0_6px_18px_-4px_rgba(255,255,255,0.35)] text-[14.5px]'
                )}
              >
                {loading ? 'Please wait…' : cta}
              </button>
            </form>

            {/* Links separated, not jammed */}
            <div className="mt-4 text-[13px]">
              <button
                type="button"
                className="text-white/80 hover:text-white underline-offset-4 hover:underline"
                onClick={() => switchMode()}
              >
                {mode === 'login'
                  ? "Don't have an account? Sign up"
                  : 'Already have an account? Log in'}
              </button>

              <div className="mt-2">
                <a
                  href="/forgot"
                  className="text-white/70 hover:text-white underline-offset-4 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

const inputCls =
  'mt-1 w-full rounded-xl bg-white/10 text-white placeholder:text-white/65 ' +
  'border border-white/20 focus:border-white/40 outline-none ' +
  'px-4 py-2.5 backdrop-blur-sm transition text-[14px]'
