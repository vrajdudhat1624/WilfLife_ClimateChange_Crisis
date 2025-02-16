export type User = {
    id: string
    name: string
    role: "user" | "expert" | "moderator"
    avatar: string
    expertise?: string
  }
  
  export type Reaction = {
    type: "like" | "helpful" | "insightful"
    count: number
    userReacted: boolean
  }
  
  export type Reply = {
    id: string
    content: string
    author: User
    createdAt: string
    reactions: Reaction[]
  }
  
  export type Post = {
    id: string
    title: string
    content: string
    author: User
    category: "general" | "expert_qa" | "user_story"
    isPinned: boolean
    isTrending: boolean
    createdAt: string
    reactions: Reaction[]
    replies: Reply[]
    tags: string[]
  }
  
  
  