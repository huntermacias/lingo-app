import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";


type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  return (
    <div className="sticky top-0 z-50 bg-secondary shadow-md flex items-center rounded-md justify-between border-b-2 border-gray-200 dark:border-gray-700 mb-5 lg:py-5 transition-colors duration-300">
      <Link href="/courses" passHref
        className="inline-flex items-center justify-center p-2 lg:p-3 rounded-full text-neutral-400 hover:text-neutral-500 dark:hover:text-neutral-300 transition-colors duration-300">
          <ArrowLeft className="h-5 w-5 stroke-current" />
        
      </Link>
      <h1 className="text-xl lg:text-2xl font-semibold text-neutral-800 dark:text-neutral-800 transition-colors duration-300">
        {title}
      </h1>
      <div className="w-8 lg:w-10" /> 
    </div>
  );
};