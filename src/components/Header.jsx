import  { Menu, X, Sun, Moon } from 'lucide-react'
import { useState } from 'react'
import { useDarkMode } from '../contexts/DarkModeContext'
import logo from '../assets/logo.svg'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { darkMode, toggleDarkMode } = useDarkMode()

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src={logo} alt="Sycom Industry Logo" className="h-10 w-auto" />
            <b className="text-blue-600 hover:text-dark-blue-600">SYCOM INDUSTRY</b>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-dark-blue-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-dark-blue-600">About</a>
            <a href="#services" className="text-gray-700 hover:text-dark-blue-600">Services</a>
            <a href="#products" className="text-gray-700 hover:text-dark-blue-600">Products</a>
            <a href="#company-bio" className="text-gray-700 hover:text-dark-blue-600">Company Bio</a>
            <a href="#team" className="text-gray-700 hover:text-dark-blue-600">Team</a>
            <a href="#contact" className="text-gray-700 hover:text-dark-blue-600">Contact</a>
            <a href="#help" className="text-gray-700 hover:text-dark-blue-600">Help</a>
            <button
              onClick={toggleDarkMode}
              className="text-gray-700 hover:text-dark-blue-600 focus:outline-none"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
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
            <a href="#products" className="block py-2 text-gray-700">Products</a>
            <a href="#company-bio" className="block py-2 text-gray-700">Company Bio</a>
            <a href="#team" className="block py-2 text-gray-700">Team</a>
            <a href="#contact" className="block py-2 text-gray-700">Contact</a>
            <a href="#help" className="block py-2 text-gray-700">Help</a>
            <button
              onClick={toggleDarkMode}
              className="block py-2 text-gray-700 w-full text-left"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
 
