"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SalmonArticle() {
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  const articleSections = [
    {
      id: "introduction",
      title: "Introduction",
      content:
        "Salmon are a keystone species in British Columbia's ecosystems, playing a crucial role in the food chain and nutrient cycling. However, climate change is posing significant threats to their survival and migration patterns.",
    },
    {
      id: "temperature",
      title: "Rising Water Temperatures",
      content:
        "As global temperatures increase, rivers and streams in BC are warming. Salmon are cold-water species, and these warmer waters can lead to increased stress, reduced growth rates, and higher mortality. Some salmon populations may be forced to alter their migration timing or seek out cooler, deeper waters.",
    },
    {
      id: "flow",
      title: "Changes in River Flow",
      content:
        "Climate change is altering precipitation patterns and accelerating glacial melt, which affects river flow rates and timing. These changes can impact salmon's ability to navigate upstream to spawn, potentially reducing reproductive success.",
    },
    {
      id: "ocean",
      title: "Ocean Acidification",
      content:
        "As the oceans absorb more CO2, they become more acidic. This can affect the abundance of plankton and small fish that salmon feed on, potentially leading to malnutrition and reduced survival rates for salmon populations.",
    },
    {
      id: "habitat",
      title: "Habitat Loss",
      content:
        "Rising sea levels and more frequent extreme weather events can damage or destroy critical salmon habitats, including spawning grounds and estuaries where young salmon adapt to saltwater.",
    },
    {
      id: "action",
      title: "Conservation Actions",
      content:
        "Efforts to mitigate the effects of climate change on salmon include habitat restoration, improving fish passage at dams, and reducing other stressors like overfishing and pollution. Additionally, research into salmon genetics may help identify populations more resistant to climate change effects.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/education"
          className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Education Hub
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">Climate Change Effects on Salmon</h1>

          <div className="mb-8 relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/FishToxic.webp?height=300&width=800"
              alt="Salmon swimming upstream"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {articleSections.map((section) => (
            <Card key={section.id} className="mb-4 dark:bg-gray-800">
              <CardHeader className="cursor-pointer" onClick={() => toggleSection(section.id)}>
                <CardTitle className="flex justify-between items-center text-lg font-semibold dark:text-white">
                  {section.title}
                  {expandedSections.includes(section.id) ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </CardTitle>
              </CardHeader>
              {expandedSections.includes(section.id) && (
                <CardContent>
                  <p className="dark:text-gray-300">{section.content}</p>
                </CardContent>
              )}
            </Card>
          ))}

          <div className="mt-8 text-center">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">Take Action</h2>
            <p className="mb-4 dark:text-gray-300">
              Learn more about salmon conservation efforts and how you can contribute:
            </p>
            <Button asChild>
              <a
                href="https://www.pac.dfo-mpo.gc.ca/fm-gp/species-especes/salmon-saumon/index-eng.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Salmon Conservation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

