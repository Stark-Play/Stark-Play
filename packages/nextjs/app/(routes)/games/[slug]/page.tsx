import Image from "next/image";
import { MessageSquare } from "lucide-react";
import { Button } from "~~/components/ui/button";
import { GameInfoCard } from "~~/components/shared/GameInfoCard";
import { getGameData } from "~~/lib/gameData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function OverviewPage({ params }: PageProps) {
  const { slug } = await params;
  const game = getGameData(slug);

  if (!game) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
      <div>
        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            {game.description}
          </p>

          {/* Game Image */}
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={game.banner}
              alt={`${game.title} gameplay screenshot`}
              fill
              className="object-cover"
            />
          </div>
        </section>
      </div>

      <aside>
        <GameInfoCard />

        {/* Feedback Button */}
        <Button variant="ghost" className="mt-4 w-full" size="sm">
          <MessageSquare className="w-4 h-4 mr-2" />
          Feedback
        </Button>
      </aside>
    </div>
  );
}
