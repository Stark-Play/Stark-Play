"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~~/components/ui/card";
import { cn } from "~~/lib/utils";

interface CardProps {
  id: string;
  borderColor: string;
  title: string;
  text: string;
  className?: string;
}

export const OnboardingCard = ({
  borderColor,
  title,
  text,
  className,
}: CardProps) => {
  return (
    <Card
      className={cn(
        "bg-purple-200/5 backdrop-blur-sm",
        "border-2 border-solid",
        borderColor, // Add the Tailwind border color class here
        "h-full min-h-[200px]",
        className,
      )}
    >
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 leading-relaxed">{text}</p>
      </CardContent>
    </Card>
  );
};
