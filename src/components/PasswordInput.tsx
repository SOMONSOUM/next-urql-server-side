"use client";

import * as React from "react";
import { Eye, ShieldCheck, EyeOff } from "lucide-react";
import { useState } from "react";

import { Input, InputProps } from "./ui/input";
import { cn } from "../lib";

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [open, setOpen] = useState<boolean>(false);

    const toggle = () => setOpen((open) => !open);

    return (
      <div className="relative">
        <span className="absolute start-0 flex h-10 items-center px-3 text-muted-foreground">
          <ShieldCheck size={20} />
        </span>
        <label
          className="absolute end-0 flex h-10 cursor-pointer items-center px-3 text-muted-foreground"
          onClick={toggle}
        >
          <span className="rounded-full p-1 transition duration-200 hover:bg-slate-200 focus:ring-2">
            {!open && <Eye size={20} />}
            {open && <EyeOff size={20} />}
          </span>
        </label>
        <Input
          type={open ? "text" : "password"}
          placeholder="Enter password..."
          className={cn("px-10 text-slate-600", className)}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
