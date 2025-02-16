"use client"

import { useState, useEffect } from "react"
import { Search, Filter, SunMoon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreatePost } from "./components/create-post"
import { PostCard } from "./components/post-card"
import type { Post } from "./types"

// Mock initial data
const initialPosts: Post[] = [
  {
    id: "1",
    title: "Impact of Climate Change on BC Wildlife",
    content:
      "As a wildlife researcher, I've observed significant changes in animal behavior and migration patterns due to rising temperatures. We're seeing earlier spring arrivals of migratory birds and changes in plant flowering times that affect the entire ecosystem...",
    author: {
      id: "expert1",
      name: "Dr. Sarah Chen",
      role: "expert",
      avatar: "/placeholder.svg?height=40&width=40",
      expertise: "Wildlife Biology",
    },
    category: "expert_qa",
    isPinned: true,
    isTrending: true,
    createdAt: new Date().toISOString(),
    reactions: [{ type: "like", count: 42, userReacted: false }],
    replies: [],
    tags: ["climate-change", "wildlife", "research"],
  },
  {
    id: "2",
    title: "My Experience Volunteering at Wildlife Rescue",
    content:
      "Last month, I spent two weeks volunteering at a wildlife rescue center in BC. The experience opened my eyes to the challenges our local wildlife faces...",
    author: {
      id: "user1",
      name: "Mike Thompson",
      role: "user",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    category: "user_story",
    isPinned: false,
    isTrending: true,
    createdAt: new Date().toISOString(),
    reactions: [{ type: "like", count: 24, userReacted: false }],
    replies: [],
    tags: ["volunteer", "wildlife-rescue", "community"],
  },
]

export default function DiscussionBoard() {
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    // Apply dark mode
    // if (isDarkMode) {
    //   document.documentElement.classList.add("dark")
    // } else {
    //   document.documentElement.classList.remove("dark")
    // }
  }, [])

  const handleCreatePost = (newPost: { title: string; content: string; category: "general" | "expert_qa" | "user_story" }) => {
    const post: Post = {
      id: String(posts.length + 1),
      ...newPost,
      author: {
        id: "current-user",
        name: "Current User",
        role: "user",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      isPinned: false,
      isTrending: false,
      createdAt: new Date().toISOString(),
      reactions: [{ type: "like", count: 0, userReacted: false }],
      replies: [],
      tags: [],
    }
    setPosts([post, ...posts])
  }

  const handleReply = (postId: string) => {
    // Implement reply functionality
    console.log("Reply to post:", postId)
  }

  const handleReact = (postId: string, reactionType: string) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          const updatedReactions = post.reactions.map((reaction) => {
            if (reaction.type === reactionType) {
              return {
                ...reaction,
                count: reaction.userReacted ? reaction.count - 1 : reaction.count + 1,
                userReacted: !reaction.userReacted,
              }
            }
            return reaction
          })
          return { ...post, reactions: updatedReactions }
        }
        return post
      }),
    )
  }

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTab = activeTab === "all" || post.category === activeTab
    return matchesSearch && matchesTab
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-900 dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-green-800 dark:text-green-300">Discussion Board</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 dark:bg-gray-800 dark:text-white"
            />
          </div>
          <Button variant="outline" className="md:w-auto dark:text-white dark:hover:text-gray-200">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        <CreatePost onSubmit={handleCreatePost} />

        <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
          <TabsList className="dark:bg-gray-800">
            <TabsTrigger value="all" className="dark:text-white dark:data-[state=active]:bg-green-700">
              All Discussions
            </TabsTrigger>
            <TabsTrigger value="expert_qa" className="dark:text-white dark:data-[state=active]:bg-green-700">
              Expert Q&A
            </TabsTrigger>
            <TabsTrigger value="user_story" className="dark:text-white dark:data-[state=active]:bg-green-700">
              User Stories
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} onReply={handleReply} onReact={handleReact} />
            ))}
          </TabsContent>
          <TabsContent value="expert_qa">
            {filteredPosts
              .filter((post) => post.category === "expert_qa")
              .map((post) => (
                <PostCard key={post.id} post={post} onReply={handleReply} onReact={handleReact} />
              ))}
          </TabsContent>
          <TabsContent value="user_story">
            {filteredPosts
              .filter((post) => post.category === "user_story")
              .map((post) => (
                <PostCard key={post.id} post={post} onReply={handleReply} onReact={handleReact} />
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

