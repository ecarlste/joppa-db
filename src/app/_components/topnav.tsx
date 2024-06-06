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
import { type PlayerClass } from "~/server/db/schema";
import { MobileNav } from "./mobile-nav";

export function TopNav({ playerClasses }: { playerClasses: PlayerClass[] }) {
  return (
    <nav className="flex w-full justify-center border-b">
      <div className="flex h-14 w-full max-w-screen-xl items-center justify-between">
        <div className="hidden sm:flex sm:space-x-4">
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
                    <ListItem title="Browse Classes" href="/classes" liClassName="md:col-span-2">
                      Browse through all of the classes available in Pantheon: Rise of the Fallen.
                    </ListItem>
                    {playerClasses
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((playerClass) => (
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

        <div className="flex space-x-4 sm:hidden">
          <MobileNav playerClasses={playerClasses} />
        </div>

        <div className="flex items-center px-4 py-2">
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { liClassName?: string }
>(({ className, title, children, liClassName, ...props }, ref) => {
  return (
    <li className={liClassName}>
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
});
ListItem.displayName = "ListItem";
