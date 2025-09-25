'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Star, Clock, Users, ArrowRight, Search, Filter } from 'lucide-react'

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
    featured: true
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
    featured: false
  },
  {
    id: 3,
    name: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 754,
    duration: "5 days",
    travelers: "2-8 people",
    price: 1699,
    previousPrice: 1999,
    category: "Adventure",
    featured: true
  },
  {
    id: 4,
    name: "Machu Picchu, Peru",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 632,
    duration: "8 days",
    travelers: "2-12 people",
    price: 1599,
    previousPrice: 1899,
    category: "Adventure",
    featured: false
  },
  {
    id: 5,
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 2105,
    duration: "6 days",
    travelers: "1-4 people",
    price: 1799,
    previousPrice: 2099,
    category: "Cultural",
    featured: false
  },
  {
    id: 6,
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 1452,
    duration: "7 days",
    travelers: "2 people",
    price: 2999,
    previousPrice: 3499,
    category: "Luxury",
    featured: true
  },
  {
    id: 7,
    name: "Safari, Kenya",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 876,
    duration: "9 days",
    travelers: "2-8 people",
    price: 2299,
    previousPrice: 2699,
    category: "Adventure",
    featured: false
  },
  {
    id: 8,
    name: "New York, USA",
    image: "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 1823,
    duration: "5 days",
    travelers: "1-6 people",
    price: 1599,
    previousPrice: 1899,
    category: "Urban",
    featured: false
  }
]

const categories = ["All", "Beach", "Cultural", "Adventure", "Luxury", "Urban"]

export default function DestinationsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [visibleDestinations, setVisibleDestinations] = useState(6)

  const filteredDestinations = selectedCategory === "All" 
    ? destinations 
    : destinations.filter(dest => dest.category === selectedCategory)

  const showMore = () => {
    setVisibleDestinations(prev => prev + 4)
  }

  return (
    <section className="py-20 px-6 sm:px-12 bg-gradient-to-b from-blue-50 to-white">
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
            Popular <span className="text-[#e60d0d]">Destinations</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover the world's most breathtaking places with our expertly crafted travel experiences
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search destinations..." 
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
            <button className="bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white px-6 py-3 rounded-lg font-semibold">
              Search
            </button>
          </div>
        </motion.div>

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredDestinations.slice(0, visibleDestinations).map((destination, index) => (
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
                  className="w-full h-56 object-cover"
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
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#050b90]">{destination.name}</h3>
                  <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-bold">{destination.rating}</span>
                    <span className="text-gray-500 text-sm">({destination.reviews})</span>
                  </div>
                </div>
                
                <div className="flex gap-4 mb-4">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{destination.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{destination.travelers}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-2xl font-bold text-[#050b90]">${destination.price}</span>
                    <span className="text-gray-500 line-through ml-2">${destination.previousPrice}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {destination.name.split(",")[1]}
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

        {/* Load More Button */}
        {visibleDestinations < filteredDestinations.length && (
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={showMore}
              className="bg-white text-[#050b90] border-2 border-[#050b90] px-8 py-3 rounded-lg font-semibold hover:bg-[#050b90] hover:text-white transition-all"
            >
              Load More Destinations
            </motion.button>
          </div>
        )}
      </div>
    </section>
  )
}