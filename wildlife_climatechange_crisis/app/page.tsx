import Link from "next/link";

import {
  ArrowRight,
  AlertTriangle,
  Leaf,
  Droplet,
  Sun,
  Thermometer,
  Fish,
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src="/wildlife_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl w-full text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-down leading-tight">
              Protect <span className="text-green-400">BC&apos;s Wildlife</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 animate-fade-in-up text-gray-300">
              Join us in preserving the natural beauty and biodiversity of
              British Columbia.
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

        {/* Key Wildlife Facts */}
        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-400">
              Key Wildlife Facts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Leaf className="text-green-400 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Biodiversity</h3>
                <p className="text-gray-400">
                  BC is home to over 1,100 species at risk, including 754 plants
                  and 356 animals.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Thermometer className="text-red-400 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Climate Impact</h3>
                <p className="text-gray-400">
                  Average temperatures in BC have increased by 1.4°C over the
                  past century.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Fish className="text-blue-400 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Marine Life</h3>
                <p className="text-gray-400">
                  BC&apos;s coastal waters support over 400 species of fish and
                  29 marine mammal species.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Critical Wildlife Issues */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-400">
              Critical Wildlife Issues
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Leaf className="text-green-400 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Habitat Loss</h3>
                <p className="text-gray-400">
                  Deforestation and urban expansion threaten countless species
                  in BC.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Droplet className="text-blue-400 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Water Pollution</h3>
                <p className="text-gray-400">
                  Industrial runoff and plastics endanger marine and freshwater
                  ecosystems.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Sun className="text-yellow-400 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Climate Change</h3>
                <p className="text-gray-400">
                  Rising temperatures disrupt delicate ecological balances
                  across BC.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
