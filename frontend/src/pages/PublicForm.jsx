import { useState } from 'react'
import { motion } from 'framer-motion'
import API from '../api'

export default function PublicForm(){
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', wasteType: '', quantity: '', note: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      setLoading(true)
      await API.post('/api/waste/submit', form)
      alert('Request submitted. Thank you!')
      setForm({ name: '', email: '', phone: '', address: '', wasteType: '', quantity: '', note: '' })
    }catch(err){
      alert('Error submitting')
    }finally{ setLoading(false) }
  }

  return (
    <motion.div initial={{opacity:0, y: -20}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Request E‑Waste Pickup</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input required name="name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Full name" className="w-full p-2 border rounded" />
        <div className="grid grid-cols-2 gap-3">
          <input name="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email (optional)" className="p-2 border rounded" />
          <input name="phone" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="Phone (optional)" className="p-2 border rounded" />
        </div>
        <input required name="address" value={form.address} onChange={e=>setForm({...form, address:e.target.value})} placeholder="Pickup address" className="w-full p-2 border rounded" />
        <div className="grid grid-cols-2 gap-3">
          <select required value={form.wasteType} onChange={e=>setForm({...form, wasteType:e.target.value})} className="p-2 border rounded">
            <option value="">Select waste type</option>
            <option>Mobile</option>
            <option>Laptop</option>
            <option>TV</option>
            <option>Other</option>
          </select>
          <input value={form.quantity} onChange={e=>setForm({...form, quantity:e.target.value})} placeholder="Quantity (e.g. 2 items)" className="p-2 border rounded" />
        </div>
        <textarea value={form.note} onChange={e=>setForm({...form, note:e.target.value})} placeholder="Additional notes (optional)" className="w-full p-2 border rounded" />
        <motion.button whileHover={{scale:1.03}} whileTap={{scale:0.98}} disabled={loading} type="submit" className="bg-green-600 text-white p-2 rounded w-full">{loading? 'Sending...' : 'Submit Request'}</motion.button>
      </form>
    </motion.div>
  )
}