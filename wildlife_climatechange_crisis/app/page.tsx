import Link from "next/link";
import { ArrowRight, Leaf, Thermometer, Fish } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section
        className="py-20 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 inline-block rounded-lg">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Protect BC Wildlife
          </h1>
          <p className="text-xl text-white mb-8">
            Join us in preserving the natural beauty of British Columbia
          </p>
          <Link
            href="/map"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center"
          >
            Explore Now
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Key Wildlife Facts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Leaf className="text-green-600 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Biodiversity</h3>
            <p>
              BC is home to over 1,100 species at risk, including 754 plants and
              356 animals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Thermometer className="text-red-600 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Climate Impact</h3>
            <p>
              Average temperatures in BC have increased by 1.4°C over the past
              century.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Fish className="text-blue-600 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Marine Life</h3>
            <p>
              BC coastal waters support over 400 species of fish and 29 marine
              mammal species.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
