'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SignUpForm() {
  const [showPassword, setShowPassword] = useState(true)

  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Create an account</h1>
        <p className="text-gray-500">Enter your information to get started</p>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name">Name</label>
          <input id="name" placeholder="John Doe" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="john@example.com" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="password">Password</label>
          <div className="relative">
            <input 
              id="password" 
              type={showPassword ? "text" : "password"} 
              placeholder="••••••••" 
              required 
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? <EyeOff className="h-4 w-4 text-gray-500" /> : <Eye className="h-4 w-4 text-gray-500" />}
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <input type='checkbox' id="terms" />
          <label htmlFor="terms" className="text-sm">
            I agree to the <Link href="/terms" className="underline">Terms of Service</Link> and <Link href="/privacy" className="underline">Privacy Policy</Link>
          </label>
        </div>
        <Button type="submit" className="w-full">Sign Up</Button>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or sign up with
          </span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
        <Button variant="outline" className="w-full">
          Google
        </Button>
        <Button variant="outline" className="w-full">
          Facebook
        </Button>
        <Button variant="outline" className="w-full">
          Apple
        </Button>
      </div>
      <p className="text-center text-sm text-gray-500">
        Already have an account?{' '}
        <Link href="/signin" className="font-semibold text-primary underline">
          Sign in
        </Link>
      </p>
    </div>
  )
}

