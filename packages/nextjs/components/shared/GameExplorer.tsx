import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~~/components/ui/select";
import { Button } from "~~/components/ui/button";
import { Search } from "lucide-react";
import {
  Gamepad2,
  Globe,
  Dice6,
  WalletCardsIcon as Cards,
  Swords,
  Coins,
  Target,
  Video,
} from "lucide-react";

export function GameExplorer() {
  return (
    <div className="mx-auto max-w-7xl py-6">
      {/* Search and Filters Section */}
      <div className="mb-8 mx-auto rounded-full bg-white p-1.5 shadow-lg max-w-4xl">
        <div className="flex items-center">
          <div className="flex items-center gap-2 px-3">
            <span className="text-sm font-semibold text-purple-500">
              Search Games
            </span>
          </div>
          <div className="flex flex-1 items-center gap-1.5">
            <Select>
              <SelectTrigger className="w-[180px] border-0 bg-transparent">
                <SelectValue placeholder="Choose category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="action">Action</SelectItem>
                <SelectItem value="rpg">RPG</SelectItem>
                <SelectItem value="strategy">Strategy</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px] border-0 bg-transparent">
                <SelectValue placeholder="Choose state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All States</SelectItem>
                <SelectItem value="live">Live</SelectItem>
                <SelectItem value="beta">Beta</SelectItem>
                <SelectItem value="alpha">Alpha</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px] border-0 bg-transparent">
                <SelectValue placeholder="Framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ecosystems</SelectItem>
                <SelectItem value="ethereum">Dojo</SelectItem>
                <SelectItem value="solana">StakPlay</SelectItem>
                <SelectItem value="polygon">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            size="icon"
            className="h-10 w-10 rounded-full bg-blue-500 hover:bg-blue-600"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 gap-4 py-6 sm:grid-cols-4 md:grid-cols-8">
        <Button
          variant="ghost"
          className="flex flex-col h-14 items-center gap-2 rounded-lg p-4 text-white hover:bg-purple-200"
        >
          <Gamepad2 className="h-8 w-8" />
          <span className="text-sm">Play-to-Earn</span>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-col h-14 items-center gap-2 rounded-lg p-4 text-white hover:bg-purple-200"
        >
          <Globe className="h-8 w-8" />
          <span className="text-sm">Gaming Metaverses</span>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-col h-14 items-center gap-2 rounded-lg p-4 text-white hover:bg-purple-200"
        >
          <Dice6 className="h-8 w-8" />
          <span className="text-sm">DeFi Gaming</span>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-col h-14 items-center gap-2 rounded-lg p-4 text-white hover:bg-purple-200"
        >
          <Cards className="h-8 w-8" />
          <span className="text-sm">Trading Card Games</span>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-col h-14 items-center gap-2 rounded-lg p-4 text-white hover:bg-purple-200"
        >
          <Swords className="h-8 w-8" />
          <span className="text-sm">Blockchain RPGs</span>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-col h-14 items-center gap-2 rounded-lg p-4 text-white hover:bg-purple-200"
        >
          <Coins className="h-8 w-8" />
          <span className="text-sm">Move-to-Earn</span>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-col h-14 items-center gap-2 rounded-lg p-4 text-white hover:bg-purple-200"
        >
          <Target className="h-8 w-8" />
          <span className="text-sm">Strategy Games</span>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-col h-14 items-center gap-2 rounded-lg p-4 text-white hover:bg-purple-200"
        >
          <Video className="h-8 w-8" />
          <span className="text-sm">Simulators</span>
        </Button>
      </div>
    </div>
  );
}
