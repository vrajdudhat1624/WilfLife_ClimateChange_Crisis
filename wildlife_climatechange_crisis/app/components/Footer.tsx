import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
      <footer className="bg-green-800 text-white p-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Branding */}
          <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold">WildBC</h3>
            <p className="text-sm">Preserving British Columbia's Wildlife</p>
          </div>

          {/* Meet the Team Link and Social Media Icons */}
          <div className="flex flex-col items-center md:items-end">
            <Link
                href="/about"
                className="text-2xl font-bold hover:text-green-300 transition-all duration-300 transform hover:scale-105 mb-2"
            >
              Meet the Team
            </Link>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-green-300 transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors duration-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors duration-300">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="mt-4 text-center text-sm">© 2025 WildBC. All rights reserved.</div>
      </footer>
  )
}

