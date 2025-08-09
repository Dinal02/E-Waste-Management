import { useState } from 'react'
import API from '../api'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [form, setForm] = useState({ username:'', password:'' })
  const navigate = useNavigate()

  const handle = async (e) => {
    e.preventDefault();
    try{
      const res = await API.post('/api/auth/login', form)
      localStorage.setItem('ew_token', res.data.token)
      navigate('/staff')
    }catch(err){ alert('Invalid credentials') }
  }

  return (
    <div className="max-w-sm mx-auto mt-12 bg-white p-6 rounded shadow">
      <h3 className="text-xl font-semibold mb-4">Staff Login</h3>
      <form onSubmit={handle} className="space-y-3">
        <input required value={form.username} onChange={e=>setForm({...form, username:e.target.value})} placeholder="Username" className="w-full p-2 border rounded" />
        <input required type="password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} placeholder="Password" className="w-full p-2 border rounded" />
        <button className="w-full bg-green-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
  )
}