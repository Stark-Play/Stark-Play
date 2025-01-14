"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Star, Award, Crown, Medal, ThumbsUp } from "lucide-react";
import { cn } from "~~/lib/utils";

interface AwardCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  recipients: Array<{
    name: string;
    game: string;
    date: string;
  }>;
}

const awards: AwardCard[] = [
  {
    title: "Game of the Year",
    description: "The most outstanding game that pushed boundaries and captivated players",
    icon: <Trophy className="w-8 h-8" />,
    color: "from-yellow-400 to-amber-600",
    recipients: [
      {
        name: "Crypto Legends",
        game: "Epic Quest",
        date: "2024",
      },
      {
        name: "StarkWorld",
        game: "Virtual Reality",
        date: "2023",
      },
    ],
  },
  {
    title: "Innovation Excellence",
    description: "Games that introduced groundbreaking mechanics or technology",
    icon: <Star className="w-8 h-8" />,
    color: "from-blue-400 to-indigo-600",
    recipients: [
      {
        name: "NFT Warriors",
        game: "Battle Arena",
        date: "2024",
      },
      {
        name: "Blockchain Heroes",
        game: "Crypto Quest",
        date: "2023",
      },
    ],
  },
  {
    title: "Community Choice",
    description: "Voted by the StarkPlay community as their favorite game",
    icon: <ThumbsUp className="w-8 h-8" />,
    color: "from-green-400 to-emerald-600",
    recipients: [
      {
        name: "Metaverse Explorers",
        game: "Open World",
        date: "2024",
      },
      {
        name: "Crypto Racers",
        game: "Speed Champions",
        date: "2023",
      },
    ],
  },
  {
    title: "Best Visual Design",
    description: "Excellence in artistic direction and visual presentation",
    icon: <Award className="w-8 h-8" />,
    color: "from-purple-400 to-violet-600",
    recipients: [
      {
        name: "Digital Dreams",
        game: "Art World",
        date: "2024",
      },
      {
        name: "Pixel Masters",
        game: "Visual Journey",
        date: "2023",
      },
    ],
  },
  {
    title: "Technical Achievement",
    description: "Outstanding technical implementation and performance",
    icon: <Medal className="w-8 h-8" />,
    color: "from-red-400 to-rose-600",
    recipients: [
      {
        name: "Tech Titans",
        game: "Code Warriors",
        date: "2024",
      },
      {
        name: "Blockchain Builders",
        game: "Smart Contract Wars",
        date: "2023",
      },
    ],
  },
  {
    title: "Rising Star",
    description: "Most promising new game or developer on the platform",
    icon: <Crown className="w-8 h-8" />,
    color: "from-cyan-400 to-teal-600",
    recipients: [
      {
        name: "New Horizons",
        game: "Future Quest",
        date: "2024",
      },
      {
        name: "Emerging Worlds",
        game: "Genesis",
        date: "2023",
      },
    ],
  },
];

const AwardCard = ({ award }: { award: AwardCard }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <div className={cn(
        "w-16 h-16 rounded-full flex items-center justify-center mb-4",
        "bg-gradient-to-br",
        award.color
      )}>
        {award.icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{award.title}</h3>
      <p className="text-gray-400 mb-4">{award.description}</p>
      <div className="space-y-3">
        {award.recipients.map((recipient, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-3">
            <div className="font-semibold text-white">{recipient.name}</div>
            <div className="text-sm text-gray-400">
              {recipient.game} • {recipient.date}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export const HallOfFame = () => {
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
              Hall of Fame
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl"
          >
            Celebrating excellence in StarkPlay gaming
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <AwardCard key={index} award={award} />
          ))}
        </div>
      </div>
    </div>
  );
};
