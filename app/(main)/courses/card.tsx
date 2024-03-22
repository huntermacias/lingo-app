import Image from "next/image";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


type Props = {
  title: string;
  id: number;
  imageSrc: string;
  onClick: (id: number) => void;
  disabled?: boolean;
  active?: boolean;
};

export const CustomCard = ({
  title,
  id,
  imageSrc,
  disabled,
  onClick,
  active,
}: Props) => {
  return (
    <Card onClick={() => onClick(id)}
      className={cn(
        "flex flex-col justify-between h-full w-full min-w-[250px] max-w-xs mx-auto bg-white dark:bg-[#1e1e1e]/5 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl shadow-md transform hover:-translate-y-1 transition-transform duration-300 ease-in-out",
        { "cursor-pointer": !disabled, "opacity-50": disabled },
        { "ring-2 ring-gray-300 hover:bg-gray-200 active:border-b-2": !disabled }
      )}
    >
      <div className="absolute top-6 right-4 flex justify-end items-start">
        {active && (
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-600">
            <Check className="text-white stroke-[3] h-5 w-5" />
          </div>
        )}
      </div>
      <div className="flex-grow p-4">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-blue-500">{title}</CardTitle>
          <CardDescription className="text-md text-gray-600 dark:text-gray-400 mt-2">Introduction to {title}</CardDescription>
        </CardHeader>
        <CardContent className="mt-4">
          <Image
            src={imageSrc}
            alt={title}
            height={70}
            width={93.33}
            className="rounded-lg object-cover w-full h-48"
          />
        </CardContent>
      </div>
      <CardFooter className="p-4 w-full bg-gray-100 dark:bg-gray-950/40 border-t rounded-b-xl">
        <p className="text-sm text-center text-gray-600 dark:text-gray-300">Start learning {title} today!</p>
      </CardFooter>
    </Card>

  );
};