"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Calendar, Star } from "lucide-react";
import { cn } from "~~/lib/utils";

interface MonthlyAward {
  month: string;
  year: string;
  awards: {
    category: string;
    winner: string;
    game: string;
    icon: React.ReactNode;
    color: string;
  }[];
}

const monthlyAwards: MonthlyAward[] = [
  {
    month: "December",
    year: "2024",
    awards: [
      {
        category: "Game of the Month",
        winner: "Crypto Legends",
        game: "Epic Quest",
        icon: <Trophy className="w-6 h-6" />,
        color: "from-yellow-400 to-amber-600",
      },
      {
        category: "Rising Star",
        winner: "New Horizons",
        game: "Future Quest",
        icon: <Star className="w-6 h-6" />,
        color: "from-blue-400 to-indigo-600",
      },
    ],
  },
  {
    month: "November",
    year: "2024",
    awards: [
      {
        category: "Game of the Month",
        winner: "StarkWorld",
        game: "Virtual Reality",
        icon: <Trophy className="w-6 h-6" />,
        color: "from-yellow-400 to-amber-600",
      },
      {
        category: "Rising Star",
        winner: "Tech Titans",
        game: "Code Warriors",
        icon: <Star className="w-6 h-6" />,
        color: "from-blue-400 to-indigo-600",
      },
    ],
  },
];

const MonthCard = ({ award }: { award: MonthlyAward }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 rounded-xl p-6 shadow-xl"
    >
      <div className="flex items-center mb-6">
        <Calendar className="w-8 h-8 text-blue-400 mr-3" />
        <h3 className="text-2xl font-bold text-white">
          {award.month} {award.year}
        </h3>
      </div>
      <div className="space-y-6">
        {award.awards.map((item, index) => (
          <div key={index} className="space-y-3">
            <div className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center",
              "bg-gradient-to-br",
              item.color
            )}>
              {item.icon}
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-1">{item.category}</div>
              <div className="font-semibold text-white">{item.winner}</div>
              <div className="text-sm text-gray-400">{item.game}</div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export const MonthlyAwards = () => {
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
              Monthly Awards
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl"
          >
            Recognizing monthly achievements in StarkPlay gaming
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {monthlyAwards.map((award, index) => (
            <MonthCard key={index} award={award} />
          ))}
        </div>
      </div>
    </div>
  );
};
