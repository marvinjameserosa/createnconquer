"use client";

import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search, Home } from "lucide-react";
import { NotificationsModal } from "@/components/modals/notifications-modal";

export function TopBar() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-white">
      <SidebarTrigger className="-ml-1" />
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-600">
          Welcome back! Here&apos;s what&apos;s happening with your projects.
        </p>
      </div>

      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="hidden md:flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2 border border-gray-200">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search projects, tasks..."
            className="bg-transparent border-none outline-none text-sm w-64 placeholder-gray-500"
          />
        </div>

        {/* Notifications */}
        <NotificationsModal />

        {/* Back to Landing */}
        <Button
          variant="outline"
          className="hidden md:flex items-center space-x-2 border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
          onClick={() => (window.location.href = "/")}
        >
          <Home className="w-4 h-4" />
          <span>Back to Site</span>
        </Button>
      </div>
    </header>
  );
}
