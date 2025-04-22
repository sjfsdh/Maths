"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { Keyboard, Play, RefreshCw, Award, Clock, CheckCircle, BarChart2, ChevronDown } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

// Sample paragraphs for different difficulty levels
const paragraphs = {
  beginner: [
    "The quick brown fox jumps over the lazy dog. This sentence contains every letter in the English alphabet. It is often used to test typing skills and keyboard layouts. Try to type it as quickly and accurately as you can.",
    "Learning to type quickly and accurately is an essential skill in today's digital world. Regular practice can help you improve your typing speed and reduce errors. Set aside some time each day to practice typing.",
    "Typing is the process of writing or inputting text by pressing keys on a keyboard. Touch typing is a style of typing where you use all of your fingers without looking at the keys. This method can significantly increase your typing speed.",
  ],
  intermediate: [
    "Programming involves tasks such as analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of algorithms. The source code of a program is written in one or more languages that are intelligible to programmers, rather than machine code, which is directly executed by the central processing unit.",
    "The Internet is a global system of interconnected computer networks that use the standard Internet protocol suite to link several billion devices worldwide. It is a network of networks that consists of millions of private, public, academic, business, and government networks of local to global scope, linked by a broad array of electronic, wireless, and optical networking technologies.",
    "Artificial intelligence is intelligence demonstrated by machines, as opposed to natural intelligence displayed by animals including humans. Leading AI textbooks define the field as the study of 'intelligent agents': any system that perceives its environment and takes actions that maximize its chance of achieving its goals.",
  ],
  advanced: [
    "Quantum computing is the exploitation of collective properties of quantum states, such as superposition and entanglement, to perform computation. The devices that perform quantum computations are known as quantum computers. They are believed to be able to solve certain computational problems, such as integer factorization, substantially faster than classical computers.",
    "Cryptography, or cryptology, is the practice and study of techniques for secure communication in the presence of third parties called adversaries. More generally, cryptography is about constructing and analyzing protocols that prevent third parties or the public from reading private messages; various aspects in information security such as data confidentiality, data integrity, authentication, and non-repudiation are central to modern cryptography.",
    "The blockchain is a distributed ledger technology that underlies cryptocurrencies like Bitcoin and Ethereum, but it has many other applications. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data. By design, a blockchain is resistant to modification of the data. It is 'an open, distributed ledger that can record transactions between two parties efficiently and in a verifiable and permanent way'.",
  ],
}

// Typing test statistics interface
interface TypingStats {
  wpm: number
  accuracy: number
  correctChars: number
  incorrectChars: number
  totalChars: number
  elapsedTime: number
}

