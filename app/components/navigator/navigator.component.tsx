'use client'

import type { Pathname } from "@/app/models";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  paths: Pathname[]
  className?: string
  linkClassName?: string
}


export function Navigator({ paths, className, linkClassName }: Props) {
  const currentPath = usePathname()

  return (
    <nav className={className}>
      {
        paths.map((path) => (
          <Link
            key={path.path}
            href={path.path}
            className={`${linkClassName} ${currentPath.startsWith(path.path) ? 'bg-white text-black' : ''}`}
          >{path.name}</Link>
        ))
      }
    </nav>
  )
}
