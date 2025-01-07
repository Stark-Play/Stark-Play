interface HeroProps {
    mainText: string;
    highlightWords: Array<{
      text: string;
      color: string;
    }>;
    subText: string;
  }
  
  export const Hero = ({ mainText, highlightWords, subText }: HeroProps) => {
    const renderText = (text: string) => {
      let result = text;
      // biome-ignore lint/complexity/noForEach: <explanation>
      highlightWords.forEach(({ text, color }) => {
        result = result.replace(
          text,
          `<span class="text-[${color}]">${text}`
        );
      });
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      return <span dangerouslySetInnerHTML={{ __html: result }} />;
    };
  
    return (
      <div className="flex items-center flex-col w-full py-6 md:py-10 lg:py-12">
        <div className="text-center mb-4 md:mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-[90px] font-bold font-['Arial'] text-white leading-tight">
            {renderText(mainText)}
          </h1>
        </div>
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl lg:text-[80px] font-normal text-white font-['Arial'] leading-tight">
            {subText}
          </h2>
        </div>
      </div>
    );
  };