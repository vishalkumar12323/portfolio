import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import Navbar from "@/components/main/Navbar";

const open_sans = Open_Sans({
  weight: "400",
  variable: "--lato",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Vishal-Kumar",
  description: "Portfolio template build with next.js",
  authors: [
    { name: "Vishal Kumar", url: "https://github.com/vishalkumar12323" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${open_sans.variable} ${open_sans.className} antialiased text-black dark:text-white flex flex-col min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="max-w-7xl mx-auto w-full py-2 px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
