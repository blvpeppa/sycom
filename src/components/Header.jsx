import  { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-green-600">Sycom Industry</div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-green-600">About</a>
            <a href="#services" className="text-gray-700 hover:text-green-600">Services</a>
            <a href="#team" className="text-gray-700 hover:text-green-600">Team</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600">Contact</a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <a href="#home" className="block py-2 text-gray-700">Home</a>
            <a href="#about" className="block py-2 text-gray-700">About</a>
            <a href="#services" className="block py-2 text-gray-700">Services</a>
            <a href="#team" className="block py-2 text-gray-700">Team</a>
            <a href="#contact" className="block py-2 text-gray-700">Contact</a>
          </div>
        )}
      </div>
    </header>
  )
}
 