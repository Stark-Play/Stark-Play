"use client";

import { Card, CardContent } from "~~/components/ui/card";
import { cn } from "~~/lib/utils";
import { GamepadIcon, Users, Lightbulb } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradientBorder: string;
  gradientHover: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
  gradientBorder,
  gradientHover,
}: FeatureCardProps) => {
  return (
    <Card
      className={cn(
        "relative group bg-purple-950/30 border-0 overflow-hidden",
        "before:absolute before:inset-0 before:p-[1px]",
        "before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        "before:mask-gradient-border",
      )}
    >
      <div
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          "bg-gradient-to-r pointer-events-none",
          gradientHover,
        )}
      />

      <CardContent className="relative p-6 space-y-4">
        <div className="flex items-center space-x-4">
          <div
            className={cn(
              "p-3 rounded-xl",
              "bg-gradient-to-br",
              gradientBorder,
            )}
          >
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export const RewardSection = () => {
  const features = [
    {
      title: "Curated Games",
      description:
        "Discover and explore handpicked Starknet games with in-depth reviews, ratings, and personalized recommendations tailored for you.",
      icon: <GamepadIcon className="w-6 h-6 text-white" />,
      gradientBorder: "from-cyan-400 to-emerald-400",
      gradientHover: "from-cyan-400/10 to-emerald-400/40",
    },
    {
      title: "Community Rewards",
      description:
        "Earn tokens, NFTs, and reputation for playing, reviewing, voting, and contributing.",
      icon: <Users className="w-6 h-6 text-white" />,
      gradientBorder: "from-violet-400 to-purple-400",
      gradientHover: "from-violet-400/10 to-purple-400/40",
    },
    {
      title: "Support Innovation",
      description:
        "Help developers crowdfund and grow their games with your engagement.",
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      gradientBorder: "from-pink-400 to-rose-400",
      gradientHover: "from-pink-400/10 to-rose-400/40",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
};
