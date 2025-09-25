'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Plane, Globe, BookOpen, Briefcase, ArrowRight, Check } from 'lucide-react'

const services = [
  {
    id: 1,
    icon: <Plane className="w-8 h-8" />,
    title: "Voyage",
    description: "Custom travel experiences tailored to your preferences and dreams.",
    features: ["Personalized itineraries", "Luxury accommodations", "Local expert guides", "24/7 support"],
    price: "From $1,299",
    popular: true,
  },
  {
    id: 2,
    icon: <BookOpen className="w-8 h-8" />,
    title: "Étude",
    description: "Educational trips that combine learning with cultural immersion.",
    features: ["Language courses", "Cultural workshops", "University visits", "Academic tours"],
    price: "From $899",
    popular: false,
  },
  {
    id: 3,
    icon: <Globe className="w-8 h-8" />,
    title: "Tourism",
    description: "Discover the world's most amazing sights and experiences.",
    features: ["Guided tours", "Photo opportunities", "Group activities", "Sightseeing passes"],
    price: "From $749",
    popular: false,
  },
  {
    id: 4,
    icon: <Briefcase className="w-8 h-8" />,
    title: "Travail",
    description: "Business travel solutions that combine work and comfort.",
    features: ["Business class flights", "Executive stays", "Meeting arrangements", "Transport services"],
    price: "From $1,599",
    popular: false,
  },
]

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-20 px-6 sm:px-12 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#050b90] mb-6">
            Our <span className="text-[#e60d0d]">Services</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover our range of travel services designed to make your journey unforgettable
          </p>
        </motion.div>

        {/* Services Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {service.icon}
              {service.title}
            </button>
          ))}
        </div>

        {/* Services Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden border-2 transition-all ${
                activeTab === index ? 'border-[#050b90] scale-105' : 'border-transparent'
              } ${service.popular ? 'ring-2 ring-[#e60d0d] ring-offset-2' : ''}`}
            >
              {service.popular && (
                <div className="bg-[#e60d0d] text-white text-center py-2 font-bold">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full text-[#050b90]">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-center text-[#050b90] mb-2">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-center mb-6">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 mb-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mb-6">
                  <span className="text-2xl font-bold text-[#050b90]">
                    {service.price}
                  </span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                >
                  Learn More <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl font-bold text-[#050b90] mb-2">50+</div>
            <div className="text-gray-600">Destinations</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl font-bold text-[#050b90] mb-2">10K+</div>
            <div className="text-gray-600">Happy Travelers</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl font-bold text-[#050b90] mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl font-bold text-[#050b90] mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}