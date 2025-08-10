import { Routes, Route, Link } from 'react-router-dom'
import PublicForm from './pages/PublicForm'
import StaffDashboard from './pages/StaffDashboard'
import Login from './pages/Login'
import Header from './components/Header'

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<PublicForm />} />
          <Route path="/staff/login" element={<Login />} />
          <Route path="/staff" element={<StaffDashboard />} />
        </Routes>
      </div>
    </div>
  )
}

