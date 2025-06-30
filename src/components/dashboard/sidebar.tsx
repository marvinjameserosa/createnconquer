"use client";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Building2,
  BarChart3,
  Users,
  CheckSquare,
  FileText,
  DollarSign,
  Package,
  Calendar,
  AlertTriangle,
  Clock,
  MessageSquare,
  Trophy,
  Brain,
  Handshake,
  Map,
  Shield,
  FileBarChart,
  TrendingUp,
  Settings,
  LogOut,
} from "lucide-react";
import { dashboardData, navigationData } from "@/lib/data";
import { UserProfileModal } from "@/components/modals/user-profile-modal";
import { SettingsModal } from "@/components/modals/settings-modal";

interface AppSidebarProps {
  activeTab: string;
}

export function AppSidebar({ activeTab }: AppSidebarProps) {
  const { user } = dashboardData;
  const xpProgress = (user.xp / user.nextLevelXp) * 100;

  const iconMap = {
    BarChart3,
    Building2,
    CheckSquare,
    Users,
    FileText,
    DollarSign,
    Package,
    Calendar,
    AlertTriangle,
    Clock,
    MessageSquare,
    Trophy,
    Brain,
    Handshake,
    Map,
    Shield,
    FileBarChart,
    TrendingUp,
    Settings,
  };

  return (
    <Sidebar className="border-r-0">
      <SidebarHeader className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="flex items-center space-x-2 p-4">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">SiteSight</span>
        </div>

        {/* User Profile */}
        <div className="p-4 space-y-4">
          <UserProfileModal />

          {/* XP Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Level {user.level}</span>
              <span className="font-semibold text-orange-400">
                {user.xp} XP
              </span>
            </div>
            <Progress value={xpProgress} className="h-2 bg-gray-700" />
            <div className="text-xs text-gray-500 text-center">
              {user.nextLevelXp - user.xp} XP to next level
            </div>
          </div>

          {/* Streak Badge */}
          <div className="flex items-center justify-center">
            <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0">
              🔥 {user.streak} day streak
            </Badge>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-gradient-to-b from-gray-900 to-gray-800">
        <ScrollArea className="h-full">
          {/* Main Navigation */}
          <SidebarGroup>
            <SidebarGroupLabel className="text-gray-500 uppercase tracking-wider">
              Main
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigationData.dashboard.main.map((item) => {
                  const Icon = iconMap[item.icon] || BarChart3;
                  const isActive = activeTab === item.name.toLowerCase();

                  return (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton
                        asChild
                        className={`${
                          isActive
                            ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`}
                      >
                        <a href={item.href}>
                          <Icon className="w-5 h-5" />
                          <span>{item.name}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Management */}
          <SidebarGroup>
            <SidebarGroupLabel className="text-gray-500 uppercase tracking-wider">
              Management
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigationData.dashboard.management.map((item) => {
                  const Icon = iconMap[item.icon] || CheckSquare;

                  return (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton
                        asChild
                        className="text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        <a href={item.href}>
                          <Icon className="w-5 h-5" />
                          <span>{item.name}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Reports */}
          <SidebarGroup>
            <SidebarGroupLabel className="text-gray-500 uppercase tracking-wider">
              Reports & Analytics
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigationData.dashboard.reports.map((item) => {
                  const Icon = iconMap[item.icon] || FileText;

                  return (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton
                        asChild
                        className="text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        <a href={item.href}>
                          <Icon className="w-5 h-5" />
                          <span>{item.name}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Tools */}
          <SidebarGroup>
            <SidebarGroupLabel className="text-gray-500 uppercase tracking-wider">
              Tools & Settings
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigationData.dashboard.tools.slice(0, -1).map((item) => {
                  const Icon = iconMap[item.icon] || Settings;

                  return (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton
                        asChild
                        className="text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        <a href={item.href}>
                          <Icon className="w-5 h-5" />
                          <span>{item.name}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
                <SidebarMenuItem>
                  <SettingsModal />
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </ScrollArea>
      </SidebarContent>

      <SidebarFooter className="bg-gradient-to-b from-gray-900 to-gray-800 border-t border-gray-700">
        <SidebarMenu>
          <SidebarMenuItem>
            <Dialog>
              <DialogTrigger asChild>
                <SidebarMenuButton className="text-gray-300 hover:text-red-400 hover:bg-gray-700">
                  <LogOut className="w-5 h-5" />
                  <span>Sign Out</span>
                </SidebarMenuButton>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Sign Out</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to sign out of your account?
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end space-x-2 pt-4">
                  <Button variant="outline">Cancel</Button>
                  <Button variant="destructive">Sign Out</Button>
                </div>
              </DialogContent>
            </Dialog>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
