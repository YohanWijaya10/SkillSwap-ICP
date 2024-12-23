import { motion } from 'framer-motion'

interface SkillCardProps {
  name: string
  description: string
  provider: string
  duration: string
  onClick: () => void
}

const SkillCard: React.FC<SkillCardProps> = ({ name, description, provider, duration, onClick }) => {
  return (
    <motion.div 
      className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-lg cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={onClick}
    >
      <h4 className="text-xl font-semibold mb-2 text-teal-300">{name}</h4>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex justify-between text-sm">
        <span className="text-purple-300">Oleh: {provider}</span>
        <span className="text-teal-300">{duration}</span>
      </div>
    </motion.div>
  )
}

export default SkillCard

