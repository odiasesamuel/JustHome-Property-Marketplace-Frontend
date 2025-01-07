type MainProps = {
  children: React.ReactNode;
  className: string;
};

const Main: React.FC<MainProps> = ({ children, className }) => {
  return (
    <main className={className}>
      <div>{children}</div>
      <nav className="bg-yellow-700 max-w-[1535px] mx-auto h-[75px]">
        Nav bar
      </nav>
    </main>
  );
};

export default Main;
