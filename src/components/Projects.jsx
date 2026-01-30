const projects = [
  {
    name: "Employee Management System",
    desc: "Web application to manage employees, roles, and reports for an organization.",
    tech: "Java, Spring Boot, React, MySQL",
    github: "https://github.com/Anilkumarputta/employee-management",
    live: "https://employee-demo.vercel.app"
  },
  {
    name: "E-Commerce Platform",
    desc: "Online shopping platform with product listing, cart, and payment flow.",
    tech: "React, Node.js, MongoDB",
    github: "https://github.com/Anilkumarputta/ecommerce-app",
    live: "https://ecommerce-demo.vercel.app"
  },
  {
    name: "Task Tracker",
    desc: "Task management tool with login and real-time updates.",
    tech: "React, Firebase",
    github: "https://github.com/Anilkumarputta/task-tracker",
    live: "https://task-demo.vercel.app"
  }
];

export default function Projects() {
  return (
    <div id="projects" className="bg-slate-800 text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-slate-900 p-6 rounded-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="text-gray-300 mt-2">{p.desc}</p>
            <p className="text-sm mt-2 text-cyan-400">{p.tech}</p>

            <div className="mt-4 space-x-4">
              <a
                href={p.github}
                target="_blank"
                className="text-cyan-400"
              >
                GitHub
              </a>
              <a
                href={p.live}
                target="_blank"
                className="text-cyan-400"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
