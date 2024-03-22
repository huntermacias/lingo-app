import Link from "next/link";
import Image from "next/image";
import {
    ClerkLoading,
    ClerkLoaded,
    UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";

import { cn } from "@/lib/utils";
import { SidebarItem } from "./sidebar-item";
import { ModeToggle } from "./toggle-theme";


type Props = {
    className?: string;
};

export const Sidebar = ({ className }: Props) => {
    return (
     
            <aside className={cn(
                "flex h-full lg:w-[256px] fixed bg-white dark:bg-gray-950/90 border-r shadow-lg transition-colors duration-300 ease-in-out",
                className,
            )}>
                <div className="flex flex-col justify-between h-full p-6">
                    <div>
                        <Link href="/learn" className="flex items-center py-2 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
                            <div className="flex-shrink-0">
                                <Image
                                    src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/larrysupercpu/phpIa4nKk.png"
                                    height={80}
                                    width={100}
                                    alt="Mascot"
                                    className="rounded-full"
                                    layout="fixed"
                                />
                            </div>
                            <h1 className="text-xl font-bold text-primary-500 dark:text-primary-300">
                                Lingo
                            </h1>
                        </Link>
    
                        <nav className="space-y-2 mt-10">
                            <SidebarItem label="Learn" href="/learn" iconSrc="/learn.svg" />
                            <SidebarItem label="Leaderboard" href="/leaderboard" iconSrc="/leaderboard.svg" />
                            <SidebarItem label="Quests" href="/quests" iconSrc="/quests.svg" />
                            <SidebarItem label="Shop" href="/shop" iconSrc="/shop.svg" />
                        </nav>
                    </div>
    
                    <div>
                        <hr className="my-4 border-t border-gray-200 dark:border-gray-700" />
                        <div className="flex items-center justify-between">
                            <ClerkLoading>
                                <Loader className="h-5 w-5 text-primary-500 animate-spin" />
                            </ClerkLoading>
                            <ClerkLoaded>
                                <UserButton afterSignOutUrl="/" />
                            </ClerkLoaded>
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </aside>
        );


};