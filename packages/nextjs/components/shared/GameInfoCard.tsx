'use client'

import { Share2 } from 'lucide-react'
import { Button } from "~~/components/ui/button"
import { Badge } from "~~/components/ui/badge"
import { Card, CardContent } from "~~/components/ui/card"
import { Separator } from "~~/components/ui/separator"
import { useParams } from 'next/navigation'
import { getGameData } from "~~/lib/gameData"

export function GameInfoCard() {
  const params = useParams() as { slug: string }
  const game = getGameData(params?.slug)

  if (!game) return null

  return (
    <>
      {/* Write Review Button */}
      <Button className="w-full mb-6 h-12" variant="secondary">
        Write Your Review
      </Button>

      {/* Game Info Card */}
      <Card className="bg-gray-500/20 text-blue-500 hover:bg-gray-500/30">
        <CardContent className="p-6">
          <div className="text-sm text-gray-400 mb-6">
            {game.shortDescription}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {game.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-emerald-900 text-emerald-400 hover:bg-emerald-900"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Developer</span>
              <span>{game.developer}</span>
            </div>
            <Separator className="bg-gray-800" />
            <div className="flex justify-between">
              <span className="text-gray-400">Status</span>
              <span>{game.status}</span>
            </div>
            <Separator className="bg-gray-800" />
            <div className="flex justify-between">
              <span className="text-gray-400">Community</span>
              <span>{game.community}</span>
            </div>
            <Separator className="bg-gray-800" />
            <div className="flex justify-between">
              <span className="text-gray-400">Players</span>
              <span>{game.players}</span>
            </div>
            <Separator className="bg-gray-800" />
            <div className="flex justify-between">
              <span className="text-gray-400">Platforms</span>
              <div className="flex gap-2">
                {game.platforms.map((platform) => (
                  <span key={platform}>{platform === "PC" ? "🖥️" : "🎮"}</span>
                ))}
              </div>
            </div>
          </div>

          <Button variant="secondary" className="w-full mt-6" size="lg">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </CardContent>
      </Card>
    </>
  )
}

