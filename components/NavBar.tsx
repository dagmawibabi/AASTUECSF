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
    <div className="flex justify-between mt-4 absolute w-full">
      <Image src={Logo} alt="ecsfLogo" />
      <div className="text-white basis-1/3 flex p-7 text-lg space-x-4">
        {navLinks.map((link, i) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={i}
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

export default NavBar;
