const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-screen bg-gradient-to-b from-[#1d4ed8] to-[#172554]">
      <div className="m-auto flex h-full w-full max-w-screen-xl flex-col items-center justify-center">
        {children}
      </div>
    </section>
  );
};

export default App;
