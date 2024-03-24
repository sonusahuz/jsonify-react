import SideBar from "@/components/SideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start justify-start mt-2">
      <div className="lg:block hidden">
        <SideBar />
      </div>
      <div className="lg:ml-60 ml-0 mt-2">{children}</div>
    </div>
  );
};

export default Layout;
