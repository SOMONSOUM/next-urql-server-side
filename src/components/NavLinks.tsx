"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronUp,
  LayoutDashboard,
  List,
  User,
} from "lucide-react";

export default function NavLinks() {
  const pathname = usePathname();
  const [expandedLink, setExpandedLink] = useState<number | null>(null);

  const links = [
    {
      href: "/admin",
      text: "Dashboard",
      Icon: LayoutDashboard,
    },
    {
      href: "/admin/members",
      text: "Members",
      Icon: User,
      subLinks: [
        {
          href: "/admin/members",
          text: "All Members",
        },
        {
          href: "/admin",
          text: "Active Members",
        },
      ],
    },
    {
      href: "/admin/todo",
      text: "Todo",
      Icon: List,
    },
  ];

  const handleLinkClick = (index: number | null) => {
    setExpandedLink(expandedLink === index ? null : index);
  };

  return (
    <div className="space-y-5">
      {links.map((link, index) => {
        const Icon = link.Icon;
        const isLinkActive = pathname === link.href;
        const isExpanded = expandedLink === index;

        return (
          <div key={index} className="space-y-2">
            <Link
              onClick={() => {
                document.getElementById("sidebar-close")?.click(),
                  handleLinkClick(index);
              }}
              href={link.href}
              className={cn("flex items-center gap-2 rounded-sm p-2", {
                " bg-blue-500 dark:bg-blue-700 text-white ": isLinkActive,
                "hover:bg-slate-100 dark:hover:bg-blue-600": !isLinkActive,
              })}
            >
              <Icon size={20} />
              {link.text}
              {link.subLinks && (
                <div>
                  {isLinkActive && isExpanded ? <ChevronUp /> : <ChevronDown />}
                </div>
              )}
            </Link>
            {link.subLinks && pathname === link.href && isExpanded && (
              <div className="pl-2 space-y-2">
                {link.subLinks.map((subLink, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subLink.href}
                    className={cn("flex items-center gap-2 rounded-sm p-2", {
                      " bg-blue-500 dark:bg-blue-700 text-white ":
                        pathname === subLink.href,
                      "hover:bg-slate-100 dark:hover:bg-blue-600":
                        pathname !== subLink.href,
                    })}
                  >
                    {subLink.text}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
