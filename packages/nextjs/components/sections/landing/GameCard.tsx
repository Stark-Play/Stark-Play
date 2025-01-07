import { Box, Card, Text, Flex, Button } from "@radix-ui/themes";
import {
  TwitterLogoIcon,
  DiscordLogoIcon,
  PaperPlaneIcon,
  DownloadIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

interface GameCarddProps {
  title: string;
  subtitle: string;
  image: string;
  players: string | number;
  community: string | number;
  status?: "active" | "upcoming" | "ended";
}

export const GameCard = ({
  title,
  subtitle,
  image,
  players,
  community,
  status = "active",
}: GameCarddProps) => {
  return (
    <Card
      size="3"
      className="flex flex-col m-2 w-[380px] h-[520px] rounded-lg border border-white/10 bg-[#1a103d]"
    >
      {/* Image Container */}
      <Box className="relative h-[200px]">
        <Image 
          src={image} 
          alt={title} 
          width={400} 
          height={320}
          className="w-full h-full object-cover rounded-t-lg"
        />
        {status === "active" && (
          <Box className="absolute top-3 left-3 bg-green-500 px-3 py-1 rounded text-white text-sm">
            Presale: Active
          </Box>
        )}
      </Box>

      {/* Content */}
      <Box className="p-4 flex flex-col h-[320px]">
        {/* Title Section */}
        <Text
          size="5"
          weight="bold"
          className="text-white mb-2 line-clamp-1"
        >
          {title}
        </Text>
        <Text
          as="p"
          size="2"
          className="text-slate-400 mb-6 line-clamp-3"
        >
          {subtitle}
        </Text>

        {/* Fundraising Details */}
        <Flex direction="column" className="gap-3 mb-4">
          <Flex justify="between">
            <Text size="2" className="text-slate-400">
              Players:
            </Text>
            <Text size="2" className="text-white px-1">
              {players}
            </Text>
          </Flex>
          <Flex justify="between">
            <Text size="2" className="text-slate-400">
              Community:
            </Text>
            <Text size="2" className="text-white px-1">
              {community}
            </Text>
          </Flex>
        </Flex>

        {/* Social Links */}
        <Flex className="gap-2 mt-auto space-x-5">
          <Button
            variant="soft"
            className="bg-white/10 hover:bg-white/20 transition-colors"
          >
            <TwitterLogoIcon />
          </Button>
          <Button
            variant="soft"
            className="bg-white/10 hover:bg-white/20 transition-colors"
          >
            <DiscordLogoIcon />
          </Button>
          <Button
            variant="soft"
            className="bg-white/10 hover:bg-white/20 transition-colors"
          >
            <PaperPlaneIcon />
          </Button>
          <Button
            className="ml-auto bg-white text-[#1a103d] hover:bg-white/90 transition-colors"
          >
            <DownloadIcon />
          </Button>
        </Flex>
      </Box>
    </Card>
  );
};