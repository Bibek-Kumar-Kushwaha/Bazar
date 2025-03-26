import { Button } from '@/components/ui/button'
import { Bell, Menu, Sun, User } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-slate-800 text-slate-50 h-16 px-6 md:px-8 shadow-md z-50'>
      
      {/* Left Icon */}
      <Button variant="ghost" className="p-2 rounded-md hover:bg-slate-700">
        <Menu className="w-6 h-6" />
      </Button>

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="p-2 rounded-md hover:bg-slate-700">
          <Sun className="w-6 h-6" />
        </Button>
        <Button variant="ghost" className="p-2 rounded-md hover:bg-slate-700">
          <Bell className="w-6 h-6" />
        </Button>
        <Button variant="ghost" className="p-2 rounded-md hover:bg-slate-700">
          <User className="w-6 h-6" />
        </Button>
      </div>
      
    </nav>
  )
}

export default Navbar
