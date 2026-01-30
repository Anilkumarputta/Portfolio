import Image from "next/image";

// Simple social links bar
export default function SocialLinks() {
  return (
    <div className="flex gap-6 justify-center mt-4">
      <a href="https://github.com/Anilkumarputta" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
        <Image src="/github-mark.svg" alt="GitHub" width={28} height={28} className="w-7 h-7 group-hover:scale-110 transition" />
        <span className="text-xs text-zinc-500 group-hover:text-blue-700 dark:group-hover:text-blue-300 mt-1">GitHub</span>
      </a>
      <a href="http://linkedin.com/in/anil-putta" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
        <Image src="/linkedin.svg" alt="LinkedIn" width={28} height={28} className="w-7 h-7 group-hover:scale-110 transition" />
        <span className="text-xs text-zinc-500 group-hover:text-blue-700 dark:group-hover:text-blue-300 mt-1">LinkedIn</span>
      </a>
      <a href="mailto:anilkumarputta01@gmail.com" className="flex flex-col items-center group">
        <Image src="/mail.svg" alt="Email" width={28} height={28} className="w-7 h-7 group-hover:scale-110 transition" />
        <span className="text-xs text-zinc-500 group-hover:text-blue-700 dark:group-hover:text-blue-300 mt-1">Email</span>
      </a>
    </div>
  );
}
