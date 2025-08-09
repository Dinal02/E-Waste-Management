import { useEffect, useState } from 'react'
import API from '../api'
import { motion } from 'framer-motion'

export default function StaffDashboard(){
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  const token = localStorage.getItem('ew_token')

  const fetchList = async () => {
    if (!token) return
    setLoading(true)
    try{
      const res = await API.get('/api/waste', { headers: { Authorization: `Bearer ${token}` } })
      setList(res.data)
    }catch(err){ console.error(err) }
    finally{ setLoading(false) }
  }

  const changeStatus = async (id, status) => {
    try{
      await API.put(`/api/waste/${id}/status`, { status }, { headers: { Authorization: `Bearer ${token}` } })
      fetchList()
    }catch(err){ console.error(err) }
  }

  useEffect(()=>{ fetchList() }, [token])

  if (!token) return <div className="text-center mt-20">Please <a href="/staff/login" className="text-green-600 underline">login</a></div>

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">All Requests</h2>
      {loading ? <div>Loading...</div> : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Name</th>
                <th className="p-2">Address</th>
                <th className="p-2">Type</th>
                <th className="p-2">Qty</th>
                <th className="p-2">Status</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map(r=> (
                <tr key={r._id} className="border-t">
                  <td className="p-2">{r.name}</td>
                  <td className="p-2">{r.address}</td>
                  <td className="p-2">{r.wasteType}</td>
                  <td className="p-2">{r.quantity}</td>
                  <td className="p-2">{r.status}</td>
                  <td className="p-2 space-x-2">
                    <button onClick={()=>changeStatus(r._id, 'Assigned')} className="px-2 py-1 rounded bg-yellow-500 text-white">Assign</button>
                    <button onClick={()=>changeStatus(r._id, 'Collected')} className="px-2 py-1 rounded bg-green-600 text-white">Collected</button>
                    <button onClick={()=>changeStatus(r._id, 'Rejected')} className="px-2 py-1 rounded bg-red-500 text-white">Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  )
}