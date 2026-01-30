export default function Experience() {
  return (
    <div className="bg-slate-900 text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>

      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h3 className="font-bold">Citi – Full Stack Developer</h3>
          <p className="text-gray-300">
            Built Java microservices for enterprise financial platforms,
            improved system reliability, and integrated LLM-based automation.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Express Scripts – Full Stack Developer</h3>
          <p className="text-gray-300">
            Developed healthcare backend services for claims processing and
            high-volume transaction systems.
          </p>
        </div>

        <div>
          <h3 className="font-bold">US Bank – Java Developer</h3>
          <p className="text-gray-300">
            Built secure banking APIs and optimized database performance.
          </p>
        </div>

        <div>
          <h3 className="font-bold">DXC Technologies – Java Developer</h3>
          <p className="text-gray-300">
            Modernized enterprise Java systems and improved CI/CD pipelines.
          </p>
        </div>
      </div>
    </div>
  );
}
