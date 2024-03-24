import { sidebarData } from "@/utils";
import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className="space-y-6 overflow-scroll h-screen w-56 fixed">
      {sidebarData.map((item) => (
        <div key={item.id}>
          <h1 className="text-xl font-medium">
            <Link href={item.href}>{item.title}</Link>
          </h1>
          <ul className="space-y-1 flex flex-col">
            {item.links.map((pro) => (
              <Link href={pro.href} key={pro.id}>
                {pro.label}
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
