import { Box, Card, Inset, Text, Strong } from "@radix-ui/themes";

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
    <Box className={`mx-4 ${className}`}>
      <Card
        size="2"
        style={{
          borderColor,
          borderWidth: "2px",
          borderStyle: "solid",
          background: "transparent",
          transition: "transform 300ms",
        }}
        className="p-4 rounded-md hover:scale-105"
      >
        <Box p="4">
          <h3>
            <Strong>{title}</Strong>
          </h3>
          <Text as="p" size="2" style={{ color: "rgb(209 213 219)" }}>
            {text}
          </Text>
        </Box>
      </Card>
    </Box>
  );
};
