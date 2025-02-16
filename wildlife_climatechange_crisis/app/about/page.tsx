"use client"

import Image from "next/image"
import { UserCircle } from "lucide-react"
import Link from "next/link"

export default function AboutUs() {
    const teamMembers = [
        {
            name: "Abdullah",
            role: "Developer",
            image: "abdullah.png",
            linkedin: "https://www.linkedin.com/in/abdullahanwar3783/",
            overview: "I am a second year computer science student at UofC, participating in various hackathons and case competitions. I have gained " +
                "hands on experience by working on projects with different members. I also work as a software developer at BMERIT Club.",
        },
        {
            name: "Isaiah",
            role: "Lead Developer",
            image: "isaiah.png",
            linkedin: "https://www.linkedin.com/in/isaiah-a-2001/",
            overview:
                "I am a recent grad of UofC studying software engineering, I also have experience with multiple hackathons and internships. I an looking to start my new job with the experience" +
                " i gained during my university and internships. I am also leading this team at CalgaryHacks.",
        },
        {
            name: "Saif",
            role: "Developer",
            image: "Saif.png",
            linkedin: "https://www.linkedin.com/in/saif-ullah-anwar-b49156278/",
            overview: "I am a second year computer science student at UofC, participating in hackathons and case competitions. I have gained " +
                "hands on experience by working on projects with different members. I have experience working as a data analyst where i visualize and analyze data.",
        },
        {
            name: "Vraj",
            role: "Designer",
            image: "vraj.png",
            linkedin: "https://www.linkedin.com/in/vraj-d-b1769a278/",
            overview: "I am a second year computer science student at UofC, participating in hackathons and case competitions. I have gained " +
                "hands on experience by working on projects with different members",
        },
        {
            name: "Zohair",
            role: "Developer",
            image: "zohair.JPG",
            linkedin: "https://www.linkedin.com/in/zohairomar/",
            overview:
                "Third year computer science student at UofC, moved from UBC where he did his first 2 years, participating in hackathons and creating solutions.",
        },
    ]

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-lg mb-4">
                    At CalgaryHacks, we are developing a project called Wildlife in Crisis, a platform dedicated to raising
                    awareness and driving action for wildlife conservation in British Columbia. During the hackathon, our team
                    recognized the urgent need for a comprehensive solution that bridges education, community engagement, and
                    real-time conservation efforts.
                </p>
                <p className="text-lg">
                    Our initiative fosters awareness through interactive resources, discussion forums, and conservation event
                    tracking, equipping citizens with the tools they need to make a lasting impact on BC's wildlife and
                    ecosystems. By empowering individuals with knowledge and opportunities to get involved, we aim to create a
                    sustainable movement toward preserving our natural environment.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md text-center relative group overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:z-10"
                        >
                            <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                <div className="relative w-48 h-48 mx-auto mb-4 cursor-pointer transition-transform duration-300 group-hover:scale-110">
                                    {member.image ? (
                                        <Image
                                            src={`/${member.image}`}
                                            alt={`Team member ${member.name}`}
                                            fill
                                            className="rounded-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
                                            <UserCircle className="w-32 h-32 text-gray-400" />
                                        </div>
                                    )}
                                </div>
                            </Link>
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>

                            {/* Hover effect overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                                <h4 className="text-white text-xl font-bold mb-2">{member.name}</h4>
                                <p className="text-white text-sm">{member.overview}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
                <p className="text-lg">
                    Through our platform, we aim to raise awareness about the impact of climate change on British Columbia's
                    wildlife, provide real-time tracking of endangered species, offer educational resources, and facilitate
                    community discussions. We believe that by working together, we can make a significant difference in preserving
                    our natural heritage for future generations.
                </p>
            </section>
        </div>
    )
}

