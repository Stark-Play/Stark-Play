"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~~/components/ui/card";
import { Button } from "~~/components/ui/button";
import { Shield, Users, Globe } from "lucide-react";
import { cn } from "~~/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  className?: string;
  variant?: "default" | "secure" | "social" | "web3";
}

const FeatureCard = ({ title, description, features, icon, className, variant = "default" }: FeatureCardProps) => {

  return (
    <Card className={cn(
      "transition-all duration-300 border bg-blue-200/10 border-gray-100/15 hover:border-gray-300 hover:shadow-lg",
      className
    )}>
      <CardHeader className="space-y-4 text-center">
        <div className="w-12 h-12 mx-auto flex items-center justify-center">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-gray-400 mb-6">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm text-gray-200 text-left">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          variant="ghost" 
          className="w-full text-white hover:bg-background/5 hover:text-muted"
        >
          Learn More
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Button>
      </CardFooter>
    </Card>
  );
};

export const FeaturesSection = () => {
  const features = [
    {
      title: "For Gamers",
      description: "Explore a library of Starknet-based games, Engage in quests, write reviews, and participate in community votes to earn tokens, NFTs, and build your reputation.",
      features: ["Discover New Games", "Earn Rewards", "Connect with the Community"],
      icon: <Shield className="w-8 h-8 text-green-500" />,
      variant: "secure" as const,
    },
    {
      title: "Powered by Blockchain",
      description: "Every action on StarkPlay Hub is secured by Starknet’s zk-rollup technology, ensuring fast and trustworthy interactions.",
      features: ["Transparent player and game data", "Immutable records for reviews, votes, and rewards", "Instant, low-cost transactions for seamless participation"],
      icon: <Users className="w-8 h-8 text-blue-500" />,
      variant: "social" as const,
    },
    {
      title: "For Game Developers",
      description: "List your Starknet-based game to gain visibility. Receive valuable insights from player reviews and ratings to refine your game",
      features: ["Showcase Your Game", "Community Feedback", "Crowdfunding Opportunities"],
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      variant: "web3" as const,
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-white">
          Empowering Gamers and Game Developers Alike{" "}
          </h2>
          <span className="text-cyan-500 text-2xl font-bold">Powered by Starknet</span>
          <p className="text-gray-300 max-w-3xl mx-auto">
          At StarkPlay Hub, we bridge the gap between players seeking immersive experiences and developers aiming to showcase their creations.
          Our platform is designed to cater to the needs of both communities, fostering a thriving ecosystem where everyone benefits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};