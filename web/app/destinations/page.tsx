// app/destinations/page.js
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Star, Clock, Users, Search, Filter, ArrowRight } from 'lucide-react'

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 1284,
    duration: "7 days",
    travelers: "2-4 people",
    price: 1899,
    previousPrice: 2199,
    category: "Beach",
    featured: true,
    description: "Experience the stunning sunsets and white-washed buildings of this iconic Greek island."
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 986,
    duration: "10 days",
    travelers: "1-6 people",
    price: 2499,
    previousPrice: 2899,
    category: "Cultural",
    featured: false,
    description: "Immerse yourself in traditional Japanese culture and beautiful temples."
  },
  // Add more destinations as needed
]

const categories = ["All", "Beach", "Cultural", "Adventure", "Luxury", "Urban", "Mountain"]

export default function Destinations() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDestinations = destinations.filter(dest => {
    const matchesCategory = selectedCategory === "All" || dest.category === selectedCategory
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dest.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
            Explore <span className="text-[#e60d0d]">Destinations</span>
          </motion.h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover breathtaking destinations around the world with our expertly crafted travel experiences
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search destinations..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#050b90]"
                />
              </div>
              <div className="flex gap-2 items-center">
                <Filter className="text-gray-400 w-5 h-5" />
                <span className="text-gray-600">Filter:</span>
                <select 
                  className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#050b90]"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-48 object-cover"
                  />
                  {destination.featured && (
                    <div className="absolute top-4 left-4 bg-[#e60d0d] text-white text-sm font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 text-[#050b90] text-sm font-bold px-3 py-1 rounded-full">
                    {destination.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#050b90] mb-2">{destination.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{destination.description}</p>
                  
                  <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded mb-4">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-bold">{destination.rating}</span>
                    <span className="text-gray-500 text-sm">({destination.reviews})</span>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-2xl font-bold text-[#050b90]">${destination.price}</span>
                      <span className="text-gray-500 line-through ml-2">${destination.previousPrice}</span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                  >
                    View Details <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">No destinations found matching your criteria</div>
              <button
                onClick={() => {
                  setSelectedCategory("All")
                  setSearchQuery("")
                }}
                className="text-[#050b90] hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}