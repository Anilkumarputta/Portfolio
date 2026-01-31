export default function GithubStats() {
  return (
    <section className="relative py-20 px-4 text-center">
      {/* Futuristic blurred neon background shapes */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[400px] h-[180px] bg-gradient-to-tr from-purple-700/40 via-cyan-500/30 to-fuchsia-500/30 blur-3xl rounded-full opacity-60 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-br from-cyan-400/30 via-purple-500/20 to-fuchsia-400/20 blur-2xl rounded-full opacity-50 animate-blob" />
      </div>
      <div className="relative z-10 w-full max-w-2xl mx-auto rounded-2xl bg-white/10 backdrop-blur-xl border border-cyan-500/40 shadow-xl p-10 glass-card">
        <h2 className="text-3xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-neon">GitHub Activity</h2>
        <div className="flex flex-col items-center gap-8">
          <div className="bg-zinc-950/80 border border-cyan-500/30 p-4 rounded-xl shadow-lg w-full">
            <img
              src="https://github-readme-stats.vercel.app/api?username=Anilkumarputta&show_icons=true&theme=dark"
              alt="GitHub Stats"
              className="mx-auto"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <div className="bg-zinc-950/80 border border-cyan-500/30 p-4 rounded-xl shadow-lg w-full">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Anilkumarputta&layout=compact&theme=dark"
              alt="Top Languages"
              className="mx-auto"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <p className="text-cyan-300 text-xs mt-2">If stats do not load, GitHub API may be rate-limited. Try again later.</p>
        </div>
      </div>
    </section>
  );
}
