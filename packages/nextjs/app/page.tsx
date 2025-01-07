import { Hero } from "~~/components/sections/landing/Hero";
import { RewardSection } from "~~/components/sections/landing/RewardSection";

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

  return (
    <div className="flex flex-col min-h-screen">
      <Hero {...heroConfig} />
      <RewardSection rewards={rewards} />
    </div>
  );
};

export default Home;
