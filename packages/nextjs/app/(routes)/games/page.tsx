import Link from "next/link";
import { games } from "~~/lib/gameData";
import { GameCard } from "~~/components/sections/landing/GameCard";

export default function GamesPage() {
  return (
    <div className="min-h-screen text-white">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Games</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <Link key={game.id} href={`/games/${game.id}`}>
              <GameCard
                key={game.id}
                {...game}
                status={
                  game.status as "active" | "upcoming" | "completed" | undefined
                }
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
