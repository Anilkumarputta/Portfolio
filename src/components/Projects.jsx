const projects = [
  {
    name: "Enterprise Claims Processing Platform",
    desc: "Healthcare system for processing high-volume claims with secure microservices and regulatory compliance.",
    tech: "Java, Spring Boot, REST APIs, AWS, MySQL",
    github: "https://github.com/Anilkumarputta",
    live: "#"
  },
  {
    name: "Banking Transaction Management System",
    desc: "Financial platform handling customer transactions, reporting, and audit tracking.",
    tech: "Java, Spring Boot, Oracle, Microservices",
    github: "https://github.com/Anilkumarputta",
    live: "#"
  },
  {
    name: "Microservices Monitoring Dashboard",
    desc: "Real-time dashboard for service health, logs, and performance metrics.",
    tech: "React, Node.js, Grafana, Prometheus",
    github: "https://github.com/Anilkumarputta",
    live: "#"
  },
  {
    name: "AI-Powered Document Analyzer",
    desc: "LLM-based system to summarize financial reports and detect anomalies.",
    tech: "Python, LangChain, OpenAI API",
    github: "https://github.com/Anilkumarputta",
    live: "#"
  }
];

export default function Projects() {
  return (
    <div id="projects" className="bg-slate-800 text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-slate-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="text-gray-300 mt-2">{p.desc}</p>
            <p className="text-sm mt-2 text-cyan-400">{p.tech}</p>
            <div className="mt-4 space-x-4">
              <a href={p.github} target="_blank">GitHub</a>
              <a href={p.live}>Live</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
