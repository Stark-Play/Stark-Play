import { Hero } from "~~/components/sections/landing/Hero";
import { RewardSection } from "~~/components/sections/landing/RewardSection";
import { GameCarousel } from "~~/components/sections/landing/GameCarousel";

const Home = () => {
  const heroConfig = {
    mainText: "JOIN THE GAMING / STK",
    highlightWords: [
      { text: "GAMING", color: "#43C1EE" },
      { text: "/", color: "#592092" },
      { text: "STK", color: "#43C1EE" },
    ],
    subText: "REVOLUTION NOW",
  };

  const rewards = [
    {
      borderColor: "#2DD4BF",
      title: "Collaborate and Earn Rewards",
      text: `Every contribution brings us closer to real change and
        meaningful rewards. Receive exclusive benefits like
        limited-edition NFTs, access to special events, and more.
        Collaboration has never been this rewarding.`,
    },
    {
      borderColor: "#8B5CF6",
      title: "Collaborate and Earn Rewards",
      text: `Every contribution brings us closer to real change and
        meaningful rewards. Receive exclusive benefits like
        limited-edition NFTs, access to special events, and more.
        Collaboration has never been this rewarding.`,
    },
    {
      borderColor: "#FF6B6B",
      title: "Collaborate and Earn Rewards",
      text: `Every contribution brings us closer to real change and
        meaningful rewards. Receive exclusive benefits like
        limited-edition NFTs, access to special events, and more.
        Collaboration has never been this rewarding.`,
    },
  ];

  const games = [
    {
      title: "Illuvium | Open World RPG",
      subtitle: "Join the ultimate blockchain gaming experience with AAA-quality graphics and immersive gameplay. Explore, battle, and collect in a vast sci-fi universe.",
      image: "/image/demo.webp",
      players: 5000,
      community: "15k",
      status: "active" as const,
    },
    {
      title: "Star Atlas | Space MMO",
      subtitle: "Embark on an epic space adventure in this grand-scale MMO. Build your fleet, forge alliances, and conquer the metaverse.",
      image: "/image/demo.webp",
      players: 750,
      community: "20k",
    },
    {
      title: "Gods Unchained | TCG",
      subtitle: "Master strategic card battles in this revolutionary trading card game. Own your cards as NFTs and compete in high-stakes tournaments.",
      image: "/image/demo.webp",
      players: 100,
      community: "80k",
    },
    {
      title: "Big Time | Action RPG",
      subtitle: "Jump into a multiplayer action RPG where you can earn while you play. Collect rare items, trade with players, and build your legacy.",
      image: "/image/demo.webp",
      players: 4000,
      community: "12k",
    },
    {
      title: "Axie Infinity: Origins",
      subtitle: "Experience the next evolution of blockchain gaming with enhanced battle mechanics and deeper strategic gameplay.",
      image: "/image/demo.webp",
      players: 450,
      community: "10k",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero {...heroConfig} />
      <RewardSection rewards={rewards} />
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <GameCarousel games={games} />
      </div>
    </div>
  );
};

export default Home;
