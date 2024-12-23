import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface PricingPlanProps {
  title: string
  price: string
  features: string[]
  isPopular?: boolean
}

const PricingPlan: React.FC<PricingPlanProps> = ({ title, price, features, isPopular }) => (
  <motion.div 
    className={`bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-lg ${isPopular ? 'border-2 border-teal-400' : ''}`}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {isPopular && (
      <span className="bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full absolute -top-3 left-1/2 transform -translate-x-1/2">
        POPULAR
      </span>
    )}
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-4xl font-bold text-teal-400 mb-6">{price}</p>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-300">
          <Check className="w-5 h-5 mr-2 text-teal-400" />
          {feature}
        </li>
      ))}
    </ul>
    <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full transition-colors">
      Choose Plan
    </button>
  </motion.div>
)

const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Free",
      price: "0 ICP",
      features: [
        "Community forum access",
        "Monthly free webinars",
        "Basic profile"
      ]
    },
    {
      title: "Pro",
      price: "5 ICP / month",
      features: [
        "All Free features",
        "Access to all premium classes",
        "Digital certificates",
        "Priority customer support",
        "Verified profile"
      ],
      isPopular: true
    }
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
          Choose Your Plan
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection

