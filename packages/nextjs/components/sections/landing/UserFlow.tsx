"use client";

import React from "react";
import { Button } from "~~/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Users, Rocket } from "lucide-react";
import Link from "next/link";

export const UserFlow = () => {
  const [activeView, setActiveView] = React.useState<"game" | "gamer">("game");

  const gameSteps = [
    {
      number: 1,
      title: "Game Visibility",
      description:
        "Showcase your game to a passionate and growing Starknet community.",
      active: true,
      icon: <Rocket className="w-5 h-5" />,
    },
    {
      number: 2,
      title: "Community Insights",
      description:
        "Leverage real-time reviews, ratings, and user feedback to refine your game and boost player satisfaction.",
      active: false,
      icon: <ChevronRight className="w-5 h-5" />,
    },
    {
      number: 3,
      title: "Reputation Building",
      description:
        "Utilize StarkPlay Hub’s features like community votes, tutorials, and achievements to establish your game as a trusted and popular title.",
      active: false,
      icon: <ChevronRight className="w-5 h-5" />,
    },
    {
      number: 4,
      title: "Crowdfunding",
      description:
        "Access crowdfunding tools like GoStarkMe integration to fund game updates or new features while gaining community support.",
      active: false,
      icon: <ChevronRight className="w-5 h-5" />,
    },
    {
      number: 5,
      title: "Growth and Promotion",
      description:
        "Increase player acquisition, retention, and in-game engagement while leveraging the platform to promote your game effectively.",
      active: false,
      icon: <ChevronRight className="w-5 h-5" />,
    },
  ];

  const gamerSteps = [
    {
      number: 1,
      title: "Game Discovery",
      description:
        "Explore a curated library of Starknet-based games with detailed profiles, reviews, and recommendations tailored to your interests.",
      active: true,
      icon: <Users className="w-5 h-5" />,
    },
    {
      number: 2,
      title: "Community Engagement",
      description:
        "Participate in community-driven votes, reviews, and quests to earn tokens, NFTs, and reputation rewards.",
      active: false,
      icon: <ChevronRight className="w-5 h-5" />,
    },
    {
      number: 3,
      title: "Tutorials and Guides",
      description:
        "Access high-quality tutorials and guides created by the community to enhance your gameplay and strategy..",
      active: false,
      icon: <ChevronRight className="w-5 h-5" />,
    },
    {
      number: 4,
      title: "Achievements and Rewards",
      description:
        "Complete quests, earn achievements, and unlock exclusive rewards for active participation.",
      active: false,
      icon: <ChevronRight className="w-5 h-5" />,
    },
    {
      number: 5,
      title: "Social Connections",
      description:
        "Build your gaming network by following players, creating favorite lists, and sharing your journey.",
      active: false,
      icon: <ChevronRight className="w-5 h-5" />,
    },
  ];

  const steps = activeView === "game" ? gameSteps : gamerSteps;

  return (
    <section className="gradient-bg-blue-purple relative overflow-hidden px-4 py-14">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Elevate Your Gaming Experience
            </h2>
            <h2 className="gradient-text text-4xl font-bold">
              with StarkPlay Hub
            </h2>

            <p className="text-gray-200 max-w-3xl mx-auto text-lg">
              From discovery to rewards, follow a seamless and rewarding path
              powered by Starknet’s blockchain. Every step is designed to
              maximize your gaming and development potential.
            </p>
          </motion.div>

          {/* Toggle Buttons */}
          <motion.div
            className="mt-12 mb-16 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-flex rounded-full p-1 bg-white shadow-sm border border-gray-100">
              <Button
                variant={activeView === "game" ? "default" : "ghost"}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${
                  activeView === "game"
                    ? "gradient-btn text-white"
                    : "text-gray-600 hover:text-cyan-400"
                }`}
                onClick={() => setActiveView("game")}
              >
                Game Path
              </Button>
              <Button
                variant={activeView === "gamer" ? "default" : "ghost"}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${
                  activeView === "gamer"
                    ? "gradient-btn text-white"
                    : "text-gray-600 hover:text-cyan-400"
                }`}
                onClick={() => setActiveView("gamer")}
              >
                Gamer Path
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 md:gap-4 md:grid-cols-5"
          >
            {steps.map((step, index) => (
              <motion.div
                key={`step-${
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  index
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-purple-600 font-semibold text-sm">
                      {step.number}
                    </div>
                    <div className="ml-3 font-semibold text-gray-900">
                      {step.title}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Action Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8"
          >
            <Link href={activeView === "game" ? "/games/new" : "/games"}>
              {activeView === "game" ? "Register Your Game" : "Explore Games"}
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
