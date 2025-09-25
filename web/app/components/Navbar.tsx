'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Globe, User, Search } from 'lucide-react'

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '#',
    submenu: [
      { name: 'Voyage', href: '/services/voyage', description: 'Custom travel experiences' },
      { name: 'Étude', href: '/services/etude', description: 'Educational trips abroad' },
      { name: 'Tourism', href: '/services/tourism', description: 'Sightseeing & activities' },
      { name: 'Travail', href: '/services/travail', description: 'Work & business travel' },
    ],
  },
  { name: 'Events', href: '/events' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node) && searchQuery === '') {
        setSearchOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [searchQuery])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [])

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality
    console.log('Searching for:', searchQuery)
    setSearchQuery('')
    setSearchOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo with animation */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-shrink-0"
        >
          <Link href="/" className="text-3xl md:text-4xl font-extrabold tracking-tight flex items-center gap-1">
            <span className="text-[#050b90]">Voyage</span>
            <span className="text-[#e60d0d]">plus</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {links.map((link) =>
            link.submenu ? (
              <div
                key={link.name}
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => toggleDropdown(link.name)}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all ${
                    activeDropdown === link.name 
                      ? 'text-[#050b90] bg-blue-50' 
                      : 'text-gray-700 hover:text-[#050b90] hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                  <motion.div
                    animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50"
                    >
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-3 text-gray-800 hover:bg-blue-50 transition group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="font-medium group-hover:text-[#050b90]">{sub.name}</div>
                          <div className="text-sm text-gray-600 mt-1">{sub.description}</div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-gray-700 hover:text-[#050b90] rounded-lg hover:bg-gray-100 transition"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Search bar */}
          <div className="relative" ref={searchRef}>
            {searchOpen ? (
              <motion.form
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 200, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                onSubmit={handleSearch}
                className="bg-white rounded-full overflow-hidden border border-gray-300 flex"
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search destinations..."
                  className="py-2 px-4 w-full focus:outline-none text-sm"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-3 text-gray-600 hover:text-[#050b90]"
                >
                  <Search size={18} />
                </button>
              </motion.form>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-gray-700 hover:text-[#050b90] rounded-full hover:bg-gray-100"
              >
                <Search size={20} />
              </button>
            )}
          </div>

          {/* Language selector */}
          <div className="hidden md:block relative group">
            <button className="flex items-center gap-1 p-2 text-gray-700 hover:text-[#050b90] rounded-full hover:bg-gray-100">
              <Globe size={20} />
              <span className="text-sm">EN</span>
            </button>
            <div className="absolute top-full right-0 mt-1 w-32 bg-white rounded-lg shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                English
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Français
              </button>
            </div>
          </div>

          {/* User account */}
          <button className="hidden md:block p-2 text-gray-700 hover:text-[#050b90] rounded-full hover:bg-gray-100">
            <User size={20} />
          </button>

          {/* Call Now button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+1234567890"
            className="hidden md:flex items-center gap-2 text-white px-4 py-2.5 rounded-full shadow-lg hover:opacity-90 transition"
            style={{ background: 'linear-gradient(90deg, #050b90 0%, #e60d0d 100%)' }}
          >
            <Phone size={18} />
            <span>Call Now</span>
          </motion.a>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#050b90] rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {links.map((link) =>
                link.submenu ? (
                  <div key={link.name} className="flex flex-col">
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="flex items-center justify-between py-2 px-4 text-gray-800 hover:text-[#050b90] rounded-lg hover:bg-gray-100"
                    >
                      <span>{link.name}</span>
                      <motion.div
                        animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-6 mt-1 space-y-2"
                        >
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block py-2 text-gray-700 hover:text-[#050b90]"
                              onClick={() => setIsOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block py-2 px-4 text-gray-800 hover:text-[#050b90] rounded-lg hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 mb-4">
                  <button className="p-2 text-gray-700 rounded-full bg-gray-100">
                    <Globe size={20} />
                  </button>
                  <button className="p-2 text-gray-700 rounded-full bg-gray-100">
                    <User size={20} />
                  </button>
                </div>
                
                {/* Call Now button mobile */}
                <a
                  href="tel:+1234567890"
                  className="flex items-center justify-center gap-2 w-full text-white py-3 rounded-full shadow-lg hover:opacity-90 transition"
                  style={{ background: 'linear-gradient(90deg, #050b90 0%, #e60d0d 100%)' }}
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}