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
import { Bell } from "lucide-react";

export function NotificationsModal() {
  const notifications = [
    {
      id: 1,
      title: "Task Completed",
      message: "HVAC Installation - Floor 2 has been completed by Mike Johnson",
      time: "2 hours ago",
      type: "success",
      read: false,
    },
    {
      id: 2,
      title: "Budget Alert",
      message: "Downtown Office Complex is approaching 90% budget utilization",
      time: "4 hours ago",
      type: "warning",
      read: false,
    },
    {
      id: 3,
      title: "Inspection Scheduled",
      message: "Safety inspection scheduled for tomorrow at 9:00 AM",
      time: "6 hours ago",
      type: "info",
      read: true,
    },
    {
      id: 4,
      title: "Material Delivered",
      message: "Steel beams have been delivered to Residential Tower A",
      time: "1 day ago",
      type: "success",
      read: true,
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative hover:bg-gray-100"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
        </Button>
      </DialogTrigger>
      <DialogContent className="!sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Notifications</DialogTitle>
          <DialogDescription>
            Stay updated with your latest project activities
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg border ${
                  notification.read
                    ? "bg-gray-50"
                    : "bg-blue-50 border-blue-200"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">
                      {notification.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      {notification.time}
                    </p>
                  </div>
                  {!notification.read && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="flex justify-end space-x-2 pt-4">
          <Button variant="outline">Mark All Read</Button>
          <Button className="bg-orange-500 hover:bg-orange-600">
            View All
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
