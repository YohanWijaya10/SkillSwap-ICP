import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, X, Video } from 'lucide-react'
import RatingForm from './RatingForm'

interface ChatInterfaceProps {
  skillName: string
  provider: string
  onClose: () => void
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ skillName, provider, onClose }) => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [userApproved, setUserApproved] = useState(false)
  const [providerApproved, setProviderApproved] = useState(false)
  const [meetingStarted, setMeetingStarted] = useState(false)
  const [meetingEnded, setMeetingEnded] = useState(false)

  const sendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { sender: 'User', text: inputMessage }])
      setInputMessage('')
      
      // Simulate provider response
      setTimeout(() => {
        setMessages(prev => [...prev, { sender: 'Provider', text: 'Terima kasih atas minat Anda. Apakah Anda ingin memulai sesi untuk ' + skillName + '?' }])
      }, 1000)
    }
  }

  const handleApprove = () => {
    setUserApproved(true)
    // Simulate provider approval
    setTimeout(() => {
      setProviderApproved(true)
    }, 1500)
  }

  const startMeeting = () => {
    setMeetingStarted(true)
    // Simulate meeting duration
    setTimeout(() => {
      setMeetingStarted(false)
      setMeetingEnded(true)
    }, 3000) // 3 seconds to simulate a meeting
  }

  const handleRatingSubmit = (rating: number, feedback: string, tipAmount: number) => {
    console.log(`Rating: ${rating}, Feedback: ${feedback}, Tip: ${tipAmount} ICP`)
    // Here you would typically send this data to your backend
    onClose()
  }

  return (
    <div className="flex flex-col h-[500px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-teal-300">Chat dengan {provider}</h3>
        <button onClick={onClose} className="text-gray-300 hover:text-white">
          <X size={24} />
        </button>
      </div>
      <AnimatePresence>
        {!meetingEnded ? (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-grow flex flex-col"
          >
            <div className="flex-grow overflow-y-auto mb-4 space-y-2">
              {messages.map((message, index) => (
                <div key={index} className={`p-2 rounded-lg ${message.sender === 'User' ? 'bg-purple-600 ml-auto' : 'bg-blue-600'} max-w-[80%]`}>
                  <p className="text-sm text-white">{message.text}</p>
                </div>
              ))}
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ketik pesan..."
                className="flex-grow p-2 rounded-full bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-300"
              />
              <button
                onClick={sendMessage}
                className="p-2 bg-teal-500 rounded-full hover:bg-teal-600 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
            {!userApproved && (
              <motion.button
                className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition-colors"
                onClick={handleApprove}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Setuju untuk Memulai
              </motion.button>
            )}
            {userApproved && !providerApproved && (
              <p className="mt-4 text-center text-yellow-300">Menunggu persetujuan pengajar...</p>
            )}
            {userApproved && providerApproved && !meetingStarted && (
              <motion.button
                className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition-colors flex items-center justify-center"
                onClick={startMeeting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Video className="mr-2" size={20} />
                Mulai Pertemuan
              </motion.button>
            )}
            {meetingStarted && (
              <p className="mt-4 text-center text-green-300">Pertemuan sedang berlangsung...</p>
            )}
          </motion.div>
        ) : (
          <RatingForm onSubmit={handleRatingSubmit} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default ChatInterface

