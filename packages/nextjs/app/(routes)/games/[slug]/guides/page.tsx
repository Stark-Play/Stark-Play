import { MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "~~/components/ui/button";
import { GameInfoCard } from "~~/components/shared/GameInfoCard";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~~/components/ui/card";
import { Badge } from "~~/components/ui/badge";
import { getGameData } from "~~/lib/gameData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function GuidesPage({ params }: PageProps) {
  const { slug } = await params;
  const game = getGameData(slug);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
      <div className="space-y-6">
        {game?.guides.map((guide) => (
          <Card key={guide.id} className="subcard-background">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-xl text-white">
                    {guide.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>{guide.author}</span>
                    <span>•</span>
                    <time>{guide.date}</time>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">{guide.excerpt}</p>
              <div className="flex gap-2">
                <Badge
                  variant="secondary"
                  className="bg-emerald-900 text-emerald-400"
                >
                  {guide.difficulty}
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-emerald-900 text-emerald-400"
                >
                  {guide.category}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
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
