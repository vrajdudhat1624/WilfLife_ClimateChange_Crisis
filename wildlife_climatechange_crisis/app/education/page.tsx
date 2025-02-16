"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Play, BookOpen, Award, Share2, School, Trophy, ArrowRight } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function EducationHub() {
  const [progress, setProgress] = useState(30)

  useEffect(() => {
    const storedProgress = localStorage.getItem("learningProgress")
    if (storedProgress) {
      setProgress(Number.parseInt(storedProgress))
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white transition-colors duration-500">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-green-800">Wildlife Education Hub</h1>
        </div>

        {/* Progress Section */}
        <div className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-500">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold dark:text-white">Your Learning Progress</h2>
            <Badge variant="secondary" className="dark:bg-green-700 dark:text-white">
              {progress}% Complete
            </Badge>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Great Bear Rainforest Card */}
          <Card className="group hover:shadow-xl transition-shadow dark:bg-gray-800">
            <CardHeader>
              <div className="relative h-48 rounded-t-lg overflow-hidden mb-4">
                <Image
                  src="/Rainforest.webp?height=200&width=400"
                  alt="Great Bear Rainforest"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
              <CardTitle className="dark:text-white">The Great Bear Rainforest</CardTitle>
              <CardDescription className="dark:text-gray-300">
                Explore BC&apos;s coastal temperate rainforest ecosystem
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">Duration: 15 minutes</p>
            </CardContent>
            <CardFooter>
              <Link href="/education/great-bear-rainforest" className="w-full">
                <Button className="w-full">Watch Video</Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Salmon Article Card */}
          <Card className="group hover:shadow-xl transition-shadow dark:bg-gray-800">
            <CardHeader>
              <div className="relative h-48 rounded-t-lg overflow-hidden mb-4">
                <Image
                  src="/FishToxic.webp?height=200&width=400"
                  alt="Salmon Migration"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardTitle className="dark:text-white">Climate Change Effects on Salmon</CardTitle>
              <CardDescription className="dark:text-gray-300">
                Understanding the impact on BC&apos;s iconic species
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">Reading time: 10 minutes</p>
            </CardContent>
            <CardFooter>
              <Link href="/education/salmon-article" className="w-full">
                <Button variant="outline" className="w-full dark:text-white dark:hover:text-gray-200">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read Article
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Quiz Card */}
          <Card className="group hover:shadow-xl transition-shadow dark:bg-gray-800">
            <CardHeader>
              <div className="relative h-48 rounded-t-lg overflow-hidden mb-4 bg-gradient-to-r from-orange-400 to-red-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="w-16 h-16 text-white" />
                </div>
              </div>
              <CardTitle className="dark:text-white">Wildfire Awareness Quiz</CardTitle>
              <CardDescription className="dark:text-gray-300">
                Test your knowledge and earn achievements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">3 questions • 15 points available</p>
            </CardContent>
            <CardFooter>
              <Link href="/education/quiz" className="w-full">
                <Button variant="secondary" className="w-full">
                  Start Quiz
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Leaderboard Preview */}
          <Card className="dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center dark:text-white">
                <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
                Top Learners
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Sarah Chen", points: 2500 },
                  { name: "Mike Thompson", points: 2350 },
                  { name: "Alex Kumar", points: 2200 },
                ].map((user, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="font-bold mr-2 dark:text-white">#{index + 1}</span>
                      <span className="dark:text-gray-300">{user.name}</span>
                    </div>
                    <Badge variant="secondary" className="dark:bg-green-700 dark:text-white">
                      {user.points} pts
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full dark:text-white dark:hover:text-gray-200">
                View Full Leaderboard
              </Button>
            </CardFooter>
          </Card>

          {/* Educator Resources */}
          <Card className="dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center dark:text-white">
                <School className="mr-2 h-5 w-5 text-blue-500" />
                For Educators
              </CardTitle>
              <CardDescription className="dark:text-gray-300">
                Access additional teaching resources and materials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center text-sm dark:text-gray-300">
                  <ArrowRight className="mr-2 h-4 w-4 text-green-500" />
                  Lesson plans and activities
                </li>
                <li className="flex items-center text-sm dark:text-gray-300">
                  <ArrowRight className="mr-2 h-4 w-4 text-green-500" />
                  Downloadable worksheets
                </li>
                <li className="flex items-center text-sm dark:text-gray-300">
                  <ArrowRight className="mr-2 h-4 w-4 text-green-500" />
                  Student progress tracking
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full dark:text-white dark:hover:text-gray-200">
                <a
                  href="https://www2.gov.bc.ca/gov/content/environment/climate-change"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Access Resources
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Social Sharing */}
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Share your learning journey</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="sm" className="dark:text-white dark:hover:text-gray-200">
              <Share2 className="mr-2 h-4 w-4" />
              Share Progress
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

