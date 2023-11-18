"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { usePathname } from "next/navigation";
import { List, User } from "lucide-react";

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    {
      href: "/admin/members",
      text: "Members",
      Icon: User,
    },
    {
      href: "/admin/todo",
      text: "Todo",
      Icon: List,
    },
  ];

  return (
    <div className="space-y-5">
      {links.map((link, index) => {
        const Icon = link.Icon;
        return (
          <Link
            onClick={() => document.getElementById("sidebar-close")?.click()}
            href={link.href}
            key={index}
            className={cn("flex items-center gap-2 rounded-sm p-2", {
              " bg-blue-500 dark:bg-blue-700 text-white ":
                pathname === link.href,
            })}
          >
            <Icon size={20} />
            {link.text}
          </Link>
        );
      })}
    </div>
  );
}
