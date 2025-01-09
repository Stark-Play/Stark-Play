import { MessageSquare, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "~~/components/ui/button";
import { GameInfoCard } from "~~/components/shared/GameInfoCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~~/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "~~/components/ui/avatar";
import { Card, CardContent } from "~~/components/ui/card";
import { getGameData } from "~~/lib/gameData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ReviewPage({ params }: PageProps) {

  const { slug } = await params;
  const game = getGameData(slug);
  
  if (!game) return null

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
      <div className="space-y-6">
        {game.reviews.map((review) => (
          <Card
            key={review.id}
            className="subcard-background transition-colors"
          >
            <CardContent className="p-6">
              <Accordion type="single" collapsible>
                <AccordionItem value={review.id} className="border-b-0">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>{review.author[0]}</AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white">
                            {review.author}
                          </span>
                          <span className="text-emerald-500 font-bold">
                            {review.rating}/10
                          </span>
                        </div>
                        <time className="text-sm text-gray-400">
                          {review.date}
                        </time>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-4 space-y-4">
                      <p className="text-gray-300">{review.content}</p>
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm">
                          <ThumbsUp className="w-4 h-4 mr-2" />
                          {review.helpful}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <ThumbsDown className="w-4 h-4 mr-2" />
                          {review.notHelpful}
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
