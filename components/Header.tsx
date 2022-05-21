import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Nav from "./Nav";
import NavItem from "./NavItem";

const Header = () => {
  const router = useRouter();

  return (
    <header className="bg-purple-500">
      <Nav>
          <li className="py-1 text-lg text-white mr-10">
            <Link href="/" >Chris Gillis . net</Link>
          </li>
          <NavItem isActive={router.pathname.includes('/writing')} href="/writing">Writing</NavItem>
          <NavItem isActive={router.pathname.includes('/opensource')} href="/opensource">Open Source</NavItem>
          <NavItem isActive={router.pathname.includes('/projects')} href="/projects">Projects</NavItem>
      </Nav>
    </header>
  );
};

export default Header;