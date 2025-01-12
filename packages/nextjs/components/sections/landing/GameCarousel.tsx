"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "~~/lib/utils";
import { Button } from "~~/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~~/components/ui/carousel";
import { GameCard } from "./GameCard";
import type { CarouselApi } from "~~/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

interface Game {
  id: string;
  title: string;
  rating: number;
  thumbnail: string;
  banner: string;
  shortDescription: string;
  description: string;
  developer: string;
  status: "active" | "upcoming" | "ended";
  platforms: string[];
  tags: string[];
  players: string;
  community: string;
  socialLinks?: {
    twitter?: string;
    discord?: string;
    telegram?: string;
    website?: string;
  };
  reviews: Array<{
    id: string;
    author: string;
    rating: number;
    date: string;
    content: string;
    helpful: number;
    notHelpful: number;
  }>;
  guides: Array<{
    id: string;
    title: string;
    author: string;
    date: string;
    difficulty: string;
    category: string;
    excerpt: string;
  }>;
}

interface GameCarouselProps {
  games: Game[];
  className?: string;
}

export const GameCarousel = ({ games, className }: GameCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className={cn("w-full max-w-7xl mx-auto px-4 py-8", className)}>
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-white">
            Explore latest Games
          </h2>
          <p className="text-sm text-gray-400">
            Discover our curated selection of blockchain games
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            {current} / {count}
          </span>
        </div>
      </div>

      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {games.map((game) => (
            <CarouselItem
              key={game.id}
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <Link href={`/games/${game.id}`}>
                <GameCard
                  id={game.id}
                  title={game.title}
                  description={game.shortDescription}
                  banner={game.banner}
                  thumbnail={game.thumbnail}
                  developer={game.developer}
                  rating={game.rating}
                  tags={game.tags}
                  players={game.players}
                  community={game.community}
                  status={game.status === "ended" ? "completed" : game.status}
                  socialLinks={game.socialLinks}
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
