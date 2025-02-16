import { HandCoins, Megaphone, Presentation, School } from "lucide-react";
import { upcomingEvents } from "./data";
import Image from "next/image";

export default function AwarenessPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {upcomingEvents.map((content, index) => (
        <div key={index} className="bg-white rounded-xl shadow-md  hover:scale-110  hover:shadow-lg transition-all duration-300">
            <div className="h-40 relative overflow-hidden rounded-t-xl">
            <Image alt={`Location of ${content.title}`} src={content.picture} layout="fill" objectFit="cover" />
            </div>
          <div className="p-6">
          <h3 className="text-xl font-semibold mb-2"> {content.title}</h3>
          <p className="mb-2">{content.description}</p>
          <p><span className="">Location: </span>{content.location}</p>
          <p><span className="">Date: </span>{content.date}</p>
          </div>

        </div>
      ))}
      </div>
    </div>
  );
}
