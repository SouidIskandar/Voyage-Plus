'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

// Dynamic travel destinations data
const destinations = [
  "Paris, France",
  "Tokyo, Japan",
  "Santorini, Greece",
  "New York, USA",
  "Bali, Indonesia",
  "Swiss Alps",
  "Machu Picchu, Peru"
]

export default function Hero() {
  const [currentDestination, setCurrentDestination] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  
  // Interactive background position based on mouse movement
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const backgroundX = useTransform(mouseX, [0, window.innerWidth], [-20, 20])
  const backgroundY = useTransform(mouseY, [0, window.innerHeight], [-20, 20])

  // Handle mouse movement for parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }

  // Cycle through destinations
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentDestination((prev) => (prev + 1) % destinations.length)
        setIsVisible(true)
      }, 500)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  // Animate numbers for stats
  const [clients, setClients] = useState(0)
  const [destinationsCount, setDestinationsCount] = useState(0)
  const [experience, setExperience] = useState(0)
  
  useEffect(() => {
    const clientsAnimation = animate(0, 10000, {
      duration: 2,
      onUpdate: (value) => setClients(Math.floor(value)),
    })
    
    const destinationsAnimation = animate(0, 50, {
      duration: 2,
      onUpdate: (value) => setDestinationsCount(Math.floor(value)),
    })
    
    const experienceAnimation = animate(0, 15, {
      duration: 2,
      onUpdate: (value) => setExperience(Math.floor(value)),
    })
    
    return () => {
      clientsAnimation.stop()
      destinationsAnimation.stop()
      experienceAnimation.stop()
    }
  }, [])

  return (
    <section 
      className="relative w-full h-screen flex items-center justify-center text-center px-6 sm:px-12 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background with parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-red-50"
        style={{
          x: backgroundX,
          y: backgroundY,
        }}
      />
      
      {/* Floating elements */}
      <motion.div 
        className="absolute top-20 left-10 w-10 h-10 rounded-full bg-[#050b90] opacity-20"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-[#e60d0d] opacity-20"
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full bg-[#050b90] opacity-10"
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#050b90] mb-6 leading-tight">
          Explore{' '}
          <motion.span 
            key={currentDestination}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-[#e60d0d] inline-block"
          >
            {destinations[currentDestination]}
          </motion.span>{' '}
          with{' '}
          <span className="text-[#e60d0d]">Voyage plus</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
          Innovative journeys, unforgettable experiences, and tailored adventures
          for every traveler.
        </p>

        {/* Interactive Stats */}
        <motion.div 
          className="flex justify-center gap-8 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-[#050b90]">{clients.toLocaleString()}+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#050b90]">{destinationsCount}+</div>
            <div className="text-gray-600">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#050b90]">{experience}+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </motion.div>

        {/* Call Now Button with enhanced animation */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="tel:+1234567890"
            className="relative inline-flex items-center px-8 py-4 text-white font-semibold rounded-full bg-gradient-to-r from-[#050b90] to-[#e60d0d] shadow-lg overflow-hidden group"
          >
            <motion.span 
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
              whileHover={{ scale: 1.5 }}
            />
            <span className="relative z-10 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-gray-600 mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}