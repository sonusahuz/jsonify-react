import { sidebarData } from "@/utils";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const SideBar = () => {
  return (
    <div className="space-y-6 overflow-scroll h-screen w-48 fixed ">
      {sidebarData.map((item) => (
        <div key={item.id}>
          <h1 className="text-xl font-bold">
            <NavLink href={item.href} key={item.id}>
              {item.title}
            </NavLink>
          </h1>
          <ul className="space-y-1 flex flex-col">
            {item.links.map((pro) => (
              <NavLink href={pro.href} key={pro.id}>
                {pro.label}
              </NavLink>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
