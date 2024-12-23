import { motion } from 'framer-motion'
import { Users, MessageCircle, Zap } from 'lucide-react'

const CommunitySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Bergabung dengan Komunitas Kami
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Users className="w-12 h-12 text-teal-300 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">10,000+ Anggota</h3>
            <p className="text-gray-300">Bergabung dengan komunitas global yang terus berkembang</p>
          </motion.div>
          <motion.div 
            className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <MessageCircle className="w-12 h-12 text-teal-300 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Forum Aktif</h3>
            <p className="text-gray-300">Diskusikan ide, dapatkan saran, dan bagikan pengalaman Anda</p>
          </motion.div>
          <motion.div 
            className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Zap className="w-12 h-12 text-teal-300 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Acara Virtual</h3>
            <p className="text-gray-300">Ikuti webinar, workshop, dan sesi belajar bersama</p>
          </motion.div>
        </div>
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            Gabung Sekarang
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default CommunitySection

