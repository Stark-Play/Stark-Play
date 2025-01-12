"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~~/components/ui/card";
import { Button } from "~~/components/ui/button";
import { Input } from "~~/components/ui/input";
import { Textarea } from "~~/components/ui/textarea";
import { Label } from "~~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~~/components/ui/select";

interface TeamFormData {
  name: string;
  description: string;
  size: string;
  contactEmail: string;
  website?: string;
}

export function TeamEntryForm() {
  const [formData, setFormData] = useState<TeamFormData>({
    name: "",
    description: "",
    size: "",
    contactEmail: "",
    website: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement your form submission logic
    console.log("Form submitted:", formData);
  };

  const handleChange = (field: keyof TeamFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Team Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Team Name</Label>
            <Input
              id="name"
              placeholder="Enter team name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Tell us about your team"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="size">Team Size</Label>
            <Select
              value={formData.size}
              onValueChange={(value) => handleChange("size", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select team size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-5">1-5 members</SelectItem>
                <SelectItem value="6-10">6-10 members</SelectItem>
                <SelectItem value="11-20">11-20 members</SelectItem>
                <SelectItem value="20+">20+ members</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactEmail">Contact Email</Label>
            <Input
              id="contactEmail"
              type="email"
              placeholder="Enter contact email"
              value={formData.contactEmail}
              onChange={(e) => handleChange("contactEmail", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Website (Optional)</Label>
            <Input
              id="website"
              type="url"
              placeholder="Enter team website"
              value={formData.website}
              onChange={(e) => handleChange("website", e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full">
            Create Team
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
