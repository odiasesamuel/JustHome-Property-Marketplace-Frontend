export const LoadingBar = () => {
  return (
    <div className="relative h-[4px] w-[130px] overflow-hidden rounded-[30px] bg-black/20">
      <div className="animate-moving absolute left-0 top-0 h-full rounded-[30px] bg-appGreen"></div>
    </div>
  );
};
