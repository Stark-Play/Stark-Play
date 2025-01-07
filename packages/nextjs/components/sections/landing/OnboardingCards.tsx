import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardProps {
  borderColor: string;
  title: string;
  text: string;
  className?: string;
}

export const OnboardingCards = ({
  borderColor,
  title,
  text,
  className = "",
}: CardProps) => {
  return (
    <Card 
      className={`
        w-full max-w-sm mx-4
        transition-transform duration-300 hover:scale-105
        bg-transparent border-2
        ${className}
      `}
      style={{ borderColor }}
    >
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl text-white">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm md:text-base text-gray-300">
          {text}
        </CardDescription>
      </CardContent>
    </Card>
  );
};