"use client"
import React from 'react';
import { usePathname, useRouter } from "next/navigation";
import Link from 'next/link';

const Navbar = () => {
    const pathName = usePathname()
const router =useRouter()
const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "about",
    href: "/about",
  },
  {
    title: "services",
    href: "/services",
  },
  {
    title: "contact",
    href: "/contact",
  },
  {
    title: "blogs",
    href: "/blogs"
  }
];
const handler =( )=>{
  router.push('/login')
}
if (pathName.includes('/dashboard')){
  return <div className='nav bg-green-400 px-3 py-4'>Dashboard navbar</div>
}
    return (
        <nav className="flex justify-between mx-28 bg-red-500 px-4 py-6">
        <h6>logo</h6>
        <ul className="flex justify-around gap-2">
          {links.map((link) => (
            <li className={pathName === link.href ? 'text-yellow-500' : " "} key={link.href}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <button onClick={handler}>Log in</button>
      </nav>
    );
};

export default Navbar;