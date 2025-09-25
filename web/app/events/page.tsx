// app/events/page.js
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, MapPin, Clock, Users, ArrowRight, Filter, Search, Ticket, Star, Heart, Check } from 'lucide-react'

interface Event {
  id: number
  title: string
  image: string
  date: string
  time: string
  location: string
  category: string
  price: number
  slots: number
  remainingSlots: number
  rating: number
  reviews: number
  featured: boolean
  description: string
  highlights: string[]
}

const events: Event[] = [
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
    featured: true,
    description: "Join our expert photographers in capturing the stunning beauty of Santorini. Learn composition, lighting, and editing techniques while exploring iconic locations.",
    highlights: ["Golden hour sessions", "Professional instruction", "Editing workshop", "Small group size"]
  },
  {
    id: 2,
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
    featured: true,
    description: "Join our expert photographers in capturing the stunning beauty of Santorini. Learn composition, lighting, and editing techniques while exploring iconic locations.",
    highlights: ["Golden hour sessions", "Professional instruction", "Editing workshop", "Small group size"]
  },
  {
    id: 3,
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
    featured: true,
    description: "Experience traditional Japanese culture through tea ceremonies, temple visits, and authentic cultural activities with knowledgeable local guides.",
    highlights: ["Tea ceremony", "Temple visits", "Traditional crafts", "Local cuisine"]
  },
  {
    id: 4,
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
    featured: false,
    description: "Challenge yourself with a guided hiking adventure through the breathtaking Swiss Alps. Suitable for intermediate hikers with stunning panoramic views.",
    highlights: ["Expert guides", "Mountain scenery", "Picnic lunch", "Photo opportunities"]
  },
  {
    id: 5,
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
    featured: false,
    description: "Indulge in the finest Tuscan wines at picturesque vineyards. Learn about wine production and enjoy local delicacies in the heart of Italy's wine country.",
    highlights: ["Vineyard tours", "Wine tasting", "Local cheese pairing", "Scenic views"]
  },
  {
    id: 6,
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
    featured: true,
    description: "Rejuvenate your mind and body with a transformative yoga retreat in the serene landscapes of Bali. Includes meditation, healthy cuisine, and spa treatments.",
    highlights: ["Daily yoga sessions", "Meditation", "Healthy meals", "Spa treatments"]
  },
  {
    id: 7,
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
    featured: false,
    description: "Capture the magical Northern Lights with expert guidance. Learn night photography techniques while experiencing one of nature's most spectacular displays.",
    highlights: ["Aurora viewing", "Night photography", "Hot chocolate break", "Expert guidance"]
  }
]

const categories = ["All", "Workshop", "Cultural", "Adventure", "Food & Wine", "Wellness", "Photography"]

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  })
}

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("date")
  const [viewMode, setViewMode] = useState("grid") // 'grid' or 'list'

  const filteredEvents = events
    .filter(event => selectedCategory === "All" || event.category === selectedCategory)
    .filter(event => 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "date":
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case "price":
          return a.price - b.price
        case "rating":
          return b.rating - a.rating
        case "popularity":
          return b.reviews - a.reviews
        default:
          return 0
      }
    })

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block p-4 bg-white/20 rounded-2xl backdrop-blur-sm mb-6">
              <Calendar className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Experiences</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join our exclusive events and guided tours for unique experiences that go beyond ordinary travel
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search events..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#050b90]"
                />
              </div>
              
              <div className="flex gap-4 items-center">
                <div className="flex items-center gap-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select 
                    className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#050b90]"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="date">Sort by Date</option>
                    <option value="price">Sort by Price</option>
                    <option value="rating">Sort by Rating</option>
                    <option value="popularity">Sort by Popularity</option>
                  </select>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg ${
                      viewMode === "grid" 
                        ? 'bg-[#050b90] text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg ${
                      viewMode === "list" 
                        ? 'bg-[#050b90] text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    List
                  </button>
                </div>
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

          {/* Events Grid/List */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredEvents.map((event, index) => (
                <EventListItem key={event.id} event={event} index={index} />
              ))}
            </div>
          )}

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">No events found matching your criteria</div>
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

      {/* Newsletter Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#050b90] to-[#e60d0d]">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Calendar className="w-12 h-12 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Never Miss an Event
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter and be the first to know about new events, early bird discounts, and exclusive experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#050b90] px-8 py-3 rounded-lg font-bold text-lg"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Host an Event Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#050b90] mb-6">
                Interested in <span className="text-[#e60d0d]">Hosting</span> an Event?
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                We partner with experienced guides, instructors, and local experts to create unforgettable experiences for our community.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  Access to our community of travel enthusiasts
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  Marketing and promotion support
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  Booking and payment processing
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  Event management assistance
                </li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white px-8 py-4 rounded-lg font-bold text-lg"
              >
                Become an Event Partner
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-[#050b90] mb-6">Why Host With Us?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-2xl mr-4">
                    <Users className="w-6 h-6 text-[#050b90]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#050b90] mb-2">Reach Engaged Travelers</h4>
                    <p className="text-gray-600">Connect with our community of passionate travelers who seek unique experiences.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-2xl mr-4">
                    <Ticket className="w-6 h-6 text-[#050b90]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#050b90] mb-2">Hassle-Free Management</h4>
                    <p className="text-gray-600">We handle bookings, payments, and logistics so you can focus on delivering great experiences.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-2xl mr-4">
                    <Heart className="w-6 h-6 text-[#050b90]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#050b90] mb-2">Build Your Reputation</h4>
                    <p className="text-gray-600">Gain reviews and recognition from satisfied participants in our trusted community.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Event Card Component for Grid View
function EventCard({ event, index }: { event: Event, index: number }) {
  return (
    <motion.div
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
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#050b90] mb-2">{event.title}</h3>
        
        <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded mb-4">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm font-bold">{event.rating}</span>
          <span className="text-gray-500 text-sm">({event.reviews})</span>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm">{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{event.location}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-2xl font-bold text-[#050b90]">${event.price}</span>
            <span className="text-gray-600 text-sm ml-2">per person</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-1" />
            <span className="text-sm">
              {event.remainingSlots} of {event.slots} left
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
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
        >
          <Ticket className="w-5 h-5" />
          Book Now
        </motion.button>
      </div>
    </motion.div>
  )
}

// Event List Item Component for List View
function EventListItem({ event, index }: { event: Event, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        
        <div className="md:w-2/3">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            {event.featured && (
              <span className="bg-[#e60d0d] text-white text-sm font-bold px-3 py-1 rounded-full">
                Featured
              </span>
            )}
            <span className="bg-blue-100 text-[#050b90] text-sm font-bold px-3 py-1 rounded-full">
              {event.category}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-bold">{event.rating}</span>
              <span className="text-gray-500 text-sm">({event.reviews})</span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-[#050b90] mb-3">{event.title}</h3>
          <p className="text-gray-600 mb-4">{event.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm">{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm">{event.time}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">{event.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="w-4 h-4 mr-2" />
              <span className="text-sm">
                {event.remainingSlots} of {event.slots} slots left
              </span>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <span className="text-2xl font-bold text-[#050b90]">${event.price}</span>
              <span className="text-gray-600 text-sm ml-2">per person</span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2"
            >
              <Ticket className="w-4 h-4" />
              Book Now
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}