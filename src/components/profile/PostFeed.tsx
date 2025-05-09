
import React from "react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getInitials } from "../../utils/stringUtils";
import { Heart, Share, MessageCircle } from "lucide-react";

interface Post {
  author: string;
  avatar: string;
  content: string;
  stats: {
    likes: number;
    shares: number;
  };
}

interface PostFeedProps {
  posts: Post[];
}

export const PostFeed = ({ posts }: PostFeedProps) => {
  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <Card key={index}>
          <CardHeader className="flex-row space-y-0 gap-4">
            <Avatar>
              <AvatarImage src={post.avatar} alt={post.author} />
              <AvatarFallback>{getInitials(post.author)}</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold">{post.author}</h4>
              <p className="text-xs text-muted-foreground">2 hours ago</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{post.content}</p>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <Heart size={16} />
              <span>{post.stats.likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <MessageCircle size={16} />
              <span>Comment</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <Share size={16} />
              <span>{post.stats.shares}</span>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
