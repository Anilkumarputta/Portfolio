const projects = [
  {
    name: "Modern Web Calculator",
    desc: "A responsive, dark-theme calculator with keyboard support, animations, and full error handling.",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/Anilkumarputta/Modern-Web-Calculator",
    live: "https://anilkumarputta.github.io/Modern-Web-Calculator/"
  },
  {
    name: "Portfolio Website",
    desc: "Personal portfolio built with React and Tailwind, deployed on Vercel.",
    tech: "React, Tailwind, Vercel",
    github: "https://github.com/Anilkumarputta/Portfolio",
    live: "https://your-vercel-link.vercel.app"
  },
  {
    name: "Employee Management App",
    desc: "Full stack app to manage employees with CRUD operations.",
    tech: "Java, Spring Boot, React, MySQL",
    github: "https://github.com/Anilkumarputta/employee-management",
    live: "#"
  },
  {
    name: "E-Commerce App",
    desc: "Shopping app with product listing, cart, and checkout flow.",
    tech: "React, Node.js, MongoDB",
    github: "https://github.com/Anilkumarputta/ecommerce",
    live: "#"
  },
  {
    name: "REST API Service",
    desc: "Backend API with authentication and database integration.",
    tech: "Java, Spring Boot, PostgreSQL",
    github: "https://github.com/Anilkumarputta/rest-api",
    live: "#"
  },
  {
    name: "Automation Scripts",
    desc: "Utility scripts for testing and automation tasks.",
    tech: "Python, Selenium",
    github: "https://github.com/Anilkumarputta/automation",
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
