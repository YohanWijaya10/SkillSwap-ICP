import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, DollarSign, CheckCircle } from 'lucide-react'

interface EventProps {
  title: string
  date: string
  location: string
  attendees: number
  price: number | 'Gratis'
  organizer: string
  isVerified: boolean
}

const EventCard: React.FC<EventProps> = ({ title, date, location, attendees, price, organizer, isVerified }) => (
  <motion.div 
    className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      {isVerified && (
        <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
          <CheckCircle size={12} className="mr-1" />
          Verified Author
        </span>
      )}
    </div>
    <div className="flex items-center text-gray-300 mb-2">
      <Calendar className="w-5 h-5 mr-2" />
      <span>{date}</span>
    </div>
    <div className="flex items-center text-gray-300 mb-2">
      <MapPin className="w-5 h-5 mr-2" />
      <span>{location}</span>
    </div>
    <div className="flex items-center text-gray-300 mb-2">
      <Users className="w-5 h-5 mr-2" />
      <span>{attendees} attendees</span>
    </div>
    <div className="flex items-center text-teal-300 mb-2">
      <DollarSign className="w-5 h-5 mr-2" />
      <span>{typeof price === 'number' ? `${price} ICP` : 'Free'}</span>
    </div>
    <div className="text-sm text-gray-400">
      Organizer: {organizer}
    </div>
  </motion.div>
)

const EventSection = () => {
  const events: EventProps[] = [
    {
      title: "Web3 Developer Summit",
      date: "15-17 Agustus 2023",
      location: "Jakarta Convention Center",
      attendees: 500,
      price: 50,
      organizer: "SkillSwap",
      isVerified: true
    },
    {
      title: "Blockchain & Crypto Expo",
      date: "22-23 September 2023",
      location: "Bali International Convention Centre",
      attendees: 1000,
      price: 'Gratis',
      organizer: "Alex Johnson",
      isVerified: true
    },
    {
      title: "DeFi Innovation Forum",
      date: "5-6 Oktober 2023",
      location: "ICE BSD City, Tangerang",
      attendees: 750,
      price: 30,
      organizer: "SkillSwap",
      isVerified: false
    },
    {
      title: "Smart Contract Security Webinar",
      date: "20 Oktober 2023",
      location: "Online",
      attendees: 300,
      price: 'Gratis',
      organizer: "Sarah Lee",
      isVerified: true
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Web3 Events and Webinars
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            View All Events
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default EventSection

