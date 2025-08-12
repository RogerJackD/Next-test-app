import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"

const navItems = [
  { path : '/about', text : 'About' },
  { path : '/pricing', text : 'Pricing' },
  { path : '/contact', text : 'Contact' },
]
export const Navbar = () => {
  return (
    <nav className="flex bg-blue-950 bg-opacity-30 p-2 m-2 rounded text-2xl">

        <Link href={'/'} className="flex items-center">
          <HomeIcon className="mr-2"/>
          <span>Home</span>
        </Link>

        
        <div className="flex justify-end w-full">

          {
            navItems.map( navItem => (
              <ActiveLink key={ navItem.path } { ...navItem } />
            ))
          }
        </div>

    </nav>
  )
}
