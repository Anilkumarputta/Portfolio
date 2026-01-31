export default function GithubStats() {
  return (
    <div className="bg-slate-800 text-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">GitHub Activity</h2>

      <div className="flex flex-col items-center gap-4">
        <div className="bg-slate-900 border border-slate-700 p-4 rounded-lg shadow-lg">
          <img
            src="https://github-readme-stats.vercel.app/api?username=Anilkumarputta&show_icons=true&theme=dark"
            alt="GitHub Stats"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
        <div className="bg-slate-900 border border-slate-700 p-4 rounded-lg shadow-lg">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Anilkumarputta&layout=compact&theme=dark"
            alt="Top Languages"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
        <p className="text-cyan-300 text-xs mt-2">If stats do not load, GitHub API may be rate-limited. Try again later.</p>
      </div>
    </div>
  );
}
