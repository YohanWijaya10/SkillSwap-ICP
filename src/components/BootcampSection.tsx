import { motion } from 'framer-motion'
import { Code, Database, Globe, CheckCircle } from 'lucide-react'

interface BootcampProps {
  title: string
  description: string
  price: string // Changed to string to accommodate "10 ICP" format
  icon: React.ReactNode
  instructor: string
  isVerified: boolean
}

const BootcampCard: React.FC<BootcampProps> = ({ title, description, price, icon, instructor, isVerified }) => (
  <motion.div 
    className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="flex justify-between items-start mb-4">
      <div className="text-teal-300">{icon}</div>
      {isVerified && (
        <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
          <CheckCircle size={12} className="mr-1" />
          Verified Author
        </span>
      )}
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <p className="text-teal-300 font-semibold mb-2">{price}</p>
    <p className="text-sm text-gray-400">Instruktur: {instructor}</p>
  </motion.div>
)

const BootcampSection = () => {
  const bootcamps: BootcampProps[] = [
    {
      title: "Web3 Development",
      description: "Learn decentralized application development with blockchain",
      price: "500 ICP", // Changed to string with " ICP" suffix
      icon: <Code className="w-12 h-12" />,
      instructor: "Alex Johnson",
      isVerified: true
    },
    {
      title: "Blockchain Fundamentals",
      description: "Understand the basics of blockchain technology and cryptography",
      price: "350 ICP", // Changed to string with " ICP" suffix
      icon: <Database className="w-12 h-12" />,
      instructor: "Sarah Lee",
      isVerified: false
    },
    {
      title: "DeFi Mastery",
      description: "Master the concepts and implementation of Decentralized Finance",
      price: "450 ICP", // Changed to string with " ICP" suffix
      icon: <Globe className="w-12 h-12" />,
      instructor: "Michael Chen",
      isVerified: true
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certified Bootcamps
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bootcamps.map((bootcamp, index) => (
            <BootcampCard key={index} {...bootcamp} />
          ))}
        </div>
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            View All Bootcamps
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default BootcampSection

