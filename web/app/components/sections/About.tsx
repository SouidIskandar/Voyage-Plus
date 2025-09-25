'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Users, Globe, Award, Heart, ArrowRight, Quote } from 'lucide-react'

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "With over 15 years in the travel industry, Sarah founded Voyage Plus to create meaningful travel experiences.",
    specialties: ["Destination Planning", "Luxury Travel", "Cultural Immersion"]
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Michael ensures every journey runs smoothly with his exceptional organizational skills and attention to detail.",
    specialties: ["Logistics", "Customer Experience", "Quality Control"]
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Travel Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Emma creates bespoke itineraries that capture the essence of each destination and traveler's dreams.",
    specialties: ["Custom Itineraries", "Adventure Travel", "Local Experiences"]
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Destination Expert",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "James's extensive travel experience and local knowledge make him an invaluable resource for our clients.",
    specialties: ["Asia Pacific", "Cultural Tours", "Photography Expeditions"]
  }
]

const values = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Perspective",
    description: "We believe in creating connections across cultures and borders through meaningful travel experiences."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Passionate Service",
    description: "Our team is driven by a genuine love for travel and dedication to creating unforgettable journeys."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Excellence",
    description: "We maintain the highest standards in every aspect of our service, from planning to execution."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Focus",
    description: "We support local communities and sustainable tourism practices wherever we operate."
  }
]

const milestones = [
  { year: "2010", event: "Voyage Plus Founded", description: "Started with a vision to transform travel experiences" },
  { year: "2013", event: "First Group Tour", description: "Launched our signature cultural immersion tours" },
  { year: "2016", event: "Global Expansion", description: "Expanded to offer destinations across 6 continents" },
  { year: "2019", event: "Sustainable Tourism Initiative", description: "Committed to carbon-neutral operations" },
  { year: "2022", event: "10,000+ Travelers", description: "Celebrated serving over 10,000 satisfied clients" },
  { year: "2023", event: "Award Winning", description: "Received 'Best Luxury Travel Company' award" }
]

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("story")

  return (
    <section id="about" className="py-20 px-6 sm:px-12 bg-gradient-to-b from-white to-blue-50">
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
            Our <span className="text-[#e60d0d]">Story</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover the passion, people, and purpose behind Voyage Plus - your trusted partner in extraordinary travel experiences
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("story")}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === "story"
                ? 'bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
            }`}
          >
            Our Story
          </button>
          <button
            onClick={() => setActiveTab("team")}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === "team"
                ? 'bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
            }`}
          >
            Our Team
          </button>
          <button
            onClick={() => setActiveTab("values")}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === "values"
                ? 'bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
            }`}
          >
            Our Values
          </button>
        </div>

        {/* Our Story Content */}
        {activeTab === "story" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-3xl font-bold text-[#050b90] mb-6">From Passion to Purpose</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2010, Voyage Plus began as a simple idea: travel should be transformative, 
                  not just transactional. What started as a small team of passionate travelers has grown 
                  into a renowned luxury travel company serving clients across the globe.
                </p>
                <p>
                  Our journey began when our founder, Sarah Johnson, realized that most travel companies 
                  were offering generic packages rather than personalized experiences. She set out to 
                  create a company that would truly understand each traveler's unique desires and craft 
                  journeys that would leave lasting impressions.
                </p>
                <p>
                  Today, we're proud to have helped over 10,000 travelers discover the world in meaningful 
                  ways. From intimate cultural immersions to breathtaking adventure expeditions, each 
                  Voyage Plus journey is crafted with care, expertise, and an unwavering commitment to excellence.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-[#050b90]">13+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-[#050b90]">50+</div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-[#050b90]">10K+</div>
                  <div className="text-gray-600">Happy Travelers</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-[#050b90]">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#050b90] to-[#e60d0d] rounded-2xl p-8 text-white">
                <Quote className="w-12 h-12 opacity-20 mb-6" />
                <p className="text-xl italic mb-6">
                  "We don't just plan trips; we craft experiences that transform perspectives and 
                  create memories that last a lifetime. Travel is not about the places you visit, 
                  but the person you become along the journey."
                </p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold">SJ</span>
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-white/80">Founder & CEO</div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="mt-12">
                <h4 className="text-2xl font-bold text-[#050b90] mb-6">Our Journey</h4>
                <div className="space-y-4">
                  {milestones.slice(0, 3).map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="bg-[#050b90] text-white px-3 py-1 rounded-full text-sm font-bold mr-4">
                        {milestone.year}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">{milestone.event}</div>
                        <div className="text-gray-600 text-sm">{milestone.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Our Team Content */}
        {activeTab === "team" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-[#050b90] mb-2 text-center">Meet Our Experts</h3>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Our team of travel enthusiasts brings decades of experience and genuine passion to every journey we create.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden text-center hover:shadow-xl transition-all"
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-[#050b90]">{member.name}</h4>
                    <p className="text-[#e60d0d] font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    
                    <div className="border-t border-gray-200 pt-4">
                      <h5 className="text-sm font-semibold text-gray-800 mb-2">Specialties:</h5>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.specialties.map((specialty, i) => (
                          <span key={i} className="bg-blue-100 text-[#050b90] text-xs px-2 py-1 rounded-full">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white px-8 py-3 rounded-lg font-semibold"
              >
                Join Our Team <ArrowRight className="w-5 h-5 inline ml-2" />
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Our Values Content */}
        {activeTab === "values" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-[#050b90] mb-2 text-center">What Guides Us</h3>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Our core values shape every decision we make and every experience we create for our travelers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all"
                >
                  <div className="text-[#050b90] mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#050b90] mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Sustainability Commitment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-r from-[#050b90] to-[#e60d0d] rounded-2xl p-8 md:p-12 text-white mt-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Commitment to Sustainability</h3>
                  <p className="mb-6">
                    At Voyage Plus, we believe in responsible tourism that benefits both travelers 
                    and local communities. We're committed to reducing our environmental impact, 
                    supporting local economies, and preserving cultural heritage.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Carbon-neutral operations since 2019
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Partnership with local guides and businesses
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Support for conservation projects worldwide
                    </li>
                  </ul>
                </div>
                <div className="bg-white/20 rounded-xl p-6 text-center backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div>Carbon Neutral</div>
                  <div className="text-sm opacity-80 mt-2">All our tours are carbon offset</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-[#050b90] mb-4">Ready to Start Your Journey?</h3>
          <p className="text-gray-600 text-xl mb-8 max-w-3xl mx-auto">
            Let our experienced team craft the perfect travel experience tailored to your dreams and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white px-8 py-4 rounded-lg font-bold text-lg"
            >
              Plan Your Trip
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#050b90] text-[#050b90] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#050b90] hover:text-white transition-all"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}