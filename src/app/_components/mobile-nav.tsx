"use client";

import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { Icons } from "~/components/icons";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { cn } from "~/lib/utils";
import { type PlayerClass } from "~/server/db/schema";

export function MobileNav({ playerClasses }: { playerClasses: PlayerClass[] }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex items-center space-x-1">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="mr-2 px-0 pl-3 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <svg
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M3 5H11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 12H16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 19H21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0">
          <MobileLink href="/" className="flex items-center" onOpenChange={setOpen}>
            <Icons.logo className="mr-2 h-4 w-4" />
            <span className="font-bold">JoppaDB</span>
          </MobileLink>
          <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col space-y-3 pt-4">
                <h4 className="font-medium">Items</h4>
                <MobileLink href={`/items/weapons`} onOpenChange={setOpen} className="text-muted-foreground">
                  Weapons
                </MobileLink>
              </div>
              <div className="flex flex-col space-y-3 pt-4">
                <MobileLink href="/classes" onOpenChange={setOpen}>
                  <h4 className="font-medium">Classes</h4>
                </MobileLink>
                {playerClasses
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((playerClass) => (
                    <MobileLink
                      key={playerClass.id}
                      href={`/classes/${playerClass.id}`}
                      onOpenChange={setOpen}
                      className="text-muted-foreground"
                    >
                      {playerClass.name}
                    </MobileLink>
                  ))}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <span className="text-xl font-semibold">JoppaDB</span>
    </div>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
  const router = useRouter();

  const url = typeof href === "string" ? href : href.href!;

  return (
    <Link
      href={href}
      onClick={() => {
        router.push(url);
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
