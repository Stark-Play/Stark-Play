import { Hero } from "~~/components/sections/landing/Hero";
import { RewardSection } from "~~/components/sections/landing/RewardSection";
import { GameCarousel } from "~~/components/sections/landing/GameCarousel";
import { FeaturesSection } from '~~/components/sections/landing/FeatureCard';
import { UserFlow } from "~~/components/sections/landing/UserFlow";
import { GameExplorer } from '~~/components/shared/GameExplorer';
import { CreatorSection } from "~~/components/sections/landing/CreatorSection";
import { games } from '~~/lib/gameData';
import ConnectWalletButton from "~~/components/shared/ConnectWalletButton";



const Home = () => {
  const heroConfig = {
    gradientText: "Shape the Future of Blockchain Gaming",
    mainText: "Discover. Play. Earn.",
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Hero {...heroConfig} />
      <RewardSection />
      <GameExplorer />
      {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
      <GameCarousel games={games as any} />
      <UserFlow />
      <FeaturesSection />
      <CreatorSection />
    </div>
  );
};

export default Home;