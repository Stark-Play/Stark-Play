"use client";

import Image from "next/image";
import Link from "next/link";
import { Twitter, CircleAlert, Send, Globe } from "lucide-react";
import { cn } from "~~/lib/utils";
import { Card, CardContent, CardHeader } from "~~/components/ui/card";
import { Badge } from "~~/components/ui/badge";
import { Button } from "~~/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~~/components/ui/hover-card";

interface GameCardProps {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  players: string | number;
  community: string | number;
  status?: string
  socialLinks?: {
    twitter?: string;
    discord?: string;
    telegram?: string;
    website?: string;
  };
  className?: string;
}

const STATUS_STYLES = {
  active: "bg-green-500/20 text-green-500 hover:bg-green-500/30",
  upcoming: "bg-blue-500/20 text-blue-500 hover:bg-blue-500/30",
  ended: "bg-gray-500/20 text-gray-500 hover:bg-gray-500/30",
};

export const GameCard = ({
  title,
  subtitle,
  image,
  players,
  community,
  status = "active",
  socialLinks,
  className,
}: GameCardProps) => {
  return (
    <Card className={cn(
      "flex flex-col w-full h-[520px] border-none bg-blue-200/10",
      "backdrop-blur-sm transition-all duration-300",
      "hover:border-white/20 hover:shadow-lg hover:-translate-y-1",
      className
    )}>
      <div className="relative h-[200px] overflow-hidden rounded-t-lg">
        <Image 
          src={image} 
          alt={title} 
          width={400} 
          height={320}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {status && (
          <HoverCard>
            <HoverCardTrigger asChild>
              <Badge 
                variant="outline" 
                className={cn(
                  "absolute top-3 left-3 bg-green-500 border-none text-white font-medium",
                 {status}
                )}
              >
                {status === "active" ? "Presale Active" : status.charAt(0).toUpperCase() + status.slice(1)}
              </Badge>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Game Status: {status}</h4>
                <p className="text-sm">
                  {status === "active" ? "This game is currently in presale phase." :
                   status === "upcoming" ? "Coming soon! Stay tuned for updates." :
                   "Presale period has ended."}
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        )}
      </div>

      <CardHeader>
        <h3 className="text-xl font-bold text-white line-clamp-1">{title}</h3>
        <p className="text-sm text-gray-400 line-clamp-2">{subtitle}</p>
      </CardHeader>

      <CardContent className="flex flex-col flex-grow">
        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Players</span>
            <span className="text-white font-medium">{players}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Community</span>
            <span className="text-white font-medium">{community}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-auto">
          {socialLinks?.twitter && (
            <Button 
              variant="outline" 
              size="icon"
              className="bg-white border-white/10 hover:bg-teal-500"
              asChild
            >
              <Link href={socialLinks.twitter} target="_blank">
                <Twitter className="h-4 w-4" />
              </Link>
            </Button>
          )}
          {socialLinks?.discord && (
            <Button 
              variant="outline" 
              size="icon"
              className="bg-white border-white/10 hover:bg-teal-500"
              asChild
            >
              <Link href={socialLinks.discord} target="_blank">
                <CircleAlert className="h-4 w-4" />
              </Link>
            </Button>
          )}
          {socialLinks?.telegram && (
            <Button 
              variant="outline" 
              size="icon"
              className="bg-white border-white/10 hover:bg-teal-500"
              asChild
            >
              <Link href={socialLinks.telegram} target="_blank">
                <Send className="h-4 w-4" />
              </Link>
            </Button>
          )}
          {socialLinks?.website && (
            <Button 
              variant="outline" 
              size="icon"
              className="bg-white border-white/10 hover:bg-teal-500 ml-auto"
              asChild
            >
              <Link href={socialLinks.website} target="_blank">
                <Globe className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};