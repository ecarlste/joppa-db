import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { TopNav } from "./_components/topnav";
import { playerClass } from "~/server/db/schema";
import { db } from "~/server/db";

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

async function fetchPlayerClasses() {
  const result = await db
    .select({
      id: playerClass.id,
      name: playerClass.name,
      summary: playerClass.summary,
    })
    .from(playerClass);

  return result;
}
