import Link from "next/link"
import Image from "next/image"
import { ArrowRight, AlertTriangle, Leaf, Droplet, Sun } from "lucide-react"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/dark-forest.jpg" alt="Dark forest background" layout="fill" objectFit="cover" quality={100} />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl w-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-down text-center leading-tight">
              Wildlife <span className="text-green-400">In Crisis</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 animate-fade-in-up text-center text-gray-300">
              Join us in preserving the natural beauty and biodiversity of British Columbia
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/map"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full inline-flex items-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Now
                <ArrowRight className="ml-2" size={24} />
              </Link>
              <Link
                href="/awareness"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full inline-flex items-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Take Action
                <AlertTriangle className="ml-2" size={24} />
              </Link>
            </div>
          </div>
        </section>

        {/* Key Issues Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-400">
              Critical Wildlife Issues
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Leaf className="text-green-400 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Habitat Loss</h3>
                <p className="text-gray-400">Deforestation and urban expansion threaten countless species in BC.</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Droplet className="text-blue-400 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Water Pollution</h3>
                <p className="text-gray-400">
                  Industrial runoff and plastics endanger marine and freshwater ecosystems.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Sun className="text-yellow-400 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Climate Change</h3>
                <p className="text-gray-400">Rising temperatures disrupt delicate ecological balances across BC.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-green-800 bg-opacity-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Make a Difference Today</h2>
            <p className="text-xl mb-8 text-gray-300">Every action counts in preserving BC's unique ecosystems</p>
            <Link
              href="/discuss"
              className="bg-white text-green-800 font-bold py-3 px-8 rounded-full inline-flex items-center hover:bg-green-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Join the Discussion
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

