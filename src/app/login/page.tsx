"use client"

import { AuthDialog } from '@/components/auth/AuthDialog'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Sign in to your Travaky account with secure OTP verification
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Sign in to your account
              </h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Choose your preferred verification method
              </p>
            </div>

            <AuthDialog 
              mode="login" 
              trigger={
                <Button className="w-full h-12 text-lg">
                  Sign In
                </Button>
              }
              onSuccess={() => {
                window.location.href = '/dashboard'
              }}
            />

            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{' '}
              <AuthDialog 
                mode="signup" 
                trigger={
                  <button className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                    Sign up
                  </button>
                }
                onSuccess={() => {
                  window.location.href = '/dashboard'
                }}
              />
            </div>

            <div className="text-center">
              <Link 
                href="/" 
                className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                ← Back to home
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 dark:text-gray-400">
          <p>
            Secure authentication with Email, SMS, or WhatsApp OTP
          </p>
        </div>
      </div>
    </div>
  )
}
