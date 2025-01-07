'use client'

import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@radix-ui/themes";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useCallback, useEffect, useState } from "react";
import { GameCard } from "./GameCard";

interface GameData {
  title: string;
  subtitle: string;
  image: string;
  players: string | number;
  community: string | number;
  status?: "active" | "upcoming" | "ended";
}

interface GameCarouselProps {
  games: GameData[];
}

export const GameCarousel = ({ games }: GameCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Featured Games</h2>
        <div className="flex gap-2">
          <Button
            variant="soft"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className={`p-2 ${!prevBtnEnabled ? "opacity-50 cursor-not-allowed" : "hover:bg-white/20"}`}
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </Button>
          <Button
            variant="soft"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className={`p-2 ${!nextBtnEnabled ? "opacity-50 cursor-not-allowed" : "hover:bg-white/20"}`}
          >
            <ChevronRightIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {games.map((game, index) => (
            <div
              className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
            >
              <GameCard {...game} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
