"use client";

import { Button } from "@/src/components/ui/button";
import React from "react";
import { Menu } from "lucide-react";
export default function ToggleSidebar() {
  return (
    <Button
      variant="outline"
      className="block lg:hidden"
      onClick={() => document.getElementById("toggle-sidebar")?.click()}
    >
      <Menu />
    </Button>
  );
}