export default function TypingSpeedTester() {
  // State for the typing test
  const [level, setLevel] = useState<"beginner" | "intermediate" | "advanced">("beginner")
  const [text, setText] = useState("")
  const [userInput, setUserInput] = useState("")
  const [isStarted, setIsStarted] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [startTime, setStartTime] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [stats, setStats] = useState<TypingStats>({
    wpm: 0,
    accuracy: 0,
    correctChars: 0,
    incorrectChars: 0,
    totalChars: 0,
    elapsedTime: 0,
  })
  const [showResults, setShowResults] = useState(false)
  const [highlightedText, setHighlightedText] = useState<React.ReactNode[]>([])

  const inputRef = useRef<HTMLTextAreaElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Function to get a random paragraph based on the selected level
  const getRandomParagraph = useCallback(() => {
    const levelParagraphs = paragraphs[level]
    const randomIndex = Math.floor(Math.random() * levelParagraphs.length)
    return levelParagraphs[randomIndex]
  }, [level])

  // Initialize the test
  const initTest = useCallback(() => {
    const newText = getRandomParagraph()
    setText(newText)
    setUserInput("")
    setIsStarted(false)
    setIsFinished(false)
    setStartTime(0)
    setCurrentTime(0)
    setStats({
      wpm: 0,
      accuracy: 0,
      correctChars: 0,
      incorrectChars: 0,
      totalChars: 0,
      elapsedTime: 0,
    })
    setShowResults(false)
    updateHighlightedText("", newText)

    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [getRandomParagraph])

  // Start the test
  const startTest = () => {
    setIsStarted(true)
    setStartTime(Date.now())
    setCurrentTime(Date.now())

    // Start the timer
    timerRef.current = setInterval(() => {
      setCurrentTime(Date.now())
    }, 1000)

    // Focus the input field
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  // Reset the test
  const resetTest = () => {
    initTest()
  }

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isStarted) {
      startTest()
    }

    const value = e.target.value
    setUserInput(value)
    updateHighlightedText(value, text)

    // Check if the test is complete
    if (value === text) {
      finishTest()
    }
  }

  // Update the highlighted text based on user input
  const updateHighlightedText = (input: string, targetText: string) => {
    const highlighted = []
    let correctChars = 0
    let incorrectChars = 0

    for (let i = 0; i < targetText.length; i++) {
      if (i < input.length) {
        if (input[i] === targetText[i]) {
          highlighted.push(
            <span key={i} className="text-green-500 dark:text-green-400">
              {targetText[i]}
            </span>,
          )
          correctChars++
        } else {
          highlighted.push(
            <span key={i} className="text-red-500 dark:text-red-400 bg-red-100 dark:bg-red-900">
              {targetText[i]}
            </span>,
          )
          incorrectChars++
        }
      } else {
        highlighted.push(
          <span key={i} className="text-muted-foreground">
            {targetText[i]}
          </span>,
        )
      }
    }

    setHighlightedText(highlighted)

    // Update stats in real-time
    if (isStarted && !isFinished) {
      const elapsedTime = (currentTime - startTime) / 1000 || 0.001 // Avoid division by zero
      const totalChars = correctChars + incorrectChars
      const accuracy = totalChars > 0 ? (correctChars / totalChars) * 100 : 0

      // Calculate WPM: (characters typed / 5) / minutes elapsed
      // 5 characters is the average word length
      const wpm = Math.round(correctChars / 5 / (elapsedTime / 60))

      setStats({
        wpm: wpm || 0,
        accuracy: accuracy || 0,
        correctChars,
        incorrectChars,
        totalChars,
        elapsedTime,
      })
    }
  }

  // Finish the test
  const finishTest = () => {
    setIsFinished(true)
    setShowResults(true)

    // Stop the timer
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }

    // Calculate final stats
    const elapsedTime = (Date.now() - startTime) / 1000
    const words = text.trim().split(/\s+/).length
    const wpm = Math.round((words / elapsedTime) * 60)

    // Count correct and incorrect characters
    let correctChars = 0
    let incorrectChars = 0

    for (let i = 0; i < text.length; i++) {
      if (i < userInput.length) {
        if (userInput[i] === text[i]) {
          correctChars++
        } else {
          incorrectChars++
        }
      } else {
        incorrectChars++
      }
    }

    const totalChars = correctChars + incorrectChars
    const accuracy = (correctChars / totalChars) * 100

    setStats({
      wpm,
      accuracy,
      correctChars,
      incorrectChars,
      totalChars,
      elapsedTime,
    })
  }

  // Initialize the test on component mount and when level changes
  useEffect(() => {
    initTest()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level])

  // Clean up timer on component unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  // Format time as mm:ss
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  // Get difficulty level badge color
  const getLevelColor = (selectedLevel: string) => {
    switch (selectedLevel) {
      case "beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "intermediate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "advanced":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <Card className="shadow-lg border-t-4 border-t-rose-500 dark:border-t-rose-400">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Keyboard className="h-6 w-6 text-rose-500 dark:text-rose-400" />
              <CardTitle className="text-2xl">Typing Speed Tester</CardTitle>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Badge className={getLevelColor(level)}>{level.charAt(0).toUpperCase() + level.slice(1)}</Badge>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLevel("beginner")}>
                  <Badge className={getLevelColor("beginner")}>Beginner</Badge>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLevel("intermediate")}>
                  <Badge className={getLevelColor("intermediate")}>Intermediate</Badge>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLevel("advanced")}>
                  <Badge className={getLevelColor("advanced")}>Advanced</Badge>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <CardDescription>Test and improve your typing speed and accuracy</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Stats Display */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="bg-muted/50">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <BarChart2 className="h-4 w-4 text-rose-500" />
                  <span className="text-sm font-medium">WPM</span>
                </div>
                <span className="text-2xl font-bold tabular-nums">{Math.round(stats.wpm)}</span>
              </CardContent>
            </Card>
            <Card className="bg-muted/50">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="h-4 w-4 text-rose-500" />
                  <span className="text-sm font-medium">Accuracy</span>
                </div>
                <span className="text-2xl font-bold tabular-nums">{Math.round(stats.accuracy)}%</span>
              </CardContent>
            </Card>
            <Card className="bg-muted/50">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="h-4 w-4 text-rose-500" />
                  <span className="text-sm font-medium">Time</span>
                </div>
                <span className="text-2xl font-bold tabular-nums">{formatTime(stats.elapsedTime)}</span>
              </CardContent>
            </Card>
          </div>

          {/* Text Display */}
          <Card className="border border-muted">
            <CardContent className="p-6">
              <div className="font-mono text-lg leading-relaxed">{highlightedText}</div>
            </CardContent>
          </Card>

          {/* Input Area */}
          <div className="space-y-2">
            <textarea
              ref={inputRef}
              value={userInput}
              onChange={handleInputChange}
              disabled={isFinished}
              className="w-full h-32 p-4 border rounded-md font-mono text-lg resize-none focus:outline-none focus:ring-2 focus:ring-rose-500 dark:bg-gray-800 dark:border-gray-700"
              placeholder={isStarted ? "" : "Click Start or just start typing..."}
            />
            <Progress value={stats.accuracy} className="h-2" />
          </div>

          {/* Control Buttons */}
          <div className="flex gap-4">
            <Button
              onClick={startTest}
              disabled={isStarted || isFinished}
              className="flex-1 bg-rose-600 hover:bg-rose-700"
            >
              <Play className="h-4 w-4 mr-2" />
              Start
            </Button>
            <Button onClick={resetTest} variant="outline" className="flex-1">
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>

          {/* Tips */}
          <Card className="bg-muted/50">
            <CardContent className="p-4">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <Award className="h-4 w-4 text-rose-500" />
                Typing Tips
              </h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Keep your fingers positioned over the home row keys (ASDF JKL;)</li>
                <li>• Look at the screen, not your keyboard</li>
                <li>• Practice regularly to build muscle memory</li>
                <li>• Focus on accuracy first, then speed will follow</li>
              </ul>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* Results Dialog */}
      <Dialog open={showResults} onOpenChange={setShowResults}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Test Results</DialogTitle>
            <DialogDescription>Your typing test performance</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-muted/50">
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <span className="text-sm font-medium">Words Per Minute</span>
                  <span className="text-3xl font-bold text-rose-500">{Math.round(stats.wpm)}</span>
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <span className="text-sm font-medium">Accuracy</span>
                  <span className="text-3xl font-bold text-rose-500">{Math.round(stats.accuracy)}%</span>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-muted/50">
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <span className="text-xs font-medium">Time</span>
                  <span className="text-lg font-bold">{formatTime(stats.elapsedTime)}</span>
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <span className="text-xs font-medium">Correct</span>
                  <span className="text-lg font-bold text-green-500">{stats.correctChars}</span>
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <span className="text-xs font-medium">Errors</span>
                  <span className="text-lg font-bold text-red-500">{stats.incorrectChars}</span>
                </CardContent>
              </Card>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={resetTest} className="w-full bg-rose-600 hover:bg-rose-700">
              Try Again
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
