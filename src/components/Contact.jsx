import  { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">Ready to start your next project? Let's talk.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-dark-blue-600 w-6 h-6" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">sycomindustry@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-dark-blue-600 w-6 h-6" />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">+250 782 858 703</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-dark-blue-600 w-6 h-6" />
                <div>
                  <p className="font-medium text-gray-900">WhatsApp</p>
                  <a href="https://wa.me/250782858703" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-dark-blue-600">
                    +250 782 858 703
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-dark-blue-600 w-6 h-6" />
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-600">Kigali, Rwanda</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              // Form submission logic would go here
              alert('Thank you for your message! We will get back to you soon.');
            }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-dark-blue-600 text-white py-2 px-4 rounded-md hover:bg-dark-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
 