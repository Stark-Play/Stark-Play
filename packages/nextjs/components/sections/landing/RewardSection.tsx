import { OnboardingCards } from "./OnboardingCards";

interface RewardSectionProps {
  rewards: Array<{
    borderColor: string;
    title: string;
    text: string;
  }>;
}

export const RewardSection = ({ rewards }: RewardSectionProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewards.map((reward, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <OnboardingCards key={index} {...reward} />
        ))}
      </div>
    </div>
  );
};
