import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className=' bg-gray-900 text-white p-6 flex flex-col items-center justify-center space-y-4'>
      <h3 className="text-sm md:text-2xl">&copy; 2025 - direitos reservados</h3>
      <div  className="flex space-x-4 text-2xl">
        <a href="#" className="hover:text-blue-500 transition-colors duration-300">
          <FaFacebook/>
        </a>
        <a href="#" className="hover:text-blue-500 transition-colors duration-300">
          <FaInstagram/>
        </a>
      </div>
    </footer>
  )
}

export default Footer