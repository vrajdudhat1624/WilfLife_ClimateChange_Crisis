import Image from "next/image"

export default function AboutUs() {
    const teamMembers = [
        { name: "Abdullah", role: "Team Lead" },
        { name: "Saif", role: "Developer" },
        { name: "Vraj", role: "Designer" },
        { name: "Zohair", role: "Data Analyst" },
        { name: "Isaiah", role: "Content Creator" },
    ]

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-lg mb-4">
                    At Wildlife in Crisis, we are passionate about preserving and protecting the diverse wildlife of British
                    Columbia. Our platform is the result of our participation in the "Wildlife in Crisis BC" hackathon, where we
                    came together to address the urgent challenges facing our local ecosystems.
                </p>
                <p className="text-lg">
                    The "Wildlife in Crisis BC" hackathon brought together innovative minds to develop solutions for wildlife
                    conservation in British Columbia. Our team recognized the need for a comprehensive platform that could
                    educate, engage, and empower citizens to take action in protecting our precious wildlife.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                            <Image
                                src={`/placeholder.svg?height=150&width=150`}
                                alt={member.name}
                                width={150}
                                height={150}
                                className="rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
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

