"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

// Mock data for discussion threads
const initialThreads = [
  { id: 1, title: "How can we reduce our carbon footprint?", author: "EcoWarrior", replies: 5 },
  { id: 2, title: "Best places for wildlife viewing in BC", author: "NatureExplorer", replies: 3 },
  { id: 3, title: "Local conservation initiatives", author: "BCNative", replies: 7 },
]

export default function DiscussionBoard() {
  const [threads, setThreads] = useState(initialThreads)
  const [newThread, setNewThread] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newThread.trim()) {
      setThreads([{ id: threads.length + 1, title: newThread, author: "Anonymous", replies: 0 }, ...threads])
      setNewThread("")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Discussion Board</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex">
          <input
            type="text"
            value={newThread}
            onChange={(e) => setNewThread(e.target.value)}
            placeholder="Start a new discussion..."
            className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <button
            type="submit"
            className="bg-green-600 text-white p-2 rounded-r-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            <Send size={24} />
          </button>
        </div>
      </form>
      <div className="space-y-4">
        {threads.map((thread) => (
          <div key={thread.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{thread.title}</h3>
            <p className="text-sm text-gray-600">Posted by {thread.author}</p>
            <p className="text-sm text-gray-600">{thread.replies} replies</p>
          </div>
        ))}
      </div>
    </div>
  )
}

