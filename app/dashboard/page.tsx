'use client'

import { useState } from 'react'
import { PlusCircle, TrendingUp, DollarSign } from 'lucide-react'

export default function Dashboard() {
  const [showExpenseForm, setShowExpenseForm] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white border-b px-6 py-5 sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">MD Home Solutions</h1>
            <p className="text-sm text-gray-500">Solar Operations</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Profitability Cards */}
        <div>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="text-emerald-600" /> Profitability Overview
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-3xl shadow">
              <div className="text-sm text-gray-500">Total Revenue</div>
              <div className="text-3xl font-bold text-emerald-700 mt-2">$248,750</div>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow">
              <div className="text-sm text-gray-500">Average Margin</div>
              <div className="text-3xl font-bold text-emerald-700 mt-2">24.8%</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setShowExpenseForm(true)}
              className="bg-white p-8 rounded-3xl shadow flex flex-col items-center hover:bg-emerald-50 transition-all"
            >
              <PlusCircle size={48} className="text-emerald-600 mb-4" />
              <span className="font-medium text-lg">Log Expense</span>
              <span className="text-xs text-gray-500 mt-1">Materials, travel, etc.</span>
            </button>

            <button className="bg-white p-8 rounded-3xl shadow flex flex-col items-center hover:bg-emerald-50 transition-all">
              <DollarSign size={48} className="text-emerald-600 mb-4" />
              <span className="font-medium text-lg">Log Payment</span>
              <span className="text-xs text-gray-500 mt-1">From lender</span>
            </button>
          </div>
        </div>

        {/* Recent Jobs */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Recent Jobs</h2>
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-3xl shadow">
              <div className="flex justify-between">
                <div>
                  <div className="font-medium">Phylnieshia Streaty</div>
                  <div className="text-sm text-gray-500">8.4 kW • Mar 28</div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-700 font-bold">31% margin</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-3xl shadow">
              <div className="flex justify-between">
                <div>
                  <div className="font-medium">Marvin Anderson</div>
                  <div className="text-sm text-gray-500">12.6 kW • Apr 2</div>
                </div>
                <div className="text-right">
                  <div className="text-amber-600 font-bold">18% margin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button 
        onClick={() => setShowExpenseForm(true)}
        className="fixed bottom-20 right-6 bg-emerald-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center z-20"
      >
        <PlusCircle size={32} />
      </button>

      {/* Simple Expense Modal */}
      {showExpenseForm && (
        <div className="fixed inset-0 bg-black/70 flex items-end z-50">
          <div className="bg-white w-full rounded-t-3xl p-6">
            <div className="flex justify-between mb-6">
              <h3 className="text-xl font-semibold">Log Expense</h3>
              <button onClick={() => setShowExpenseForm(false)} className="text-3xl">×</button>
            </div>
            
            <div className="space-y-6">
              <input 
                type="number" 
                placeholder="Amount ($)" 
                className="w-full p-5 text-3xl border rounded-3xl" 
              />
              <input 
                type="text" 
                placeholder="Description (e.g. solar panels, mileage)" 
                className="w-full p-5 border rounded-3xl" 
              />
              <button 
                onClick={() => {
                  alert("Expense saved! (Demo)")
                  setShowExpenseForm(false)
                }}
                className="w-full bg-emerald-600 text-white py-6 rounded-3xl text-lg font-medium"
              >
                Save Expense
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
