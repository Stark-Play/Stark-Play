import { ReactNode } from "react";

interface RewardCardProps {
  //   icon: ReactNode;
  borderColor: string;
  title: string;
  text: string;
}

export const RewardCard = ({ borderColor, title, text }: RewardCardProps) => {
  return (
    <div
      className="text-white w-[479px] h-[429px] rounded-[28px] flex flex-col items-center justify-center"
      style={{ border: `5px solid ${borderColor}` }}
    >
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
