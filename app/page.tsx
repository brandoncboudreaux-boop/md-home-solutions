'use client'

import { useState } from 'react'
import { LogIn } from 'lucide-react'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    alert('✅ Logged in! (Demo mode - we will connect real Supabase auth next)')
    window.location.href = '/dashboard'
  }

  return (
    <div className="min-h-screen bg-emerald-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4">
            <span className="text-4xl">☀️</span>
          </div>
          <h1 className="text-3xl font-bold text-emerald-800">MD Home Solutions</h1>
          <p className="text-emerald-600 mt-1">Job Tracking & Profitability</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-emerald-500"
              placeholder="you@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-emerald-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-5 rounded-3xl text-lg font-medium flex items-center justify-center gap-2 hover:bg-emerald-700"
          >
            <LogIn size={22} />
            Log In
          </button>
        </form>

        <div className="text-center mt-8 text-sm text-gray-500">
          Demo mode • Field techs can use this on their phones
        </div>
      </div>
    </div>
  )
}
