import React from "react";
import NavLinks from "./NavLinks";

import { cn } from "@/src/lib/utils";
import SignOut from "./SignOut";
import Image from "next/image";

export default function SideNav() {
  return <SideBar className=" hidden lg:block dark:bg-graident-dark flex-1" />;
}

export const SideBar = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div
        className={cn(
          "h-full w-full lg:w-86 lg:p-10 space-y-5 lg:border-r flex flex-col "
        )}
      >
        <div className="flex-1 space-y-5">
          <div className="flex items-center gap-2 flex-1">
            <div className="flex flex-col">
              <Image
                className="admin-sidebar-logo"
                src="/circle-logo-moc.png"
                width={80}
                height={80}
                alt=""
              />
              <p className="admin-sidebar-logo-title-kh">ក្រសួងពាណិជ្ជកម្ម</p>
              <p className="admin-sidebar-logo-title-en">
                Ministry Of Commerce
              </p>
            </div>
          </div>
          <NavLinks />
        </div>
        <div className="">
          <SignOut />
        </div>
      </div>
    </div>
  );
};
