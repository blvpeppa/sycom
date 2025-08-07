import  { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-green-50 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Smart Solutions for <span className="text-green-600">Tomorrow</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your business with cutting-edge technology solutions. From web development to AI consulting, we shape the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition flex items-center gap-2">
                Get Started <ArrowRight size={20} />
              </button>
              <button className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition">
                Learn More
              </button>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Technology workspace"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
 