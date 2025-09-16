-- Create SMS OTP table
CREATE TABLE IF NOT EXISTS auth_sms_otp (
  id BIGSERIAL PRIMARY KEY,
  phone TEXT NOT NULL,
  code_hash TEXT NOT NULL,
  purpose TEXT NOT NULL CHECK (purpose IN ('signup', 'login')),
  used BOOLEAN DEFAULT FALSE,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create WhatsApp OTP table
CREATE TABLE IF NOT EXISTS auth_whatsapp_otp (
  id BIGSERIAL PRIMARY KEY,
  phone TEXT NOT NULL,
  code_hash TEXT NOT NULL,
  purpose TEXT NOT NULL CHECK (purpose IN ('signup', 'login')),
  used BOOLEAN DEFAULT FALSE,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add phone column to users table if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'users' AND column_name = 'phone') THEN
        ALTER TABLE users ADD COLUMN phone TEXT UNIQUE;
    END IF;
END $$;

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_auth_sms_otp_phone_purpose ON auth_sms_otp(phone, purpose);
CREATE INDEX IF NOT EXISTS idx_auth_sms_otp_expires_at ON auth_sms_otp(expires_at);
CREATE INDEX IF NOT EXISTS idx_auth_whatsapp_otp_phone_purpose ON auth_whatsapp_otp(phone, purpose);
CREATE INDEX IF NOT EXISTS idx_auth_whatsapp_otp_expires_at ON auth_whatsapp_otp(expires_at);

-- Enable RLS
ALTER TABLE auth_sms_otp ENABLE ROW LEVEL SECURITY;
ALTER TABLE auth_whatsapp_otp ENABLE ROW LEVEL SECURITY;

-- Create RLS policies (allow service role to manage OTP records)
CREATE POLICY "Service role can manage SMS OTP" ON auth_sms_otp
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role can manage WhatsApp OTP" ON auth_whatsapp_otp
  FOR ALL USING (auth.role() = 'service_role');
