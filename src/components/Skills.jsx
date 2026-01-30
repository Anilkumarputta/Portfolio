export default function Skills() {
  return (
    <div className="bg-slate-800 text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

      <div className="grid md:grid-cols-4 gap-6 text-center">
        <div>
          <h3 className="font-bold text-cyan-400">Backend</h3>
          <p>Java, Spring, Spring Boot, REST APIs, Microservices</p>
        </div>

        <div>
          <h3 className="font-bold text-cyan-400">Frontend</h3>
          <p>React, Angular, Next.js, HTML, CSS, JavaScript</p>
        </div>

        <div>
          <h3 className="font-bold text-cyan-400">Databases</h3>
          <p>MySQL, PostgreSQL, Oracle, MongoDB, DynamoDB</p>
        </div>

        <div>
          <h3 className="font-bold text-cyan-400">Cloud & DevOps</h3>
          <p>AWS, GCP, Docker, Kubernetes, Jenkins, Git</p>
        </div>
      </div>
    </div>
  );
}
