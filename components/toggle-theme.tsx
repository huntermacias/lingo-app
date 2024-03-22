"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoonIcon, SunIcon } from "lucide-react"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" className="relative bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-xl transition-all">
          <SunIcon className="h-6 w-6 text-yellow-500 transform transition-transform duration-500 ease-in-out dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-6 w-6 text-indigo-500 transform transition-transform duration-500 ease-in-out rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white dark:bg-gray-800 shadow-lg rounded-md py-1 mt-2 border border-gray-200 dark:border-gray-700">
        <DropdownMenuItem className="px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 ease-in-out" onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem className="px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 ease-in-out" onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem className="px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 ease-in-out" onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
  
}
