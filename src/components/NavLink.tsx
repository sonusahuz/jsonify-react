"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({
  children,
  href,
  key,
}: {
  children: React.ReactNode;
  href: string;
  key: string;
}) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      key={key}
      className={`hover:text-green-500 hover:underline text-sm ${
        path === href ? "text-green-500" : null
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
