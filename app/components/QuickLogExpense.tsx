'use client'

import { useState } from 'react'
import { Camera, Upload } from 'lucide-react'

export default function QuickLogExpense({ jobId }: { jobId?: string }) {
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('material')
  const [photo, setPhoto] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!amount || !description) {
      alert("Please enter amount and description")
      return
    }

    setUploading(true)

    // Simulate saving (we'll connect to Supabase next)
    setTimeout(() => {
      alert(`✅ Expense of $${amount} for "${description}" logged successfully!`)
      setAmount('')
      setDescription('')
      setPhoto(null)
      setUploading(false)
    }, 800)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Amount ($)</label>
        <input
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-5 py-5 text-3xl font-semibold border border-gray-300 rounded-3xl focus:outline-none focus:border-emerald-600"
          placeholder="0.00"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-5 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:border-emerald-600"
          placeholder="e.g. 12 solar panels, inverter wiring, mileage"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-5 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:border-emerald-600"
        >
          <option value="material">Materials</option>
          <option value="labor">Labor Hours</option>
          <option value="expense">Travel / Expense</option>
          <option value="adder">Adder / Change Order</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Receipt / Photo (optional)</label>
        <label className="border-2 border-dashed border-gray-300 rounded-3xl h-40 flex flex-col items-center justify-center cursor-pointer hover:border-emerald-400 transition-colors">
          <Camera size={48} className="text-gray-400 mb-2" />
          <span className="text-sm text-gray-500">Tap to take photo or upload receipt</span>
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={(e) => e.target.files && setPhoto(e.target.files[0])}
            className="hidden"
          />
        </label>
        {photo && <p className="text-xs text-emerald-600 mt-2">Photo selected: {photo.name}</p>}
      </div>

      <button
        type="submit"
        disabled={uploading}
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 rounded-3xl text-lg font-medium transition-all active:scale-[0.98]"
      >
        {uploading ? "Saving..." : "Save Expense"}
      </button>
    </form>
  )
}
