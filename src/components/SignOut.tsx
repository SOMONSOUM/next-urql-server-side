"use client";

import { Button } from "@/src//components/ui/button";
import { cn } from "@/src/lib/utils";
import { Loader, LogOut } from "lucide-react";
import React, { useTransition } from "react";
import Logout from "../actions/mutation";

export default function SignOut() {
  const [isPending, startTransition] = useTransition();
  const onSubmit = async () => {
    startTransition(() => Logout());
  };

  return (
    <form action={onSubmit}>
      <Button className="w-full flex items-center gap-2" variant="destructive">
        SignOut <LogOut size={20} />
        <Loader className={cn("animate-spin", { hidden: !isPending })} />
      </Button>
    </form>
  );
}
