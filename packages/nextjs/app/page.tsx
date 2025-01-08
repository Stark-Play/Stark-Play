import { Hero } from "~~/components/sections/landing/Hero";
import { RewardSection } from "~~/components/sections/landing/RewardSection";
import { GameCarousel } from "~~/components/sections/landing/GameCarousel";
import {FeaturesSection} from '~~/components/sections/landing/FeatureCard';
import { UserFlow } from "~~/components/sections/landing/UserFlow"
import { GameExplorer } from '~~/components/shared/GameExplorer';
import { CreatorSection } from "~~/components/sections/landing/CreatorSection"

const Home = () => {
  const heroConfig = {
    gradientText: "Shape the Future of Blockchain Gaming",
    mainText: "Discover. Play. Earn.",
  };

  const games = [
    {
      id: "1",
      title: "Illuvium Zero",
      subtitle:
        "An Auto-battler RPG where you collect and fuse creatures, battle in the arena, and earn while mastering strategic gameplay in a vast sci-fi open world.",
      image: "/image/demo.webp",
      players: "127,865",
      community: "892.3K",
      status: "active",
      socialLinks: {
        twitter: "https://twitter.com/illuvium",
        discord: "https://discord.gg/illuvium",
        telegram: "https://t.me/illuvium",
        website: "https://illuvium.io",
      },
    },
    {
      id: "2",
      title: "Star Atlas",
      subtitle:
        "Massive multiplayer space simulation with stunning graphics. Build your fleet, explore distant galaxies, and participate in an intergalactic economy powered by blockchain.",
      image: "/image/demo.webp",
      players: "89,432",
      community: "654.7K",
      status: "upcoming",
      socialLinks: {
        twitter: "https://twitter.com/staratlas",
        discord: "https://discord.gg/staratlas",
        telegram: "https://t.me/staratlas",
        website: "https://staratlas.com",
      },
    },
    {
      id: "3",
      title: "Gods Unchained",
      subtitle:
        "Strategic trading card game where you truly own your cards. Compete in tournaments, trade on the marketplace, and earn rewards through skilled gameplay.",
      image: "/image/demo.webp",
      players: "253,198",
      community: "1.2M",
      status: "active",
      socialLinks: {
        twitter: "https://twitter.com/GodsUnchained",
        discord: "https://discord.gg/godsunchained",
        telegram: "https://t.me/godsunchained",
        website: "https://godsunchained.com",
      },
    },
    {
      id: "4",
      title: "Big Time",
      subtitle:
        "Action RPG where you team up with friends to raid dungeons, collect rare items, and build your own space-time machine to explore different eras.",
      image: "/image/demo.webp",
      players: "156,743",
      community: "478.9K",
      status: "active",
      socialLinks: {
        twitter: "https://twitter.com/playbigtime",
        discord: "https://discord.gg/bigtime",
        telegram: "https://t.me/bigtime",
        website: "https://bigtime.gg",
      },
    },
    {
      id: "5",
      title: "Shardbound Chronicles",
      subtitle:
        "A revolutionary MOBA-CCG hybrid where every champion and item is an NFT. Form guilds, compete in ranked matches, and shape the future of the Shardbound universe.",
      image: "/image/demo.webp",
      players: "45,876",
      community: "234.5K",
      status: "upcoming",
      socialLinks: {
        twitter: "https://twitter.com/shardbound",
        discord: "https://discord.gg/shardbound",
        telegram: "https://t.me/shardbound",
        website: "https://shardbound.game",
      },
    },
    {
      id: "6",
      title: "DefiKingdoms",
      subtitle:
        "Combine DeFi and gaming in this retro-styled MMO. Farm resources, summon heroes, complete quests, and participate in a player-driven economy.",
      image: "/image/demo.webp",
      players: "167,321",
      community: "567.8K",
      status: "active",
      socialLinks: {
        twitter: "https://twitter.com/DefiKingdoms",
        discord: "https://discord.gg/defikingdoms",
        telegram: "https://t.me/defikingdoms",
        website: "https://defikingdoms.com",
      },
    },
    {
      id: "7",
      title: "Skyweaver",
      subtitle:
        "A competitive card game where skill matters most. Master unique mechanics, compete in tournaments, and truly own your digital cards through blockchain technology.",
      image: "/image/demo.webp",
      players: "98,543",
      community: "345.6K",
      status: "active",
      socialLinks: {
        twitter: "https://twitter.com/skyweaver",
        discord: "https://discord.gg/skyweaver",
        telegram: "https://t.me/skyweaver",
        website: "https://skyweaver.net",
      },
    },
    {
      id: "8",
      title: "Guild of Guardians",
      subtitle:
        "Mobile RPG where players collect heroes, raid dungeons with friends, and trade assets in a player-owned economy. Build your ultimate team of guardians.",
      image: "/image/demo.webp",
      players: "78,932",
      community: "423.1K",
      status: "upcoming",
      socialLinks: {
        twitter: "https://twitter.com/guildofguardian",
        discord: "https://discord.gg/guildofguardians",
        telegram: "https://t.me/guildofguardians",
        website: "https://guildofguardians.com",
      },
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero {...heroConfig} />
      <RewardSection />
      <GameExplorer/>
        <GameCarousel games={games} />
        <UserFlow/>
      <FeaturesSection/>
      <CreatorSection/>
    </div>
  );
};

export default Home;
