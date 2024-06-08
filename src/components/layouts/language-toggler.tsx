'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Icons } from '../ui/icons'

export const LanguageToggler = ({ pathname }: { pathname?: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="trueGhost" size="icon" aria-label="theme-toggler">
          <Icons.languages className="h-7 w-7 " />
          <span className="sr-only">Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="relative z-[100] rounded-none border-none border-transparent bg-nier-light-100 p-0 dark:border-transparent dark:bg-nier-light-100"
      >
        <div className="mx-1 mb-1 mt-1 h-[1px] bg-nier-light-800 opacity-70" />
        <Link
          href={`/en/${pathname ?? ''}`}
          className="group hover:animate-pulse"
        >
          <span className="pointer-events-none my-1 block h-[2px] w-full bg-nier-light-800 opacity-0 group-hover:opacity-100" />
          <DropdownMenuItem
            role="english-toggle"
            className="relative text-nier-light-900 duration-700 ease-in-out focus:bg-transparent focus:text-nier-light-100 dark:focus:bg-transparent dark:focus:text-nier-light-100"
          >
            <span className="absolute bottom-0 left-0 right-0 top-0 h-full w-0 bg-nier-light-800 transition-all duration-500 ease-in-out group-hover:w-full" />
            <span className="relative z-10">English</span>
          </DropdownMenuItem>
          <span className="pointer-events-none my-1 block h-[2px] w-full bg-nier-light-800 opacity-0 group-hover:opacity-100" />
        </Link>
        <Link
          href={`/pt-br/${pathname ?? ''}`}
          className="group hover:animate-pulse"
        >
          <span className="pointer-events-none my-1 block h-[2px] w-full bg-nier-light-800 opacity-0 group-hover:opacity-100" />
          <DropdownMenuItem
            role="english-toggle"
            className="relative text-nier-light-900 duration-700 ease-in-out focus:bg-transparent focus:text-nier-light-100 dark:focus:bg-transparent dark:focus:text-nier-light-100"
          >
            <span className="absolute bottom-0 left-0 right-0 top-0 h-full w-0 bg-nier-light-800 transition-all duration-500 ease-in-out group-hover:w-full" />
            <span className="relative z-10">Portuguese</span>
          </DropdownMenuItem>
          <span className="pointer-events-none my-1 block h-[2px] w-full bg-nier-light-800 opacity-0 group-hover:opacity-100" />
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
