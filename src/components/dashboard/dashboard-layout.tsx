"use client";

import type React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./sidebar";
import { TopBar } from "./top-bar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeTab?: string;
}

export function DashboardLayout({
  children,
  activeTab = "dashboard",
}: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar activeTab={activeTab} />
      <SidebarInset>
        <TopBar />
        <ScrollArea className="h-[calc(100vh-4rem)]">
          <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  );
}
