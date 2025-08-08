import { Mail, Phone, MessageCircle, Clock } from 'lucide-react'

export default function Help() {
  const helpOptions = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us an email and we'll get back to you within 24 hours.",
      contact: "sycomindustry@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us during business hours for immediate assistance.",
      contact: "+250 782 858 703"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team in real-time.",
      contact: "Start Live Chat"
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "Monday to Friday, 9:00 AM to 6:00 PM (GMT+2)",
      contact: "24/7 Emergency Support Available"
    }
  ]

  return (
    <section id="help" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Help & Support</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">We're here to assist you</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {helpOptions.map((option, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition">
              <option.icon className="text-dark-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{option.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{option.description}</p>
              <p className="text-dark-blue-600 font-medium">{option.contact}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-dark-blue-50 dark:bg-gray-800 rounded-xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Find answers to common questions about our services, products, and processes.
            </p>
            <button className="bg-dark-blue-600 text-white px-6 py-3 rounded-lg hover:bg-dark-blue-700 transition">
              View FAQ
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}