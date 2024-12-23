import { motion } from 'framer-motion'
import { Star, StarHalf } from 'lucide-react'

interface TeacherRatingProps {
  name: string
  skill: string
  rating: number
  reviews: number
  image: string
}

const TeacherRating: React.FC<TeacherRatingProps> = ({ name, skill, rating, reviews, image }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <motion.div 
      className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-lg flex items-center space-x-4"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover" />
      <div>
        <h4 className="text-xl font-semibold text-teal-300">{name}</h4>
        <p className="text-gray-300 mb-2">{skill}</p>
        <div className="flex items-center">
          {[...Array(fullStars)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
          ))}
          {hasHalfStar && <StarHalf className="w-5 h-5 fill-current text-yellow-400" />}
          <span className="ml-2 text-gray-300">({reviews} ulasan)</span>
        </div>
      </div>
    </motion.div>
  )
}

export default TeacherRating

