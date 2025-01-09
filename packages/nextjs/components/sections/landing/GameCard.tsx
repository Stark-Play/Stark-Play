import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Twitter, CircleAlert, Send, Globe } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~~/components/ui/card";
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
  developer?: string;
  description: string;
  banner: string;
  thumbnail?: string;
  rating?: number;
  tags?: string[];
  players?: string | number;
  community?: string | number;
  status?: "active" | "upcoming" | "completed";
  socialLinks?: {
    twitter?: string;
    discord?: string;
    telegram?: string;
    website?: string;
  };
  className?: string;
  href?: string;
}

const STATUS_STYLES = {
  active: "bg-green-500 text-white",
  upcoming: "bg-blue-500 text-white",
  completed: "bg-orange-500 text-white",
};

export const GameCard = ({
  id,
  title,
  developer,
  description,
  banner,
  thumbnail,
  rating,
  tags = [],
  players,
  community,
  status,
  socialLinks,
  className = "",
  href,
}: GameCardProps) => {
  return (
    <Card
      className={`card-background transition-all duration-300 h-full ${className}`}
    >
      <CardHeader className="space-y-4">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src={banner}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          {status && (
            <HoverCard>
              <HoverCardTrigger asChild>
                <Badge
                  className={`absolute top-3 left-3 ${STATUS_STYLES[status]}`}
                >
                  {status === "active"
                    ? "Active"
                    : status.charAt(0).toUpperCase() + status.slice(1)}
                </Badge>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">
                    Game Status: {status}
                  </h4>
                  <p className="text-sm">
                    {status === "active"
                      ? "This game is currently in funding phase."
                      : status === "upcoming"
                        ? "Coming soon! Stay tuned for updates."
                        : "Funding period has ended."}
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          )}
        </div>

        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            {thumbnail && (
              <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                <Image
                  src={thumbnail}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <CardTitle className="text-xl font-bold text-white">
                {title}
              </CardTitle>
              {developer && (
                <p className="text-sm text-gray-400">{developer}</p>
              )}
            </div>
          </div>
          {rating && (
            <Badge className="h-8 w-8 rounded-lg bg-emerald-500 text-white text-lg font-bold">
              {rating}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-gray-300 text-sm line-clamp-2">{description}</p>

        {(players || community) && (
          <div className="space-y-2">
            {players && (
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Players</span>
                <span className="text-white font-medium">{players}</span>
              </div>
            )}
            {community && (
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Community</span>
                <span className="text-white font-medium">{community}</span>
              </div>
            )}
          </div>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-emerald-900 text-emerald-400"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {socialLinks && (
          <div className="flex items-center gap-2 pt-4">
            {socialLinks.twitter && (
              <Button
                variant="outline"
                size="icon"
                className="bg-white hover:bg-white/20"
                asChild
              >
                <Link href={socialLinks.twitter} target="_blank">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
            )}
            {socialLinks.discord && (
              <Button
                variant="outline"
                size="icon"
                className="bg-white hover:bg-white/20"
                asChild
              >
                <Link href={socialLinks.discord} target="_blank">
                  <CircleAlert className="h-4 w-4" />
                </Link>
              </Button>
            )}
            {socialLinks.telegram && (
              <Button
                variant="outline"
                size="icon"
                className="bg-white hover:bg-white/20"
                asChild
              >
                <Link href={socialLinks.telegram} target="_blank">
                  <Send className="h-4 w-4" />
                </Link>
              </Button>
            )}
            {socialLinks.website && (
              <Button
                variant="outline"
                size="icon"
                className="bg-white hover:bg-white/20 ml-auto"
                asChild
              >
                <Link href={socialLinks.website} target="_blank">
                  <Globe className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
