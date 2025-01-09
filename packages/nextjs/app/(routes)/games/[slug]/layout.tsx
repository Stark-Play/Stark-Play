import Link from "next/link"
import Image from "next/image"
import { Star, Share2, MessageSquare, ArrowRight } from 'lucide-react'
import { Button } from "~~/components/ui/button"
import { Badge } from "~~/components/ui/badge"
import { getGameData } from "~~/lib/gameData"

interface LayoutProps {
  children: React.ReactNode
  params: { slug: string }
}

export default async function GameLayout({ children, params }: LayoutProps) {
  const slug = await params?.slug;
  const game = await getGameData(slug);

  if (!game) return null;

  return (
    <div className="min-h-screen text-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[100px] mb-4">
       
      </div>
      {/* Breadcrumb */}
      <div className="p-4 text-sm text-gray-400">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link href="/games" className="hover:text-white">
            GAMES
          </Link>
          <ArrowRight className="w-4 h-4" />
          <Link href={`/games/${game.id}`} className="hover:text-white">
            {game.title.toUpperCase()}
          </Link>
          <ArrowRight className="w-4 h-4" />
          <span className="text-white">OVERVIEW</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 pb-8">
        {/* Title Section */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            {/* Game Thumbnail */}
            <div className="relative w-24 h-24 rounded-lg overflow-hidden">
              <Image
                src={game.thumbnail}
                alt={`${game.title} thumbnail`}
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-7xl font-bold">{game.title}</h1>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="w-10 h-10 rounded-lg bg-emerald-500 text-white text-xl font-bold">{game.rating}</Badge>
            <Button variant="ghost" size="icon" className="rounded-full bg-white">
              <Star className="w-6 h-6 text-black" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 mb-8 text-sm overflow-x-auto pb-2">
          <Link 
            href={`/games/${game.id}`} 
            className="text-white font-medium whitespace-nowrap"
          >
            Overview
          </Link>
          <Link 
            href={`/games/${game.id}/review`} 
            className="text-gray-400 hover:text-white whitespace-nowrap"
          >
            Review
          </Link>
          <Link 
            href={`/games/${game.id}/guides`} 
            className="text-gray-400 hover:text-white whitespace-nowrap"
          >
            Guides
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white whitespace-nowrap">
            News
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white whitespace-nowrap">
            Analytics
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white whitespace-nowrap">
            Live Streams
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white whitespace-nowrap">
            Community
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white whitespace-nowrap">
            User Reviews ({game.reviews.length})
          </Link>
        </nav>

        {children}
      </main>
    </div>
  )
}

