import type { Metadata } from "next";
import { Geist, Geist_Mono,Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Empower-Tech Hackathon 2025 ",
  icons: "/favicon.ico",
  description:
    "Join the Empower-Tech Hackathon 2025, co-hosted by OSPC VIT Chennai, ACM-W, and IEEE Women in Engineering. Innovate, collaborate, and compete to create solutions for social equality and empowerment. Exciting prizes await!",
  keywords:
    "Hackathon, Empower-Tech, VIT Chennai, Programming, Innovation, Social Equality, Women in Engineering, Collaboration, OSPC, ACM-W, IEEE, Open Source, Coding Competition",
  authors: [
    {
      name: "OSPC VITC",
      url: "https://empowertech.ospcvitc.club",
    },
  ],
  openGraph: {
    title: "Empower-Tech Hackathon 2025 ",
    description:
      "Participate in the 24-hour Empower-Tech Hackathon 2025 hosted by OSPC VITC, ACM-W, and IEEE Women society. Solve real-world challenges and win cash prizes!",
    url: "https://empowertech.ospcvitc.club",
    siteName: "Empower-Tech Hackathon 2025",
    locale: "en_US",
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
      <body
        className={`${geistSans.variable} ${firaCode.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar refs={undefined}/>
        {children}
      </body>
    </html>
  );
}
