import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Naqib Aiman | MIS & Software Engineer",
  description:
    "Portfolio of Muhammad Naqib Aiman Yu — Management Information Systems (MIS) at Sapura Industrial Berhad and former Software Engineer at JurisTech. Enterprise web systems, data architecture, and software engineering.",
  keywords: [
    "Muhammad Naqib Aiman",
    "Muhammad Naqib Aiman Yu",
    "Management Information System",
    "MIS Sapura Industrial",
    "Software Engineer JurisTech",
    "Web Developer Malaysia",
    "Full Stack Software Engineer",
    "Next.js",
    "React",
    "Enterprise Systems",
  ],
  authors: [{ name: "Muhammad Naqib Aiman Yu" }],
  creator: "Muhammad Naqib Aiman Yu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://naqibaiman.dev",
    title: "Muhammad Naqib Aiman | MIS & Software Engineer",
    description:
      "Enterprise systems, resilient software architectures, and modern web applications shipped into production.",
    siteName: "Muhammad Naqib Aiman Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[var(--bg)] text-[var(--fg)] selection:bg-[var(--fg)] selection:text-[var(--bg)]">
        {children}
      </body>
    </html>
  );
}
