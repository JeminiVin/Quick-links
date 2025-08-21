"use client"
import Link from "next/link"
import React, { useState } from "react"
import { Menu, X } from "lucide-react" // hamburger + close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="h-20 bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 shadow-lg flex justify-between items-center px-6 md:px-12">
      {/* Logo Section */}
      <div className="logo flex items-center gap-2">
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/link.png"
          alt="logo"
          className="h-8 w-8"
        />
        <span className="font-extrabold text-2xl text-white tracking-wide">
          <Link href="/">Linkify</Link>
        </span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 items-center text-white font-medium">
        <Link href="/" className="relative group cursor-pointer">
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all group-hover:w-full"></span>
        </Link>
        <Link href="/about" className="relative group cursor-pointer">
          About
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all group-hover:w-full"></span>
        </Link>
        <Link href="/shorten" className="relative group cursor-pointer">
          Shorten
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all group-hover:w-full"></span>
        </Link>
        <Link href="/contact" className="relative group cursor-pointer">
          Contact Us
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all group-hover:w-full"></span>
        </Link>

        {/* Buttons */}
        <li className="flex gap-3 ml-4">
          <Link href="/shorten">
            <button className="bg-purple-500/80 backdrop-blur-md text-white font-semibold px-4 py-2 rounded-xl shadow-lg hover:bg-purple-600 hover:scale-105 transition-all">
              🚀 Try Now
            </button>
          </Link>
          <Link href="/vinayakgit">
            <button className="bg-purple-500/80 backdrop-blur-md text-white font-semibold px-4 py-2 rounded-xl shadow-lg hover:bg-purple-600 hover:scale-105 transition-all">
              💻 GitHub
            </button>
          </Link>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-purple-900/95 backdrop-blur-md flex flex-col items-center gap-6 py-6 text-white font-medium z-50">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/shorten" onClick={() => setIsOpen(false)}>Shorten</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>

          <div className="flex gap-3 mt-4">
            <Link href="/shorten" onClick={() => setIsOpen(false)}>
              <button className="bg-purple-500/80 text-white font-semibold px-4 py-2 rounded-xl shadow-lg hover:bg-purple-600 transition-all">
                🚀 Try Now
              </button>
            </Link>
            <Link href="/github" onClick={() => setIsOpen(false)}>
              <button className="bg-purple-500/80 text-white font-semibold px-4 py-2 rounded-xl shadow-lg hover:bg-purple-600 transition-all">
                💻 GitHub
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
