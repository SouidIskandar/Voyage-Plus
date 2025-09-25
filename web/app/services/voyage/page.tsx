'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Plane, Map, Clock, Users, Star, Check, ArrowRight, Calendar, Heart, BookOpen, Globe, Briefcase } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: <Map className="w-8 h-8" />,
    title: "Personalized Itineraries",
    description: "Custom-designed travel plans tailored to your specific interests and preferences"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Luxury Accommodations",
    description: "Stay at handpicked luxury hotels and resorts that exceed expectations"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Local Guides",
    description: "Knowledgeable guides who provide authentic cultural experiences"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Support",
    description: "Round-the-clock assistance throughout your journey"
  }
]

const packages = [
  {
    name: "European Romance",
    duration: "10 days",
    price: 3299,
    previousPrice: 3899,
    destinations: ["Paris", "Venice", "Santorini"],
    highlights: ["Private gondola ride", "Wine tasting", "Sunset cruise"]
  },
  {
    name: "Asian Adventure",
    duration: "14 days",
    price: 4299,
    previousPrice: 4999,
    destinations: ["Tokyo", "Bali", "Singapore"],
    highlights: ["Temple visits", "Beach resort", "City tours"]
  },
  {
    name: "Mediterranean Escape",
    duration: "8 days",
    price: 2799,
    previousPrice: 3299,
    destinations: ["Barcelona", "Amalfi Coast", "Greek Islands"],
    highlights: ["Cooking class", "Boat excursion", "Historic sites"]
  }
]

export default function VoyageService() {
  const [selectedPackage, setSelectedPackage] = useState(0)

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block p-4 bg-white/20 rounded-2xl backdrop-blur-sm mb-6">
              <Plane className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Voyage</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Custom travel experiences tailored to your preferences and dreams. Luxury accommodations, 
              expert guides, and unforgettable moments crafted just for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#050b90] mb-6">
              Why Choose <span className="text-[#e60d0d]">Voyage</span>?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our premium service offers everything you need for the perfect luxury travel experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
              >
                <div className="text-[#050b90] mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#050b90] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#050b90] mb-6">
              Signature <span className="text-[#e60d0d]">Packages</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore our curated collection of luxury travel experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#050b90] mb-2">{pkg.name}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{pkg.duration}</span>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-[#050b90]">${pkg.price}</span>
                    <span className="text-gray-500 line-through ml-2">${pkg.previousPrice}</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Destinations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.destinations.map((dest, i) => (
                        <span key={i} className="bg-blue-100 text-[#050b90] text-sm px-2 py-1 rounded-full">
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {pkg.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white py-3 rounded-lg font-semibold"
                  >
                    Book This Package
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#050b90] mb-6">
              How It <span className="text-[#e60d0d]">Works</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#050b90] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-[#050b90] mb-3">Consultation</h3>
              <p className="text-gray-600">
                Share your travel dreams and preferences with our experts
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#e60d0d] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-[#050b90] mb-3">Custom Planning</h3>
              <p className="text-gray-600">
                We design a personalized itinerary just for you
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#050b90] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-[#050b90] mb-3">Experience</h3>
              <p className="text-gray-600">
                Enjoy your journey with 24/7 support and expert guidance
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#050b90] to-[#e60d0d]">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Heart className="w-12 h-12 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Your Dream Journey?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let us craft the perfect luxury travel experience tailored to your desires
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#050b90] px-8 py-4 rounded-lg font-bold text-lg"
              >
                Start Planning
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg"
              >
                View Gallery
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation to other services */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-[#050b90] text-center mb-8">
            Explore Our Other Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/etude" className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
              <div className="bg-blue-100 p-3 rounded-2xl inline-block mb-4">
                <BookOpen className="w-8 h-8 text-[#050b90]" />
              </div>
              <h4 className="font-bold text-[#050b90] mb-2">Étude</h4>
              <p className="text-gray-600 text-sm">Educational travel experiences</p>
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
                <Briefcase className="w-8 h-8 text-[#050b90]" />
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