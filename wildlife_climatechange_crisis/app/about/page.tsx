"use client"

import Image from "next/image"
import { UserCircle } from "lucide-react"
import Link from "next/link"

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Abdullah",
      role: "Full-Stack Developer",
      image: "/abdullah.png",
      linkedin: "https://www.linkedin.com/in/abdullahanwar3783/",
      overview:
          "I am a 2nd Computer Science student at UofC, participating in various hackathons and case competitions. I have hands-on experience working on projects with different teams and serve as a software developer at BMERIT Club.",
    },
    {
      name: "Isaiah",
      role: "Lead Developer",
      image: "/isaiah.png",
      linkedin: "https://www.linkedin.com/in/isaiah-a-2001/",
      overview:
      "I am a 4th-year student at UofC studying Software Engineering, with fullstack web development experience gained through multiple hackathons and internships. I am preparing to start my new grad job and apply the skills I've gained through my university studies and internships.",
    },
    {
      name: "Saif",
      role: "Developer",
      image: "/Saif.png",
      linkedin: "https://www.linkedin.com/in/saif-ullah-anwar-b49156278/",
      overview:
          "I am a 2nd Computer Science student at UofC, participating in hackathons and case competitions. I have experience working as a data analyst, visualizing and analyzing data.",
    },
    {
      name: "Vraj",
      role: "Front-end Developer",
      image: "/vraj.png",
      linkedin: "https://www.linkedin.com/in/vraj-d-b1769a278/",
      overview:
          "I am a 2nd Computer Science student at UofC, participating in hackathons and case competitions. I have gained hands-on experience by working on projects with different members.",
    },
    {
      name: "Zohair",
      role: "Developer",
      image: "/zohair.JPG",
      linkedin: "https://www.linkedin.com/in/zohairomar/",
      overview:
          "I am a 3rd Computer Science student at UofC, previously at UBC for two years. Passionate about hackathons, data analytics, and developing innovative solutions.",
    },
  ]

  return (
      <div className="container mx-auto">
        {/* Mission Section - White Background */}
        <section className="px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Meet the Team</h1>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            At <span className="font-bold">WildBC</span>, we are dedicated to preserving British Columbia&apos;s diverse
            wildlife. Our platform was developed during the Wildlife in Crisis BC hackathon, where we came together to
            address pressing challenges in conservation.
          </p>
          <p className="text-lg mb-4">
            Our mission is to raise awareness about endangered species, track wildlife movements in British Columbia, and
            educate the public on the effects of climate change on our local ecosystems. Through real-time tracking,
            community engagement, and interactive learning, we empower individuals to make a difference.
          </p>
          <p className="text-lg mb-4">
            We aim to bridge the gap between conservation efforts and public awareness by leveraging data, technology, and
            a strong network of conservationists and volunteers. Our platform provides:
          </p>
          <ul className="list-disc list-inside mb-4 text-lg">
            <li> Real-time tracking of endangered species</li>
            <li> Data-driven insights on climate impact</li>
            <li> Community discussions & awareness programs</li>
            <li> Interactive maps to visualize wildlife movements</li>
          </ul>
          <p className="text-lg">
            By fostering collaboration between scientists, conservationists, and the public, we strive to create a future
            where wildlife thrives alongside human progress.
          </p>
        </section>

        {/* Team Section - Dark Background */}
        <section className="w-full bg-[#0f172a] py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-8 text-white">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                  <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md text-center relative group overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                  >
                    <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                        {member.image ? (
                            <Image
                                src={member.image || "/placeholder.svg"}
                                alt={`Team member ${member.name}`}
                                fill
                                className="object-cover rounded-full"
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                              <UserCircle className="w-24 h-24 text-gray-400" />
                            </div>
                        )}
                      </div>
                    </Link>
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                      <h4 className="text-white text-xl font-bold mb-2">{member.name}</h4>
                      <p className="text-white text-sm">{member.overview}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Section - White Background */}
        <section className="px-4 py-12">
          <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
          <p className="text-lg">
            Through our platform, we aim to raise awareness about the impact of climate change on British Columbia&apos;s
            wildlife, provide real-time tracking of endangered species, offer educational resources, and facilitate
            community discussions. We believe that by working together, we can make a significant difference in preserving
            our natural heritage for future generations.
          </p>
        </section>
      </div>
  )
}

