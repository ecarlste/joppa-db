import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { TopNav } from "./_components/topnav";
import { fetchPlayerClasses } from "~/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Joppa DB",
  description: "A handy website for finding everything you need to know about Pantheon",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const playerClasses = await fetchPlayerClasses();

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable} dark`}>
          <TopNav playerClasses={playerClasses} />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
