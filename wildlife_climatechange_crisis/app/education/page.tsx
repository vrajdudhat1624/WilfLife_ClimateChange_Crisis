import { Video, FileText, HelpCircle } from "lucide-react"

const educationalContent = [
  {
    type: "documentary",
    title: "The Great Bear Rainforest",
    description: "Explore the unique ecosystem of BC's coastal temperate rainforest.",
  },
  {
    type: "article",
    title: "Climate Change Effects on Salmon",
    description: "Learn how warming waters are impacting BC's iconic salmon populations.",
  },
  {
    type: "fact",
    title: "Did You Know?",
    description: "The Spirit Bear, a rare white black bear, is found only in the Great Bear Rainforest.",
  },
  // Add more educational content as needed
]

export default function EducationalHub() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Educational Hub</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationalContent.map((content, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            {content.type === "documentary" && <Video className="text-blue-600 mb-4" size={48} />}
            {content.type === "article" && <FileText className="text-green-600 mb-4" size={48} />}
            {content.type === "fact" && <HelpCircle className="text-yellow-600 mb-4" size={48} />}
            <h3 className="text-xl font-semibold mb-2">{content.title}</h3>
            <p>{content.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

