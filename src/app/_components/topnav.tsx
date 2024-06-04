"use client";

import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";

const playerClasses = [
  { name: "Cleric", id: 7 },
  { name: "Dire Lord", id: 8 },
  { name: "Druid", id: 9 },
];

export function TopNav() {
  return (
    <nav className="flex w-full justify-center border-b">
      <div className="flex w-full max-w-screen-xl items-center justify-between p-4">
        <div className="flex space-x-4">
          <div className="text-xl font-semibold">
            <Link href="/">Joppa DB</Link>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Classes</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] grid-cols-1 gap-3 p-4 md:w-[250px] lg:w-[300px]">
                    {playerClasses.map((playerClass) => (
                      <li key={playerClass.id}>
                        <Link href={`/classes/${playerClass.id}`}>{playerClass.name}</Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
