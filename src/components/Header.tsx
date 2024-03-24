import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <div className="flex items-center justify-between lg:fixed py-4 w-full bg-white ">
        <div>
          <h1 className="text-2xl font-bold cursor-pointer">
            <Link href="/">JSONify</Link>
          </h1>
        </div>
        <div className="lg:mr-24 ">
          <ul className="flex space-x-4">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/docs"}>Docs</Link>
            </li>
            <li>
              <a
                href={"https://github.com/sonusahuz/jsonify-react"}
                target={"_blank"}
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      {children}
    </div>
  );
};

export default Header;
