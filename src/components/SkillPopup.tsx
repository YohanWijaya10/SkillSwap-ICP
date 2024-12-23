import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useState } from 'react'
import ChatInterface from './ChatInterface'

interface SkillPopupProps {
  name: string
  description: string
  provider: string
  duration: string
  onClose: () => void
}

const SkillPopup: React.FC<SkillPopupProps> = ({ name, description, provider, duration, onClose }) => {
  const [showChat, setShowChat] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <motion.div
        className="bg-gradient-to-br from-purple-800 to-blue-700 p-8 rounded-lg shadow-xl max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {!showChat ? (
          <>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-teal-300">{name}</h3>
              <button onClick={onClose} className="text-gray-300 hover:text-white">
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-200 mb-4">{description}</p>
            <div className="flex justify-between text-sm mb-6">
              <span className="text-purple-300">Oleh: {provider}</span>
              <span className="text-teal-300">Durasi: {duration}</span>
            </div>
            <div className="space-y-4">
              <button 
                className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-full transition-colors"
                onClick={() => setShowChat(true)}
              >
                Hubungi Pengajar
              </button>
            </div>
          </>
        ) : (
          <ChatInterface 
            skillName={name} 
            provider={provider} 
            onClose={() => setShowChat(false)}
          />
        )}
      </motion.div>
    </motion.div>
  )
}

export default SkillPopup

