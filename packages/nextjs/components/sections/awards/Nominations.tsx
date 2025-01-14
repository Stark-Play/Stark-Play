"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, Send } from "lucide-react";
import { Button } from "~~/components/ui/button";
import { cn } from "~~/lib/utils";

const categories = [
  {
    id: "game-of-the-year",
    title: "Game of the Year",
    description: "The most outstanding game that pushed boundaries and captivated players",
  },
  {
    id: "innovation",
    title: "Innovation Excellence",
    description: "Games that introduced groundbreaking mechanics or technology",
  },
  {
    id: "visual-design",
    title: "Best Visual Design",
    description: "Excellence in artistic direction and visual presentation",
  },
  {
    id: "technical",
    title: "Technical Achievement",
    description: "Outstanding technical implementation and performance",
  },
  {
    id: "community",
    title: "Community Choice",
    description: "Games that have made the biggest impact on the community",
  },
];

export const Nominations = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [nomination, setNomination] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the nomination submission
    console.log("Nomination submitted:", { category: selectedCategory, nomination });
    setNomination("");
  };

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Award Nominations
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl"
          >
            Nominate your favorite games for StarkPlay awards
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Categories */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-xl font-semibold text-white mb-6">Categories</h2>
            {categories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={cn(
                  "p-4 rounded-lg cursor-pointer transition-all",
                  selectedCategory === category.id
                    ? "bg-blue-600/20 border border-blue-500"
                    : "bg-gray-800 hover:bg-gray-700"
                )}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="flex items-center space-x-3">
                  <Award className={cn(
                    "w-5 h-5",
                    selectedCategory === category.id ? "text-blue-400" : "text-gray-400"
                  )} />
                  <h3 className="font-medium text-white">{category.title}</h3>
                </div>
                <p className="mt-2 text-sm text-gray-400">{category.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Nomination Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-900 rounded-xl p-6 shadow-xl"
            >
              <h2 className="text-xl font-semibold text-white mb-6">Submit Your Nomination</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="nomination" 
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Game Name
                  </label>
                  <input
                    type="text"
                    id="nomination"
                    value={nomination}
                    onChange={(e) => setNomination(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Enter the game name"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className={cn(
                    "w-full py-6 text-lg rounded-xl",
                    "bg-gradient-to-r from-blue-500 to-cyan-700",
                    "hover:from-blue-600 hover:to-cyan-700",
                    "text-white font-semibold",
                    "transform transition-all hover:scale-105",
                    "shadow-lg hover:shadow-xl",
                  )}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Nomination
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
