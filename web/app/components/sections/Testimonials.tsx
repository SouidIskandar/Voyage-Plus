'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Star, Quote, ArrowLeft, ArrowRight, Play } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Our trip to Santorini was absolutely magical! Voyage Plus took care of every detail, from the stunning hotel with caldera views to the private boat tour. The local guides were knowledgeable and friendly. We'll definitely be using Voyage Plus for our next adventure!",
    destination: "Santorini, Greece",
    travelDate: "June 2023"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "The cultural tour of Japan exceeded all expectations. The attention to detail was impressive - we experienced both famous landmarks and hidden gems we would never have found on our own. The food experiences were particularly exceptional!",
    destination: "Kyoto, Japan",
    travelDate: "April 2023"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 4,
    text: "Our family safari in Kenya was the trip of a lifetime! The guides were exceptional with our children, and we saw all the Big Five. The accommodations were luxurious yet authentic. Voyage Plus made everything seamless from start to finish.",
    destination: "Safari, Kenya",
    travelDate: "August 2023"
  },
  {
    id: 4,
    name: "James Wilson",
    location: "Sydney, Australia",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "The Swiss Alps package was perfect for our active holiday. From hiking to paragliding, every activity was well-organized. The scenery was breathtaking, and our guide knew all the best spots for photos. Already planning our next trip with Voyage Plus!",
    destination: "Swiss Alps",
    travelDate: "January 2023"
  },
  {
    id: 5,
    name: "Sophia Martinez",
    location: "Madrid, Spain",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Our luxury stay in the Maldives was beyond dreams. Voyage Plus arranged everything perfectly - from the seaplane transfer to the private dinner on the beach. The resort was incredible, and the staff went above and beyond to make our anniversary special.",
    destination: "Maldives",
    travelDate: "February 2023"
  },
  {
    id: 6,
    name: "David Kim",
    location: "Seoul, South Korea",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 4,
    text: "The Machu Picchu trek was challenging but incredibly rewarding. Our guide was knowledgeable about the history and culture, and the porters were amazing. Voyage Plus ensured we were well-prepared and comfortable throughout the journey.",
    destination: "Machu Picchu, Peru",
    travelDate: "May 2023"
  }
]

const videoTestimonials = [
  {
    id: 1,
    name: "The Johnson Family",
    destination: "Santorini, Greece",
    thumbnail: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    duration: "2:45"
  },
  {
    id: 2,
    name: "Adventure Seekers",
    destination: "Swiss Alps",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    duration: "3:20"
  },
  {
    id: 3,
    name: "Luxury Travelers",
    destination: "Maldives",
    thumbnail: "https://images.unsplash.com/photo-1590523541541-89b20435e3a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    duration: "4:15"
  }
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [activeTab, setActiveTab] = useState("written")

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

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
            Traveler <span className="text-[#e60d0d]">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover what our customers have to say about their unforgettable experiences with Voyage Plus
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("written")}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === "written"
                ? 'bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
            }`}
          >
            Written Reviews
          </button>
          <button
            onClick={() => setActiveTab("video")}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === "video"
                ? 'bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
            }`}
          >
            Video Testimonials
          </button>
        </div>

        {/* Written Testimonials */}
        {activeTab === "written" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
              <Quote className="w-12 h-12 text-[#e60d0d] opacity-20 mb-6" />
              
              <div className="flex items-start mb-8">
                <img 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-6"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#050b90]">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].location}
                  </p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonials[currentTestimonial].rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="ml-2 text-gray-600">
                      ({testimonials[currentTestimonial].rating}.0)
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg mb-8 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-600">
                  <span className="font-semibold">Destination:</span> {testimonials[currentTestimonial].destination}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Travel Date:</span> {testimonials[currentTestimonial].travelDate}
                </p>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mb-12">
              <button
                onClick={prevTestimonial}
                className="bg-white text-[#050b90] p-3 rounded-full shadow-lg hover:bg-[#050b90] hover:text-white transition-all"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-white text-[#050b90] p-3 rounded-full shadow-lg hover:bg-[#050b90] hover:text-white transition-all"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mb-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-[#050b90]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            {/* All Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all cursor-pointer ${
                    index === currentTestimonial ? 'ring-2 ring-[#050b90]' : ''
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-[#050b90]">{testimonial.name}</h4>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    "{testimonial.text}"
                  </p>
                  <p className="text-gray-500 text-xs mt-3">
                    {testimonial.destination}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Video Testimonials */}
        {activeTab === "video" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all">
                      <Play className="w-8 h-8 text-white fill-current" />
                    </button>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#050b90]">{video.name}</h3>
                  <p className="text-gray-600 text-sm">{video.destination}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-[#050b90] to-[#e60d0d] rounded-2xl shadow-lg p-8 md:p-12 text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Create Your Own Story?
          </h3>
          <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied travelers who have experienced the world with Voyage Plus
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#050b90] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-all"
          >
            Start Your Journey Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}