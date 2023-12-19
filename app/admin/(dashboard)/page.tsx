import { Search } from "@/src/components/Search";
import React from "react";

export default function Dashboard() {
  return (
    <div className="space-y-5 w-full px-3">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <Search />
    </div>
  );
}
