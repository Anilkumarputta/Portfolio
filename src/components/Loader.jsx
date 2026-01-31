export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-950/90 backdrop-blur-xl">
      <div className="relative flex flex-col items-center">
        <div className="w-24 h-24 rounded-full border-8 border-cyan-400 border-t-fuchsia-500 animate-spin shadow-neon" />
        <span className="mt-6 text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text animate-gradient-x drop-shadow-neon tracking-widest">
          Loading...
        </span>
      </div>
    </div>
  );
}
