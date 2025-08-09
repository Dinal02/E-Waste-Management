import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="bg-white shadow sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="font-bold text-xl text-green-600">Municipal E-Waste</Link>
        <nav className="space-x-4">
          <Link to="/" className="text-sm text-gray-700">Request Pickup</Link>
          <Link to="/staff/login" className="text-sm text-gray-700">Staff</Link>
        </nav>
      </div>
    </header>
  )
}