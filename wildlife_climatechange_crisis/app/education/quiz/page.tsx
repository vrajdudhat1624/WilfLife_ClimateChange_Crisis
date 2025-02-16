"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { useRouter } from "next/navigation"

const quizQuestions = [
  {
    question: "What is the primary cause of wildfires in British Columbia?",
    options: ["Lightning strikes", "Human activities", "Spontaneous combustion", "Volcanic eruptions"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is NOT a recommended action during a wildfire evacuation?",
    options: [
      "Pack an emergency kit",
      "Stay informed about the fire's progress",
      "Wait until the last minute to leave",
      "Follow evacuation routes provided by authorities",
    ],
    correctAnswer: 2,
  },
  {
    question: "How does climate change contribute to increased wildfire risk in BC?",
    options: [
      "By causing more frequent droughts",
      "By increasing average temperatures",
      "By extending the fire season",
      "All of the above",
    ],
    correctAnswer: 3,
  },
]

export default function WildfireQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const router = useRouter()

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setShowResult(true)
    }
  }

  const calculateProgressIncrease = () => {
    const totalQuestions = quizQuestions.length
    const pointsPerQuestion = 5 // Adjust this value to change the impact of each correct answer
    return (score / totalQuestions) * pointsPerQuestion
  }

  const finishQuiz = () => {
    const progressIncrease = calculateProgressIncrease()

    // Store the progress increase in localStorage
    const currentProgress = localStorage.getItem("learningProgress") || "30"
    const newProgress = Math.min(100, Math.round(Number.parseFloat(currentProgress) + progressIncrease))
    localStorage.setItem("learningProgress", newProgress.toString())

    // Navigate back to the education hub
    router.push("/education")
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-orange-900 dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/education"
          className="text-green-600 dark:text-green-400 hover:underline inline-flex items-center mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Education Hub
        </Link>

        <Card className="max-w-2xl mx-auto dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center dark:text-white">Wildfire Awareness Quiz</CardTitle>
          </CardHeader>
          <CardContent>
            {!showResult ? (
              <>
                <Progress value={(currentQuestion / quizQuestions.length) * 100} className="mb-6" />
                <h2 className="text-xl font-semibold mb-4 dark:text-white">
                  {quizQuestions[currentQuestion].question}
                </h2>
                <RadioGroup
                  value={selectedAnswer?.toString()}
                  onValueChange={(value) => handleAnswer(Number.parseInt(value))}
                >
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-4">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="dark:text-gray-300">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Quiz Completed!</h2>
                <p className="text-xl mb-4 dark:text-gray-300">
                  Your score: {score} out of {quizQuestions.length}
                </p>
                {score === quizQuestions.length ? (
                  <div className="flex items-center justify-center text-green-500 mb-4">
                    <CheckCircle className="mr-2 h-6 w-6" />
                    <span>Perfect score!</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center text-yellow-500 mb-4">
                    <XCircle className="mr-2 h-6 w-6" />
                    <span>Good effort! Keep learning.</span>
                  </div>
                )}
                <p className="dark:text-gray-300">You&apos;ve earned {calculateProgressIncrease().toFixed(1)}% progress!</p>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            {!showResult ? (
              <Button onClick={handleNextQuestion} disabled={selectedAnswer === null}>
                {currentQuestion + 1 === quizQuestions.length ? "Finish Quiz" : "Next Question"}
              </Button>
            ) : (
              <div className="space-x-4">
                <Button onClick={resetQuiz} variant="outline">
                  Retake Quiz
                </Button>
                <Button onClick={finishQuiz}>Back to Hub</Button>
              </div>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

