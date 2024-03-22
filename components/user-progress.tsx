import Link from "next/link";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

// import { courses } from "@/db/schema";
import { Button } from "@/components/ui/button";

type Props = {
    activeCourse: any;
    hearts: number;
    points: number;
    hasActiveSubscription: boolean;
};

export const UserProgress = ({
    activeCourse,
    points,
    hearts,
    hasActiveSubscription
}: Props) => {
    return (

        <div className="flex items-center justify-between gap-x-4 p-2 rounded-lg shadow-md w-full transition-shadow duration-300 hover:shadow-lg">
            <Link href="/courses" passHref>
                <Button variant="ghost" className="flex items-center gap-2 p-2 rounded-md transition-all dark:hover:bg-gray-700 hover:bg-blue-50">
                    <Image
                        src={activeCourse.imageSrc}
                        alt={activeCourse.title}
                        className="rounded-full"
                        width={40}
                        height={40}
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{activeCourse.title}</span>
                </Button>
            </Link>
            <Link href="/shop" passHref>
                <Button variant="ghost" className="flex items-center gap-2 p-2 rounded-md transition-all dark:hover:bg-gray-700 hover:bg-orange-50">
                    <Image src="/points.svg" height={32} width={32} alt="Points" />
                    <span className="text-sm font-medium text-orange-500">{points}</span>
                </Button>
            </Link>
            <Link href="/shop" passHref>
                <Button variant="ghost" className="flex items-center gap-2 p-2 rounded-md transition-all dark:hover:bg-gray-700 hover:bg-rose-50">
                    <Image src="/heart.svg" height={24} width={24} alt="Hearts" />
                    {hasActiveSubscription ? (
                        <InfinityIcon className="h-5 w-5 text-rose-500" />
                    ) : (
                        <span className="text-sm font-medium text-rose-500">{hearts}</span>
                    )}
                </Button>
            </Link>
        </div>
    );
};