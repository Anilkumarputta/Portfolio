export default function GithubStats() {
  return (
    <div className="bg-slate-800 text-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">GitHub Activity</h2>

      <div className="flex flex-col items-center gap-4">
        <img
          src="https://github-readme-stats.vercel.app/api?username=Anilkumarputta&show_icons=true&theme=dark"
          alt="GitHub Stats"
        />

        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Anilkumarputta&layout=compact&theme=dark"
          alt="Top Languages"
        />
      </div>
    </div>
  );
}
