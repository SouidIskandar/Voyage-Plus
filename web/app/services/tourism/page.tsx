// app/services/tourism/page.js
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Camera, Map, Star, Users, Clock, Check, ArrowRight, Heart, Globe, Ticket, BookOpen, Briefcase } from 'lucide-react'
import Link from 'next/link'

const tourTypes = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Photo Tours",
    description: "Guided tours to the most photogenic locations with professional photography tips",
    highlights: ["Golden hour sessions", "Professional guidance", "Iconic locations", "Editing workshop"]
  },
  {
    icon: <Map className="w-8 h-8" />,
    title: "City Exploration",
    description: "Discover hidden gems and famous landmarks with knowledgeable local guides",
    highlights: ["Local guides", "Historic sites", "Cultural insights", "Walking tours"]
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Cultural Experiences",
    description: "Immerse yourself in local traditions, arts, and authentic cultural activities",
    highlights: ["Traditional workshops", "Local artisans", "Cultural performances", "Authentic cuisine"]
  }
]

const popularTours = [
  {
    name: "Rome Historical Journey",
    image: "https://images.unsplash.com/photo-1552832230-c0197045d904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "6 hours",
    groupSize: "Small group (max 12)",
    price: 89,
    rating: 4.9,
    reviews: 234,
    highlights: ["Colosseum", "Roman Forum", "Pantheon", "Trevi Fountain"]
  },
  {
    name: "Santorini Sunset Experience",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "4 hours",
    groupSize: "Private tour",
    price: 129,
    rating: 4.8,
    reviews: 187,
    highlights: ["Oia village", "Sunset views", "Wine tasting", "Photo spots"]
  },
  {
    name: "Kyoto Temple Discovery",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "8 hours",
    groupSize: "Small group (max 10)",
    price: 109,
    rating: 4.7,
    reviews: 156,
    highlights: ["Fushimi Inari", "Kinkaku-ji", "Traditional tea ceremony", "Bamboo forest"]
  }
]

const destinations = [
  {
    name: "European Capitals",
    count: "15+ cities",
    tours: "45+ tours available",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Asian Adventures",
    count: "12+ countries", 
    tours: "38+ tours available",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "American Wonders",
    count: "8+ destinations",
    tours: "25+ tours available",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
]

export default function TourismService() {
  const [selectedTour, setSelectedTour] = useState(0)

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-green-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block p-4 bg-white/20 rounded-2xl backdrop-blur-sm mb-6">
              <Globe className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tourism</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover the world's most amazing sights and experiences with our expertly guided tours. 
              From iconic landmarks to hidden gems, we'll show you the heart of every destination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tour Types Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#050b90] mb-6">
              Types of <span className="text-[#e60d0d]">Tours</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose from our diverse range of tourism experiences designed for every type of traveler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourTypes.map((tour, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all"
              >
                <div className="text-[#050b90] mb-4 mx-auto">
                  {tour.icon}
                </div>
                <h3 className="text-xl font-bold text-[#050b90] mb-3">
                  {tour.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {tour.description}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Includes:</h4>
                  <ul className="space-y-1">
                    {tour.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tours Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#050b90] mb-6">
              Popular <span className="text-[#e60d0d]">Tours</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Join our most loved tours that have delighted thousands of travelers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularTours.map((tour, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <img 
                  src={tour.image} 
                  alt={tour.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#050b90] mb-2">{tour.name}</h3>
                  
                  <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded mb-4">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-bold">{tour.rating}</span>
                    <span className="text-gray-500 text-sm">({tour.reviews})</span>
                  </div>

                  <div className="flex items-center text-gray-600 mb-3">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{tour.duration}</span>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{tour.groupSize}</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.map((highlight, i) => (
                        <span key={i} className="bg-blue-100 text-[#050b90] text-xs px-2 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-2xl font-bold text-[#050b90]">${tour.price}</span>
                      <span className="text-gray-600 text-sm ml-2">per person</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white py-3 rounded-lg font-semibold"
                  >
                    Book This Tour
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#050b90] mb-6">
              Explore <span className="text-[#e60d0d]">Destinations</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover our wide range of tourism destinations across the globe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#050b90] mb-3">{destination.name}</h3>
                  <div className="space-y-2">
                    <p className="flex items-center text-gray-600">
                      <Map className="w-4 h-4 mr-2" />
                      {destination.count}
                    </p>
                    <p className="flex items-center text-gray-600">
                      <Ticket className="w-4 h-4 mr-2" />
                      {destination.tours}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white py-3 rounded-lg font-semibold mt-4"
                  >
                    Explore Tours
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#050b90] mb-6">
              Why Choose Our <span className="text-[#e60d0d]">Tours</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg"
            >
              <div className="bg-blue-100 p-3 rounded-2xl inline-block mb-4">
                <Users className="w-8 h-8 text-[#050b90]" />
              </div>
              <h3 className="text-xl font-bold text-[#050b90] mb-3">Local Guides</h3>
              <p className="text-gray-600">Knowledgeable guides who share insider perspectives</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg"
            >
              <div className="bg-green-100 p-3 rounded-2xl inline-block mb-4">
                <Ticket className="w-8 h-8 text-[#050b90]" />
              </div>
              <h3 className="text-xl font-bold text-[#050b90] mb-3">Skip-the-Line</h3>
              <p className="text-gray-600">Priority access to attractions and venues</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg"
            >
              <div className="bg-yellow-100 p-3 rounded-2xl inline-block mb-4">
                <Heart className="w-8 h-8 text-[#050b90]" />
              </div>
              <h3 className="text-xl font-bold text-[#050b90] mb-3">Small Groups</h3>
              <p className="text-gray-600">Intimate experiences with personalized attention</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg"
            >
              <div className="bg-purple-100 p-3 rounded-2xl inline-block mb-4">
                <Star className="w-8 h-8 text-[#050b90]" />
              </div>
              <h3 className="text-xl font-bold text-[#050b90] mb-3">Quality Guarantee</h3>
              <p className="text-gray-600">Curated experiences that exceed expectations</p>
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
            <Ticket className="w-12 h-12 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Explore the World?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Book your unforgettable tour experience today and create memories that will last a lifetime
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#050b90] px-8 py-4 rounded-lg font-bold text-lg"
              >
                Browse All Tours
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg"
              >
                Get Recommendations
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation to other services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-[#050b90] text-center mb-8">
            Explore Our Other Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/voyage" className="bg-gray-50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
              <div className="bg-blue-100 p-3 rounded-2xl inline-block mb-4">
                <Globe className="w-8 h-8 text-[#050b90]" />
              </div>
              <h4 className="font-bold text-[#050b90] mb-2">Voyage</h4>
              <p className="text-gray-600 text-sm">Luxury travel experiences</p>
              <ArrowRight className="w-5 h-5 text-[#e60d0d] mx-auto mt-4" />
            </Link>

            <Link href="/services/etude" className="bg-gray-50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
              <div className="bg-green-100 p-3 rounded-2xl inline-block mb-4">
                <BookOpen className="w-8 h-8 text-[#050b90]" />
              </div>
              <h4 className="font-bold text-[#050b90] mb-2">Étude</h4>
              <p className="text-gray-600 text-sm">Educational travel experiences</p>
              <ArrowRight className="w-5 h-5 text-[#e60d0d] mx-auto mt-4" />
            </Link>

            <Link href="/services/travail" className="bg-gray-50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
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