"use client"

import { useState } from "react"
// import { format, formatDistance, subDays } from 'date-fns'
import { MessageCircle, ThumbsUp, Award, Bookmark, Share2, MoreHorizontal } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import type { Post } from "../types"

interface PostCardProps {
  post: Post
  onReply: (postId: string) => void
  onReact: (postId: string, reactionType: string) => void
}

export function PostCard({ post, onReply, onReact }: PostCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="mb-4 hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-start space-x-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src={post.author.avatar} alt={post.author.name} />
          <AvatarFallback>{post.author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold">{post.author.name}</h3>
            {post.author.role === "expert" && (
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <Award className="h-3 w-3 mr-1" />
                Expert
              </Badge>
            )}
            <span className="text-sm text-muted-foreground">
              {/* {formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })
} */}3 days ago
            </span>
          </div>
          <h4 className="text-lg font-semibold mt-2">{post.title}</h4>
        </div>
        {post.isPinned && (
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            Pinned
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        <p className={`text-gray-600 dark:text-gray-300 ${!isExpanded && "line-clamp-3"}`}>{post.content}</p>
        {post.content.length > 200 && (
          <Button variant="link" className="p-0 h-auto font-semibold" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Show less" : "Read more"}
          </Button>
        )}
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-sm">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-600 hover:text-blue-600"
            onClick={() => onReact(post.id, "like")}
          >
            <ThumbsUp className={`h-4 w-4 mr-1 ${post.reactions[0].userReacted ? "fill-current text-blue-600" : ""}`} />
            {post.reactions[0].count}
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600" onClick={() => onReply(post.id)}>
            <MessageCircle className="h-4 w-4 mr-1" />
            {post.replies.length}
          </Button>
        </div>
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm">
            <Bookmark className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

