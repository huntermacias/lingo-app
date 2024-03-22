import Image from "next/image";
import { Loader } from "lucide-react";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/toggle-theme";


export const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="container mx-auto flex items-center justify-between h-full">
        <div className="flex items-center gap-x-3">
          <Image src="https://miro.medium.com/v2/resize:fit:256/1*ybNs6fRbpu-N3gIsbo32DA.png" height={60} width={60} alt="Mascot" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide" style={{ color: "var(--primary)" }}>
            Lingo
          </h1>
        </div>
        <div className="flex items-center gap-x-4">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
                <Button size="lg" variant="ghost">
                  Login
                </Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>

          {/* Assuming your Switch component here is properly styled and can align itself within its container */}
          <div className="flex items-center">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>

  );
};