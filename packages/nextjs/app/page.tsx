import { RewardCard } from "../components/RewardCardComponent";
const Home = () => {
  let exampleText = `Every contribution brings us closer to real change and
meaningful rewards. Receive exclusive benefits like
limited-edition NFTs, access to special events, and more.
Collaboration has never been this rewarding.`;
  return (
    <><div className="flex items-center flex-col flex-grow pt-10">
      <div className="h-[137px]">
        <h1>
          <span className="block text-[90px] font-[700] font-['Arial'] text-white">
            JOIN THE <span className="text-[#43C1EE]">GAMING</span> <span className="text-[#592092]">/</span>{" "}
            <span className="text-[#43C1EE]">STK</span>
          </span>
        </h1>
      </div>

      <div className="h-[137px]">
        <h2 className="text-[80px] font-[400] text-white font-['Arial']">
          REVOLUTION NOW
        </h2>
      </div>
    </div>
    <div className="flex justify-between">
      <RewardCard borderColor={"#2DD4BF"} title={"Collaborate and Earn Rewards"} text={exampleText}/>
      <RewardCard borderColor={"#8B5CF6"} title={"Collaborate and Earn Rewards"} text={exampleText}/>
      <RewardCard borderColor={"#FF6B6B"} title={"Collaborate and Earn Rewards"} text={exampleText}/>

      </div>
      </>
  );
};

export default Home;
