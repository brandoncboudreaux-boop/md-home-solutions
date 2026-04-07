'use client'

import { useEffect, useState } from 'react'
import { PlusCircle, DollarSign, TrendingUp, Users } from 'lucide-react'
import QuickLogExpense from '@/components/QuickLogExpense'

export default function Dashboard() {
  const [showExpenseForm, setShowExpenseForm] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white border-b px-6 py-5 sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">MD Home Solutions</h1>
            <p className="text-sm text-gray-500">Welcome back</p>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500">Today</div>
            <div className="font-medium">April 6, 2026</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Profitability Overview */}
        <div>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="text-emerald-600" /> Overall Profitability
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-3xl shadow">
              <div className="text-sm text-gray-500">Total Revenue</div>
              <div className="text-3xl font-bold text-emerald-700 mt-1">$248,750</div>
            </div>
            <div className="bg-white p-5 rounded-3xl shadow">
              <div className="text-sm text-gray-500">Avg Margin</div>
              <div className="text-3xl font-bold text-emerald-700 mt-1">24.8%</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setShowExpenseForm(true)}
              className="bg-white p-6 rounded-3xl shadow flex flex-col items-center hover:bg-emerald-50 active:scale-95 transition-all"
            >
              <PlusCircle size={48} className="text-emerald-600 mb-3" />
              <span className="font-medium">Log Expense</span>
              <span className="text-xs text-gray-500 mt-1">Materials • Travel • etc</span>
            </button>

            <button className="bg-white p-6 rounded-3xl shadow flex flex-col items-center hover:bg-emerald-50 active:scale-95 transition-all">
              <DollarSign size={48} className="text-emerald-600 mb-3" />
              <span className="font-medium">Log Payment</span>
              <span className="text-xs text-gray-500 mt-1">Received from lender</span>
            </button>
          </div>
        </div>

        {/* Recent Jobs */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Jobs</h2>
            <span className="text-sm text-emerald-600">View all →</span>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white p-5 rounded-3xl shadow flex justify-between items-center">
              <div>
                <div className="font-medium">Phylnieshia Streaty</div>
                <div className="text-sm text-gray-500">8.4 kW • Installed Mar 28</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-emerald-700">31%</div>
                <div className="text-xs text-gray-500">margin</div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-3xl shadow flex justify-between items-center">
              <div>
                <div className="font-medium">Marvin Anderson</div>
                <div className="text-sm text-gray-500">12.6 kW • Installed Apr 2</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-amber-600">18%</div>
                <div className="text-xs text-gray-500">margin</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Quick Log Button */}
      <button 
        onClick={() => setShowExpenseForm(true)}
        className="fixed bottom-20 right-6 bg-emerald-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center z-20 active:scale-90 transition-all"
      >
        <PlusCircle size={32} />
      </button>

      {/* Expense Modal */}
      {showExpenseForm && (
        <div className="fixed inset-0 bg-black/70 flex items-end z-50">
          <div className="bg-white w-full rounded-t-3xl p-6 max-h-[85vh] overflow-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Log New Expense</h3>
              <button onClick={() => setShowExpenseForm(false)} className="text-gray-400 text-2xl">×</button>
            </div>
            
            <QuickLogExpense jobId="demo-job-1" />
          </div>
        </div>
      )}
    </div>
  )
}
