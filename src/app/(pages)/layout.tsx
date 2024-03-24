import SideBar from "@/components/SideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start justify-start mt-2">
      <div className="lg:block hidden lg:mt-14">
        <SideBar />
      </div>
      <div className="ml-0 lg:ml-60 w-full lg:mt-14">{children}</div>
    </div>
  );
};

export default Layout;
