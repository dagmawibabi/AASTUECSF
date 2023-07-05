"use client";

import Image from "next/image";
import Logo from "@/public/ecsfLogo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import useNav from "@/hooks/useNav";
import { MenuIcon } from "./Icons";

type Props = {
  navLinks: linkDesc[];
};

type linkDesc = {
  href: string;
  text: string;
};

const NavBar: React.FC<Props> = ({ navLinks }) => {
  const pathname = usePathname();
  const isMobile = useNav(1007);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <>
      <nav className="absolute top-0 mt-4 flex w-full justify-between overflow-hidden px-8">
        <Link href="/">
          <Image src={Logo} alt="ecsfLogo" width={200} />
        </Link>
        {isMobile && (
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon />
          </button>
        )}
        {!isMobile && (
          <div className="flex space-x-4 p-7 text-lg text-white">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={i}
                  className={`decoration-cyan-400 decoration-4 hover:underline ${
                    isActive ? "underline" : ""
                  }`}
                  href={link.href}
                >
                  {link.text}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
      {isMenuOpen && (
        <div className="absolute top-24 flex w-full flex-col gap-4 bg-[#1B1A1A] text-white">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={i}
                className={`p-4 text-center ${isActive ? "bg-[#292828]" : ""}`}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default NavBar;
