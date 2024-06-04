"use client";

import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { cn } from "~/lib/utils";

const playerClasses = [
  {
    name: "Cleric",
    id: 7,
    summary:
      "In the frail age, communion with celestials is unheard of. The cleric must bind to ancient tomes containing the last vestiges flight from when the celestials had drawn near.",
  },
  {
    name: "Dire Lord",
    id: 8,
    summary:
      "Legends speak of dire lords capable of mastering the crippling power of fear, with some able to manipulate the 'essence' of living things — even their very blood.",
  },
  {
    name: "Druid",
    id: 9,
    summary:
      "Amidst the fragmented realms, the wild-eyed druid embraces the diverse, natural world, peering into its mysteries. Druids are revered as visionaries who can see into the heart of terminus.",
  },
];

export async function TopNav() {
  return (
    <nav className="flex w-full justify-center border-b">
      <div className="flex w-full max-w-screen-xl items-center justify-between p-4">
        <div className="flex space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={`text-xl font-semibold ${navigationMenuTriggerStyle()}`}>
                    JoppaDB
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/items/weapons" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Weapons</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Classes</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {playerClasses.map((playerClass) => (
                      <ListItem key={playerClass.id} title={playerClass.name} href={`/classes/${playerClass.id}`}>
                        {playerClass.summary}
                      </ListItem>
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

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
