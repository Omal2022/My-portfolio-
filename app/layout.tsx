import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Chika Egulemu - Frontend Developer",
  description:
    "Portfolio of Chika Egulemu - Enthusiastic Frontend Developer specializing in React, Next.js, and modern web technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${jetbrainsMono.variable}`}>
      <body>
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
