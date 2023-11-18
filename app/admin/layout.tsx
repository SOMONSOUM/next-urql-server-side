import React, { ReactNode } from "react";
import SideNav from "@/src/components/SideNav";
import MobileSideNav from "@/src/components/MobileSideNav";
import ToggleSidebar from "@/src/components/ToggleSidebar";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-full flex ">
      <div className="h-screen flex flex-col">
        <SideNav />
        <MobileSideNav />
      </div>

      <div className="w-full sm:flex-1 p-5 sm:p-10 space-y-5 bg-gray-100 dark:bg-inherit">
        <ToggleSidebar />
        {children}
      </div>
    </div>
  );
}
