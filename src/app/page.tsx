'use client'
import { Identity } from '@dfinity/agent';
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CurrencyIcon as Exchange, Users, Shield, ChevronDown } from 'lucide-react'
import NetworkAnimation from '../components/NetworkAnimation'
import FeatureCard from '..//components/FeatureCard'
import SkillCard from '../components/SkillCard'
import TeacherRating from '../components/TeacherRating'
import SkillPopup from '../components/SkillPopup'
import BootcampSection from '../components/BootcampSection'
import EventSection from '../components/EventSection'
import PricingSection from '../components/PricingSection'
import Footer from '../components/Footer'
import { loginWithPlug } from "../../utils/auth";

interface Skill {
  name: string
  description: string
  provider: string
  duration: string
}

export default function LandingPage() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
  const [identity, setIdentity] = useState<Identity | null>(null);

  const handleLogin = async () => {
    try {
      const userIdentity = await loginWithPlug();
      setIdentity(userIdentity);
      console.log("Identity:", userIdentity);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const skills: Skill[] = [
    {
      name: "English Class",
      description: "Learn English from native speakers. Focus on everyday conversations and pronunciation.",
      provider: "John Doe",
      duration: "1 hour"
    },
    {
      name: "Graphic Design",
      description: "Learn the basics of graphic design using Adobe Photoshop. Suitable for beginners.",
      provider: "Jane Smith",
      duration: "2 hours"
    },
    {
      name: "Web Programming",
      description: "Learn HTML, CSS, and JavaScript for beginners. Create your first website!",
      provider: "Alex Johnson",
      duration: "3 hours"
    },
    {
      name: "Digital Photography",
      description: "Basic photography techniques and photo editing. Bring your own camera!",
      provider: "Emily Brown",
      duration: "2 hours"
    },
    {
      name: "Healthy Cooking",
      description: "Learn to cook healthy and nutritious meals. Includes recipes for special diets.",
      provider: "Chef Michael",
      duration: "1.5 hours"
    },
    {
      name: "Yoga for Beginners",
      description: "Learn the basics of yoga for physical and mental health. Suitable for all ages.",
      provider: "Sarah Lee",
      duration: "1 hour"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-800 to-teal-500 text-white">
      <header className="container mx-auto py-6 px-4">
        <nav className="flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            SkillSwap
          </motion.h1>
          <motion.div 
            className="space-x-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#features" className="hover:text-teal-300 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-teal-300 transition-colors">How It Works</a>
            {identity ? (
  <a href="" className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-full transition-colors">
    {`${identity.getPrincipal().toText().slice(0, 3)}...${identity.getPrincipal().toText().slice(-3)}`}
  </a>
) : (
  <a href="#" onClick={handleLogin} className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-full transition-colors">Connect Wallet</a>
)}


           
          </motion.div>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
          <motion.h2 
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Exchange Skills, Build Community
          </motion.h2>
          <motion.p 
            className="text-xl mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A decentralized skill exchange platform that allows you to trade expertise without money. Learn, teach, and grow together.
          </motion.p>
          <motion.button 
            className="bg-white text-purple-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-300 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Start Exchanging Skills
          </motion.button>
        </section>

        <NetworkAnimation />
        

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="container mx-auto px-4 py-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Exchange size={40} />}
              title="Direct Exchange"
              description="Exchange your skills with others without intermediaries."
            />
            <FeatureCard 
              icon={<Users size={40} />}
              title="Connected Community"
              description="Build a network with talented people around you."
            />
            <FeatureCard 
              icon={<Shield size={40} />}
              title="Secure with Blockchain"
              description="Transactions are recorded and secured with smart contracts."
            />
          </div>
        </motion.div>

        <motion.section 
          className="container mx-auto px-4 py-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Skills Marketplace</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillCard 
                key={index}
                name={skill.name}
                description={skill.description}
                provider={skill.provider}
                duration={skill.duration}
                onClick={() => setSelectedSkill(skill)}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <motion.button 
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Skills
            </motion.button>
          </div>
        </motion.section>

        <motion.section 
          className="container mx-auto px-4 py-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Our Top Instructors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TeacherRating 
              name="John Doe"
              skill="English Class"
              rating={4.8}
              reviews={120}
              image="/placeholder.svg?height=200&width=200"
            />
            <TeacherRating 
              name="Jane Smith"
              skill="Graphic Design"
              rating={4.9}
              reviews={95}
              image="/placeholder.svg?height=200&width=200"
            />
            <TeacherRating 
              name="Alex Johnson"
              skill="Web Programming"
              rating={4.7}
              reviews={150}
              image="/placeholder.svg?height=200&width=200"
            />
            <TeacherRating 
              name="Emily Brown"
              skill="Digital Photography"
              rating={4.6}
              reviews={80}
              image="/placeholder.svg?height=200&width=200"
            />
          </div>
          <div className="text-center mt-12">
            <motion.button 
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Instructors
            </motion.button>
          </div>
        </motion.section>

        <BootcampSection />
        <EventSection />
        <PricingSection />

        <motion.div 
          className="text-center py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <ChevronDown size={40} className="mx-auto animate-bounce" />
        </motion.div>
      </main>

      <Footer />

      <AnimatePresence>
        {selectedSkill && (
          <SkillPopup
            name={selectedSkill.name}
            description={selectedSkill.description}
            provider={selectedSkill.provider}
            duration={selectedSkill.duration}
            onClose={() => setSelectedSkill(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

