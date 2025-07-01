"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { dashboardData } from "@/lib/data";

export function UserProfileModal() {
  const { user } = dashboardData;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded-lg transition-colors">
          <Avatar className="w-12 h-12 border-2 border-orange-500">
            <AvatarImage
              src={user.avatar || "/placeholder.svg"}
              alt={user.name}
            />
            <AvatarFallback className="bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="font-semibold text-white">{user.name}</div>
            <div className="text-sm text-gray-400">{user.role}</div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="!sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>User Profile</DialogTitle>
          <DialogDescription>
            View and edit your profile information
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center justify-center">
            <Avatar className="w-24 h-24 border-4 border-orange-200">
              <AvatarImage
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
              />
              <AvatarFallback className="bg-gradient-to-br from-orange-500 to-orange-600 text-white text-2xl font-bold">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue={user.name} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="role" className="text-right">
              Role
            </Label>
            <Input id="role" defaultValue={user.role} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              defaultValue="john.smith@sitesight.com"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Phone
            </Label>
            <Input
              id="phone"
              defaultValue="+1 (555) 123-4567"
              className="col-span-3"
            />
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Level {user.level}</span>
              <span className="text-orange-600 font-bold">{user.xp} XP</span>
            </div>
            <Progress
              value={(user.xp / user.nextLevelXp) * 100}
              className="h-2"
            />
            <div className="text-sm text-gray-600 mt-1">
              {user.nextLevelXp - user.xp} XP to next level
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-orange-500 hover:bg-orange-600">
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
