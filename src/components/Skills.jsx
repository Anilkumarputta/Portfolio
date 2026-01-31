import { useEffect, useRef, useState } from "react";

function useScrollFadeIn() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const top = ref.current.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) setVisible(true);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return [ref, visible];
}

export default function Skills() {
  const [ref, visible] = useScrollFadeIn();
  return (
    <div id="skills" ref={ref} className={`bg-slate-800 text-white py-16 px-6 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">🛠️ Skills</h2>

      <div className="grid md:grid-cols-4 gap-6 text-center">
        {["Backend", "Frontend", "Databases", "Cloud & DevOps"].map((title, idx) => (
          <div
            key={title}
            className={`bg-slate-900 border border-slate-700 p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl stagger-card`}
            style={{ animationDelay: `${idx * 0.15}s` }}
            tabIndex={0}
            aria-label={title}
          >
            {/* Icons removed */}
            <h3 className="font-bold text-cyan-400">{title}</h3>
            <p className="text-cyan-200">
              {title === "Backend" && "Java, Spring, Spring Boot, REST APIs, Microservices"}
              {title === "Frontend" && "React, Angular, Next.js, HTML, CSS, JavaScript"}
              {title === "Databases" && "MySQL, PostgreSQL, Oracle, MongoDB, DynamoDB"}
              {title === "Cloud & DevOps" && "AWS, GCP, Docker, Kubernetes, Jenkins, Git"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
