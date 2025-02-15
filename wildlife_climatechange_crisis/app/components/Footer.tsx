import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold">WildBC</h3>
          <p className="text-sm">Preserving British Columbia's Wildlife</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-green-300">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-green-300">
            <Twitter size={24} />
          </a>
          <a href="#" className="hover:text-green-300">
            <Instagram size={24} />
          </a>
        </div>
      </div>
      <div className="mt-4 text-center text-sm">© 2025 WildBC. All rights reserved.</div>
    </footer>
  )
}

