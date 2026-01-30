import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anil Kumar Putta - Full Stack Java Developer Portfolio",
  description: "Full Stack Java Developer with 5+ years of experience building scalable web applications and microservices. Specializing in Java, Spring Boot, React, Angular, and cloud technologies.",
  keywords: "Full Stack Developer, Java Developer, Spring Boot, React, Angular, AWS, Portfolio",
  authors: [{ name: "Anil Kumar Putta" }],
  openGraph: {
    title: "Anil Kumar Putta - Full Stack Java Developer",
    description: "Professional portfolio showcasing 5+ years of full stack development experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
