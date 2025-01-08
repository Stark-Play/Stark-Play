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
import { type CarouselApi } from "~~/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


interface GameData {
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
}

interface GameCarouselProps {
  games: GameData[];
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
          <h2 className="text-2xl font-bold text-white">Explore latest Games</h2>
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
              <GameCard {...game} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};