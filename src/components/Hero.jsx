export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center text-white px-4">
      <h1 className="text-5xl font-bold">Anil Kumar</h1>
      <h2 className="text-xl mt-2 text-cyan-400">
        Java Full Stack Developer
      </h2>

      <p className="mt-4 max-w-xl text-gray-300">
        4+ years of experience building backend systems using Java & Spring Boot,
        and modern web apps using React & Angular.
      </p>

      <div className="mt-6 space-x-4">
        <a
          href="#projects"
          className="bg-cyan-500 text-black px-6 py-2 rounded"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          className="border border-gray-400 px-6 py-2 rounded"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
