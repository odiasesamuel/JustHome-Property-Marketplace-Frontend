export const LoadingBar = () => {
  return (
    <div className="relative h-[4px] w-[130px] overflow-hidden rounded-[30px] bg-black/20">
      <div className="animate-moving absolute left-0 top-0 h-full rounded-[30px] bg-appGreen"></div>
    </div>
  );
};

export const AnimatedHand = () => {
  return (
    <div className="relative ml-20 h-16 w-20">
      {/* Shadow */}
      <div className="absolute right-[20%] top-[70%] h-[75%] w-[180%] rounded-[40px_10px] bg-black opacity-30 blur-[10px]"></div>

      {/* Palm */}
      <div className="absolute left-0 top-0 h-full w-full rounded-[10px_40px] bg-appYellow"></div>

      {/* Thumb */}
      <div className="absolute bottom-[-18%] right-[1%] h-10 w-[120%] origin-[calc(100%-20px)_20px] rotate-[-20deg] transform rounded-[30px_20px_20px_10px] border-b-[2px] border-l-[2px] border-black/10 bg-appYellow">
        <div className="absolute bottom-[-8%] left-[5px] h-[60%] w-[20%] rounded-[60%_10%_10%_30%] border-r-[2px] border-black/5 bg-white/30"></div>
      </div>

      {/* Fingers */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className={`absolute bottom-[32%] right-[64%] h-[35px] w-[80%] origin-[100%_20px] rotate-[10deg] transform bg-appYellow animate-tap-upper-${i + 1} brightness-[${70 + i * 10}%]`}>
          <div className="absolute bottom-[8%] right-[65%] h-[30px] w-[140%] origin-[calc(100%-20px)_20px] rotate-[-60deg] transform rounded-[20px] bg-appYellow"></div>
        </div>
      ))}
    </div>
  );
};
