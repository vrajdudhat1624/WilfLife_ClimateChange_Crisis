import Link from "next/link";
import { MapPin, BookOpen, MessageSquare, AlertTriangle } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-green-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          WildLife In Crisis
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/map"
                className="flex items-center hover:text-green-300"
              >
                <MapPin className="mr-2" size={18} />
                Tracker
              </Link>
            </li>
            <li>
              <Link
                href="/education"
                className="flex items-center hover:text-green-300"
              >
                <BookOpen className="mr-2" size={18} />
                Learn
              </Link>
            </li>
            <li>
              <Link
                href="/discuss"
                className="flex items-center hover:text-green-300"
              >
                <MessageSquare className="mr-2" size={18} />
                Discuss
              </Link>
            </li>
            <li>
              <Link
                href="/awareness"
                className="flex items-center hover:text-green-300"
              >
                <AlertTriangle className="mr-2" size={18} />
                Awareness
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
