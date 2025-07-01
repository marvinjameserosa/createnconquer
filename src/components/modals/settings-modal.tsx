"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { Settings } from "lucide-react";

export function SettingsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SidebarMenuButton className="text-gray-300 hover:bg-gray-700 hover:text-white">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </SidebarMenuButton>
      </DialogTrigger>
      <DialogContent className="!sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Manage your account settings and preferences
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Notifications</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-notifications">
                    Email Notifications
                  </Label>
                  <input
                    type="checkbox"
                    id="email-notifications"
                    defaultChecked
                    className="rounded"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="push-notifications">Push Notifications</Label>
                  <input
                    type="checkbox"
                    id="push-notifications"
                    defaultChecked
                    className="rounded"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="sms-notifications">SMS Notifications</Label>
                  <input
                    type="checkbox"
                    id="sms-notifications"
                    className="rounded"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Appearance</h3>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="theme">Theme</Label>
                  <Select defaultValue="light">
                    <SelectTrigger className="w-full mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="language">Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger className="w-full mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Privacy</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="profile-visibility">Public Profile</Label>
                  <input
                    type="checkbox"
                    id="profile-visibility"
                    defaultChecked
                    className="rounded"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="activity-tracking">Activity Tracking</Label>
                  <input
                    type="checkbox"
                    id="activity-tracking"
                    defaultChecked
                    className="rounded"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Security</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full bg-transparent">
                  Change Password
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Two-Factor Authentication
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Download Data
                </Button>
              </div>
            </div>
          </div>
        </ScrollArea>
        <div className="flex justify-end space-x-2 pt-4">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-orange-500 hover:bg-orange-600">
            Save Settings
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
