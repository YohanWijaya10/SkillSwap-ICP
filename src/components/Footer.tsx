import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">SkillSwap</h3>
            <p className="text-gray-400">Platform pertukaran keterampilan terdesentralisasi untuk belajar dan berkembang bersama.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-teal-300 transition-colors">Beranda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-300 transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-300 transition-colors">Keterampilan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-300 transition-colors">Bootcamp</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-300 transition-colors">Event</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Dukungan</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-teal-300 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-300 transition-colors">Kontak</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-300 transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-300 transition-colors">Syarat dan Ketentuan</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-300 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-300 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-300 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-300 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <motion.div 
          className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          &copy; 2024 SkillSwap. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

