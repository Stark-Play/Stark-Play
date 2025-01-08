'use client'

import { Button } from "~~/components/ui/button"
import { Card, CardContent, CardHeader } from "~~/components/ui/card"
import { Input } from "~~/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~~/components/ui/tabs"
import { PlayCircle, Info, Heart, Facebook, Linkedin, Instagram } from 'lucide-react'
import Image from "next/image"

export default function home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="text-sm text-white mb-2">INVERTIR EN DOWNLAND</div>
        <h1 className="text-3xl font-bold text-gray-400 md:text-4xl mb-6">
          Land matching marketplace for regenerative farmers & ranchers
        </h1>
      </div>

      <div>
        {/* Main Content */}
        <div className="space-y-6">
          {/* Hero Image Section */}
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src="/image/demo.webp"
              alt="White cow in field"
              className="object-cover"
              fill
            />
          </div>

          {/* Company Info */}
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">godownland.com</span>
              <span className="text-muted-foreground">Austin, TX</span>
            </div>
            <div className="flex gap-4">
              <Linkedin className="h-5 w-5 text-muted-foreground" />
              <Facebook className="h-5 w-5 text-muted-foreground" />
              <Instagram className="h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start gap-4 rounded-none border-b bg-transparent p-0">
              <TabsTrigger
                value="description"
              >
                DESCRIPCIÓN GENERAL
              </TabsTrigger>
              <TabsTrigger
                value="details"
              >
                DETALLES
              </TabsTrigger>
              <TabsTrigger
                value="updates"
              >
                ACTUALIZACIONES
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

