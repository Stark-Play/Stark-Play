'use client'

import { useState } from 'react'
import { Sword } from 'lucide-react'
import { Button } from "~~/components/ui/button"
import { Textarea } from "~~/components/ui/textarea"
import { Input } from "~~/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~~/components/ui/dialog"

interface ReviewFormProps {
  gameId: string
  gameName: string
}

export function ReviewForm({ gameId, gameName }: ReviewFormProps) {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [open, setOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    // Here you would typically send this to your API
    const reviewData = {
      gameId,
      rating,
      title: formData.get('title'),
      content: formData.get('content'),
      // Add any other fields you need
    }

    console.log('Review submitted:', reviewData)
    setOpen(false) // Close modal after submission
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full mb-6 h-12" variant="secondary">
          Write Your Review
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Write a Review for {gameName}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Rating Stars */}
          <div className="space-y-2">
            {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
            <label className="text-sm font-medium">Rating</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="text-2xl transition-colors"
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => setRating(star)}
                >
                  <Sword
                    className={`w-8 h-8 rotate-90 ${
                      star <= (hoveredRating || rating)
                        ? 'fill-yellow-400 text-black-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Review Title */}
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Review Title
            </label>
            <Input
              id="title"
              name="title"
              placeholder="Give your review a title"
              required
            />
          </div>

          {/* Review Content */}
          <div className="space-y-2">
            <label htmlFor="content" className="text-sm font-medium">
              Your Review
            </label>
            <Textarea
              id="content"
              name="content"
              placeholder="Write your review here..."
              rows={5}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Submit Review</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}