import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

interface RatingFormProps {
  onSubmit: (rating: number, feedback: string, tipAmount: number) => void
}

const RatingForm: React.FC<RatingFormProps> = ({ onSubmit }) => {
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [tipAmount, setTipAmount] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(rating, feedback, parseFloat(tipAmount) || 0)
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <h3 className="text-2xl font-bold text-teal-300 mb-4">Beri Rating Pertemuan</h3>
      <div className="flex justify-center space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.button
            key={star}
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setRating(star)}
            className={`text-3xl ${rating >= star ? 'text-yellow-400' : 'text-gray-400'}`}
          >
            <Star fill={rating >= star ? 'currentColor' : 'none'} />
          </motion.button>
        ))}
      </div>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Berikan feedback Anda..."
        className="w-full p-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-300"
        rows={4}
      />
      <div className="flex space-x-2">
        <input
          type="number"
          value={tipAmount}
          onChange={(e) => setTipAmount(e.target.value)}
          placeholder="Jumlah ICP Token"
          className="flex-grow p-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-300"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg transition-colors"
          type="button"
          onClick={() => console.log(`Tip sent: ${tipAmount} ICP`)}
        >
          Beri Tips
        </motion.button>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-full transition-colors"
        type="submit"
      >
        Kirim Rating
      </motion.button>
    </motion.form>
  )
}

export default RatingForm

