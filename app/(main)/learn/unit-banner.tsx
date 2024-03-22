import Link from "next/link";
import { NotebookText } from "lucide-react";

import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  description: string;
};

export const UnitBanner = ({
  title,
  description,
}: Props) => {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-gradient-to-r from-green-500 to-teal-500 p-6 text-white flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <NotebookText className="w-12 h-12" />
        <div className="space-y-1">
          <h3 className="text-xl lg:text-2xl font-bold tracking-tight">
            {title}
          </h3>
          <p className="text-md lg:text-lg">
            {description}
          </p>
        </div>
      </div>
      <Link href="/lesson" passHref
        className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all ease-in-out">
          <span className="font-semibold">Continue</span>
          <NotebookText className="ml-2 w-6 h-6" />
        
      </Link>
    </div>
  );
};