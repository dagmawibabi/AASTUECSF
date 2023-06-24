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

export const NavBar: React.FC<Props> = ({ navLinks }) => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between bg-gradient-to-b from-black to-transparent mt-4">
      <Image src={Logo} alt="ecsfLogo" />
      <div className="text-white basis-1/3 flex justify-evenly p-7 text-lg">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              className={`hover:underline decoration-cyan-400 decoration-4 ${
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
