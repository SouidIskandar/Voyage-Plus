'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, MapPin, Clock, Users, ArrowRight, Ticket, Star, Filter } from 'lucide-react'

const events = [
  {
    id: 1,
    title: "Santorini Photography Workshop",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2023-10-15",
    time: "09:00 - 17:00",
    location: "Santorini, Greece",
    category: "Workshop",
    price: 299,
    slots: 12,
    remainingSlots: 3,
    rating: 4.9,
    reviews: 47,
    featured: true
  },
  {
    id: 2,
    title: "Japanese Cultural Immersion Tour",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2023-11-05",
    time: "10:00 - 16:00",
    location: "Kyoto, Japan",
    category: "Cultural",
    price: 189,
    slots: 20,
    remainingSlots: 8,
    rating: 4.8,
    reviews: 32,
    featured: true
  },
  {
    id: 3,
    title: "Alpine Hiking Adventure",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2023-10-22",
    time: "08:00 - 18:00",
    location: "Swiss Alps",
    category: "Adventure",
    price: 229,
    slots: 15,
    remainingSlots: 5,
    rating: 4.7,
    reviews: 28,
    featured: false
  },
  {
    id: 4,
    title: "Wine Tasting Experience in Tuscany",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2023-11-12",
    time: "14:00 - 19:00",
    location: "Tuscany, Italy",
    category: "Food & Wine",
    price: 159,
    slots: 18,
    remainingSlots: 10,
    rating: 4.9,
    reviews: 41,
    featured: false
  },
  {
    id: 5,
    title: "Yoga Retreat in Bali",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2023-12-03",
    time: "07:00 - 20:00",
    location: "Bali, Indonesia",
    category: "Wellness",
    price: 349,
    slots: 10,
    remainingSlots: 2,
    rating: 4.8,
    reviews: 39,
    featured: true
  },
  {
    id: 6,
    title: "Northern Lights Photography Tour",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2023-11-18",
    time: "20:00 - 02:00",
    location: "Reykjavik, Iceland",
    category: "Adventure",
    price: 279,
    slots: 12,
    remainingSlots: 4,
    rating: 4.7,
    reviews: 25,
    featured: false
  }
]

const categories = ["All", "Workshop", "Cultural", "Adventure", "Food & Wine", "Wellness"]

export default function EventsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [visibleEvents, setVisibleEvents] = useState(6)

  const filteredEvents = selectedCategory === "All" 
    ? events 
    : events.filter(event => event.category === selectedCategory)

  const showMore = () => {
    setVisibleEvents(prev => prev + 3)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <section id="events" className="py-20 px-6 sm:px-12 bg-gradient-to-b from-white to-blue-50">
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
            Upcoming <span className="text-[#e60d0d]">Events & Tours</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join our exclusive events and guided tours for unique experiences that go beyond ordinary travel
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category)
                setVisibleEvents(6)
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category === "All" && <Filter className="w-4 h-4" />}
              {category}
            </button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredEvents.slice(0, visibleEvents).map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                {event.featured && (
                  <div className="absolute top-4 left-4 bg-[#e60d0d] text-white text-sm font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 text-[#050b90] text-sm font-bold px-3 py-1 rounded-full">
                  {event.category}
                </div>
                
                {/* Rating */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                  <span className="text-sm font-bold">{event.rating}</span>
                  <span className="text-xs text-gray-600 ml-1">({event.reviews})</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#050b90] mb-3">{event.title}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-3 text-[#050b90]" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-3 text-[#050b90]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-3 text-[#050b90]" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <span className="text-2xl font-bold text-[#050b90]">${event.price}</span>
                    <span className="text-gray-600 text-sm ml-2">per person</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2" />
                    <span className="text-sm">
                      {event.remainingSlots} of {event.slots} slots left
                    </span>
                  </div>
                </div>
                
                {/* Progress bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                  <div 
                    className="bg-gradient-to-r from-[#050b90] to-[#e60d0d] h-2 rounded-full" 
                    style={{ width: `${((event.slots - event.remainingSlots) / event.slots) * 100}%` }}
                  ></div>
                </div>
                
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white py-3 rounded-lg font-semibold text-center"
                  >
                    Book Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 border border-[#050b90] text-[#050b90] rounded-lg hover:bg-[#050b90] hover:text-white transition-all"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleEvents < filteredEvents.length && (
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={showMore}
              className="bg-white text-[#050b90] border-2 border-[#050b90] px-8 py-3 rounded-lg font-semibold hover:bg-[#050b90] hover:text-white transition-all"
            >
              Load More Events
            </motion.button>
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-[#050b90] to-[#e60d0d] rounded-2xl shadow-lg p-8 md:p-12 text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
              <Ticket className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto">
            We specialize in creating custom events and private tours tailored to your interests. 
            Let us design a unique experience just for you or your group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#050b90] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-all"
            >
              Request Custom Event
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#050b90] transition-all"
            >
              Contact Our Events Team
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}