// app/services/etude/page.js
'use client'

import { motion } from 'framer-motion'
import { BookOpen, GraduationCap, Users, Globe, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const programs = [
  {
    title: "Language Immersion",
    description: "Intensive language courses combined with cultural activities",
    duration: "2-4 weeks",
    locations: ["Spain", "France", "Japan", "Italy"]
  },
  {
    title: "Academic Tours",
    description: "Educational visits to universities and research institutions",
    duration: "1-2 weeks", 
    locations: ["USA", "UK", "Germany", "Canada"]
  },
  {
    title: "Cultural Workshops",
    description: "Hands-on learning of traditional arts and crafts",
    duration: "1-3 weeks",
    locations: ["Thailand", "India", "Mexico", "Morocco"]
  }
]

export default function EtudeService() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block p-4 bg-white/20 rounded-2xl backdrop-blur-sm mb-6">
              <BookOpen className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Étude</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Educational journeys that combine learning with cultural immersion. 
              Expand your knowledge while exploring the world's most fascinating destinations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#050b90] mb-6">
              Educational <span className="text-[#e60d0d]">Programs</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose from our diverse range of educational travel experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <div className="bg-blue-100 p-3 rounded-2xl inline-block mb-4">
                  <GraduationCap className="w-8 h-8 text-[#050b90]" />
                </div>
                <h3 className="text-xl font-bold text-[#050b90] mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="bg-gray-100 rounded-lg p-3 mb-4">
                  <p className="text-sm font-semibold text-[#050b90]">Duration: {program.duration}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Available in:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {program.locations.map((location, i) => (
                      <span key={i} className="bg-blue-100 text-[#050b90] text-xs px-2 py-1 rounded-full">
                        {location}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add similar sections for Tourism and Travail services */}

      {/* Navigation to other services */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-[#050b90] text-center mb-8">
            Explore Our Other Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/voyage" className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
              <div className="bg-blue-100 p-3 rounded-2xl inline-block mb-4">
                <Globe className="w-8 h-8 text-[#050b90]" />
              </div>
              <h4 className="font-bold text-[#050b90] mb-2">Voyage</h4>
              <p className="text-gray-600 text-sm">Luxury travel experiences</p>
              <ArrowRight className="w-5 h-5 text-[#e60d0d] mx-auto mt-4" />
            </Link>

            <Link href="/services/tourism" className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
              <div className="bg-green-100 p-3 rounded-2xl inline-block mb-4">
                <Globe className="w-8 h-8 text-[#050b90]" />
              </div>
              <h4 className="font-bold text-[#050b90] mb-2">Tourism</h4>
              <p className="text-gray-600 text-sm">Sightseeing and activities</p>
              <ArrowRight className="w-5 h-5 text-[#e60d0d] mx-auto mt-4" />
            </Link>

            <Link href="/services/travail" className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
              <div className="bg-purple-100 p-3 rounded-2xl inline-block mb-4">
                <Users className="w-8 h-8 text-[#050b90]" />
              </div>
              <h4 className="font-bold text-[#050b90] mb-2">Travail</h4>
              <p className="text-gray-600 text-sm">Business travel solutions</p>
              <ArrowRight className="w-5 h-5 text-[#e60d0d] mx-auto mt-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}