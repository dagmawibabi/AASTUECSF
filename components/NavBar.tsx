"use client";

import Image from "next/image";
import Logo from "@/public/ecsfLogo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  navLinks: linkDesc[];
};

type linkDesc = {
  href: string;
  text: string;
};

const NavBar: React.FC<Props> = ({ navLinks }) => {
  const pathname = usePathname();

  return (
    <div className="absolute mt-4 flex w-full justify-between">
      <Image src={Logo} alt="ecsfLogo" />
      <div className="flex basis-1/3 space-x-4 p-7 text-lg text-white">
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
    </div>
  );
};

export default NavBar;
