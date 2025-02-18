export const LoadingBar = () => {
  return (
    <div className="relative w-[130px] h-[4px] bg-black/20 rounded-[30px] overflow-hidden">
      <div className="absolute top-0 left-0 h-full bg-appGreen rounded-[30px] animate-moving"></div>
    </div>
  );
};

export const AnimatedHand: React.FC<{}> = () => {
  return (
    <div className="relative w-20 h-16 ml-20">
      {/* Shadow */}
      <div className="absolute top-[70%] right-[20%] w-[180%] h-[75%] bg-black rounded-[40px_10px] blur-[10px] opacity-30"></div>

      {/* Palm */}
      <div className="absolute top-0 left-0 w-full h-full bg-appYellow rounded-[10px_40px]"></div>

      {/* Thumb */}
      <div className="absolute bottom-[-18%] right-[1%] w-[120%] h-10 bg-appYellow transform origin-[calc(100%-20px)_20px] rotate-[-20deg] rounded-[30px_20px_20px_10px] border-b-[2px] border-l-[2px] border-black/10">
        <div className="absolute bottom-[-8%] left-[5px] w-[20%] h-[60%] bg-white/30 rounded-[60%_10%_10%_30%] border-r-[2px] border-black/5"></div>
      </div>

      {/* Fingers */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className={`absolute bottom-[32%] right-[64%] w-[80%] h-[35px] bg-appYellow transform origin-[100%_20px] rotate-[10deg] animate-tap-upper-${i + 1} brightness-[${70 + i * 10}%]`}>
          <div className="absolute bottom-[8%] right-[65%] w-[140%] h-[30px] bg-appYellow transform origin-[calc(100%-20px)_20px] rotate-[-60deg] rounded-[20px]"></div>
        </div>
      ))}
    </div>
  );
};
