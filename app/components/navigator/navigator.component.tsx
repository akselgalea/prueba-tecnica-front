import type { Pathname } from "@/app/models";
import Link from "next/link";

interface Props {
  paths: Pathname[]
  className?: string
}


export function Navigator({ paths, className }: Props) {
  return (
    <nav className={className}>
      {
        paths.map((path) => (
          <Link key={path.path} href={path.path}>{path.name}</Link>
        ))
      }
    </nav>
  )
}