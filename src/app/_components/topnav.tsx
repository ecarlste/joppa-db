import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4">
      <div className="flex space-x-4">
        <div className="text-xl font-semibold">
          <Link href="/">Joppa DB</Link>
        </div>
        <div className="text-lg">
          <Link href="/items/weapons">Weapons</Link>
        </div>
        <div className="text-lg">
          <Link href="/classes">Classes</Link>
        </div>
      </div>

      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
