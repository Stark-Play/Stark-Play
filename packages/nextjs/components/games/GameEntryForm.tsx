"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~~/components/ui/card";
import { Button } from "~~/components/ui/button";
import { Input } from "~~/components/ui/input";
import { Textarea } from "~~/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~~/components/ui/select";
import { Label } from "~~/components/ui/label";

interface GameFormData {
  title: string;
  introduction: string;
  overview: string;
  gameLore: string;
  genre: string;
  platforms: string[];
  status: string;
  team: string;
  imageUrl: string;
  images: FileList | null;
  contractAddress?: string;
  websiteUrl?: string;
  twitterUrl?: string;
  discordUrl?: string;
  telegramUrl?: string;
}

export function GameEntryForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<GameFormData>({
    title: "",
    introduction: "",
    overview: "",

    gameLore: "",
    genre: "",
    platforms: [],
    status: "",
    team: "",
    imageUrl: "",
    images: null,
    contractAddress: "",
    websiteUrl: "",
    twitterUrl: "",
    discordUrl: "",
    telegramUrl: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Here you would implement your API call to save the game
      // For example:
      // const formDataToSend = new FormData();
      // Object.entries(formData).forEach(([key, value]) => {
      //   if (key === 'images' && formData.images) {
      //     Array.from(formData.images).forEach((file) => {
      //       formDataToSend.append('images', file);
      //     });
      //   } else {
      //     formDataToSend.append(key, value);
      //   }
      // });
      // await saveGame(formDataToSend);
      router.push("/games");
    } catch (error) {
      console.error("Error saving game:", error);
    }
  };

  const handleInputChange = (
    field: keyof GameFormData,
    value: string | FileList | null,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePlatformsChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(value)
        ? prev.platforms.filter((p) => p !== value)
        : [...prev.platforms, value],
    }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Add New Game</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Game Title</Label>
            <Input
              id="title"
              placeholder="Enter game title"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="introduction">Introduction</Label>
            <Textarea
              id="introduction"
              placeholder="Brief introduction of the game"
              value={formData.introduction}
              onChange={(e) =>
                handleInputChange("introduction", e.target.value)
              }
              required
              className="min-h-20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="overview">Overview</Label>
            <Textarea
              id="overview"
              placeholder="Game overview"
              value={formData.overview}
              onChange={(e) => handleInputChange("overview", e.target.value)}
              required
              className="min-h-32"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="gameLore">Game Lore</Label>
            <Textarea
              id="gameLore"
              placeholder="Game story and lore"
              value={formData.gameLore}
              onChange={(e) => handleInputChange("gameLore", e.target.value)}
              required
              className="min-h-32"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="genre">Genre</Label>
            <Select
              value={formData.genre}
              onValueChange={(value) => handleInputChange("genre", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select genre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="action">Action</SelectItem>
                <SelectItem value="adventure">Adventure</SelectItem>
                <SelectItem value="rpg">RPG</SelectItem>
                <SelectItem value="strategy">Strategy</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="simulation">Simulation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Platforms</Label>
            <div className="flex flex-wrap gap-2">
              {["PC", "Mobile", "Browser", "Console"].map((platform) => (
                <Button
                  key={platform}
                  type="button"
                  variant={
                    formData.platforms.includes(platform)
                      ? "default"
                      : "outline"
                  }
                  onClick={() => handlePlatformsChange(platform)}
                  className="mr-2"
                >
                  {platform}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select
              value={formData.status}
              onValueChange={(value) => handleInputChange("status", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="in_development">In Development</SelectItem>
                <SelectItem value="testing">Testing</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="team">Development Team</Label>
            <Select
              value={formData.team}
              onValueChange={(value) => handleInputChange("team", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select team" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="team1">Team Alpha</SelectItem>
                <SelectItem value="team2">Team Beta</SelectItem>
                <SelectItem value="team3">Team Gamma</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="imageUrl">Game Image URL</Label>
            <Input
              id="imageUrl"
              placeholder="Enter image URL"
              value={formData.imageUrl}
              onChange={(e) => handleInputChange("imageUrl", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="images">Upload Images</Label>
            <Input
              id="images"
              name="images"
              type="file"
              multiple
              onChange={(e) => handleInputChange("images", e.target.files)}
              className="cursor-pointer"
            />
            <p className="text-sm text-gray-500">
              You can upload multiple images
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contractAddress">Contract Address (Optional)</Label>
            <Input
              id="contractAddress"
              placeholder="Enter contract address"
              value={formData.contractAddress}
              onChange={(e) =>
                handleInputChange("contractAddress", e.target.value)
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="websiteUrl">Website URL (Optional)</Label>
            <Input
              id="websiteUrl"
              placeholder="Enter website URL"
              value={formData.websiteUrl}
              onChange={(e) => handleInputChange("websiteUrl", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="twitterUrl">Twitter URL (Optional)</Label>
            <Input
              id="twitterUrl"
              placeholder="Enter Twitter URL"
              value={formData.twitterUrl}
              onChange={(e) => handleInputChange("twitterUrl", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="discordUrl">Discord URL (Optional)</Label>
            <Input
              id="discordUrl"
              placeholder="Enter Discord URL"
              value={formData.discordUrl}
              onChange={(e) => handleInputChange("discordUrl", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telegramUrl">Telegram URL (Optional)</Label>
            <Input
              id="telegramUrl"
              placeholder="Enter Telegram URL"
              value={formData.telegramUrl}
              onChange={(e) => handleInputChange("telegramUrl", e.target.value)}
            />
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              variant="outline"
              type="button"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button type="submit">Save Game</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
