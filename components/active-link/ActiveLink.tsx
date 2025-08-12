'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    path : string;
    text : string;
}

export const ActiveLink = ({ path, text }: Props) => {

  const pathName = usePathname(); 
  console.log('xd', pathName) 

  return (
    <>
        <Link className={ `${ "link" } ${ (pathName === path) && "activeLink" } ` } 
            href={ path }>
                { text }
        </Link>
    </>
  )
}
