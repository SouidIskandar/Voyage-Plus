// app/services/page.js
'use client'

import { motion } from 'framer-motion'
import { Plane, BookOpen, Globe, Briefcase, Check, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: <Plane className="w-12 h-12" />,
    title: "Voyage",
    description: "Custom travel experiences tailored to your preferences and dreams.",
    features: [
      "Personalized itineraries",
      "Luxury accommodations",
      "Local expert guides",
      "24/7 support",
      "Exclusive experiences",
      "Seamless logistics"
    ],
    price: "From $1,299"
  },
  {
    icon: <BookOpen className="w-12 h-12" />,
    title: "Étude",
    description: "Educational trips that combine learning with cultural immersion.",
    features: [
      "Language courses",
      "Cultural workshops",
      "University visits",
      "Academic tours",
      "Expert lectures",
      "Educational materials"
    ],
    price: "From $899"
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Tourism",
    description: "Discover the world's most amazing sights and experiences.",
    features: [
      "Guided tours",
      "Photo opportunities",
      "Group activities",
      "Sightseeing passes",
      "Cultural experiences",
      "Local cuisine"
    ],
    price: "From $749"
  },
  {
    icon: <Briefcase className="w-12 h-12" />,
    title: "Travail",
    description: "Business travel solutions that combine work and comfort.",
    features: [
      "Business class flights",
      "Executive stays",
      "Meeting arrangements",
      "Transport services",
      "Conference support",
      "Networking events"
    ],
    price: "From $1,599"
  }
]

const process = [
  {
    step: "01",
    title: "Consultation",
    description: "We discuss your travel preferences, interests, and dreams to understand your vision."
  },
  {
    step: "02",
    title: "Planning",
    description: "Our experts craft a personalized itinerary tailored to your specific needs and desires."
  },
  {
    step: "03",
    title: "Booking",
    description: "We handle all reservations, from flights and hotels to unique experiences and guides."
  },
  {
    step: "04",
    title: "Experience",
    description: "Enjoy your journey with 24/7 support and expert guidance throughout your trip."
  }
]

export default function Services() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-[#050b90] mb-6"
          >
            Our <span className="text-[#e60d0d]">Services</span>
          </motion.h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover our comprehensive range of travel services designed to create unforgettable experiences
            tailored to your unique preferences and dreams.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all"
              >
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-blue-100 rounded-2xl text-[#050b90]">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#050b90] text-center mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-center mb-6">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center mb-6">
                  <span className="text-2xl font-bold text-[#050b90]">
                    {service.price}
                  </span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white py-3 rounded-lg font-semibold"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#050b90] mb-6">
              Our <span className="text-[#e60d0d]">Process</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              How we transform your travel dreams into reality with our carefully crafted process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#050b90] to-[#e60d0d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-[#050b90] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#050b90] to-[#e60d0d] rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your dream vacation and let us create an unforgettable experience for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#050b90] px-8 py-4 rounded-lg font-bold text-lg"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg"
              >
                Call Now
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}