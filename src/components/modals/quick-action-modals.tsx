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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download } from "lucide-react";

export function CreateTaskModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          className="text-xs bg-orange-500 hover:bg-orange-600 text-white"
        >
          Create Task
        </Button>
      </DialogTrigger>
      <DialogContent className="!sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
          <DialogDescription>Add a new task to your project</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task-title" className="text-right">
              Title
            </Label>
            <Input
              id="task-title"
              placeholder="Enter task title"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task-project" className="text-right">
              Project
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select project" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="office">Downtown Office Complex</SelectItem>
                <SelectItem value="tower">Residential Tower A</SelectItem>
                <SelectItem value="mall">Shopping Mall Renovation</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task-assignee" className="text-right">
              Assignee
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select assignee" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="john">John Smith</SelectItem>
                <SelectItem value="sarah">Sarah Wilson</SelectItem>
                <SelectItem value="mike">Mike Johnson</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task-priority" className="text-right">
              Priority
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task-due" className="text-right">
              Due Date
            </Label>
            <Input id="task-due" type="date" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task-description" className="text-right">
              Description
            </Label>
            <Textarea
              id="task-description"
              placeholder="Task description"
              className="col-span-3"
              rows={3}
            />
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-orange-500 hover:bg-orange-600">
            Create Task
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ScheduleInspectionModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          className="text-xs bg-orange-500 hover:bg-orange-600 text-white"
        >
          Schedule
        </Button>
      </DialogTrigger>
      <DialogContent className="!sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Schedule Inspection</DialogTitle>
          <DialogDescription>
            Plan a safety or quality inspection
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="inspection-type" className="text-right">
              Type
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select inspection type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="safety">Safety Inspection</SelectItem>
                <SelectItem value="quality">Quality Check</SelectItem>
                <SelectItem value="compliance">Compliance Audit</SelectItem>
                <SelectItem value="final">Final Inspection</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="inspection-project" className="text-right">
              Project
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select project" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="office">Downtown Office Complex</SelectItem>
                <SelectItem value="tower">Residential Tower A</SelectItem>
                <SelectItem value="mall">Shopping Mall Renovation</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="inspection-inspector" className="text-right">
              Inspector
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select inspector" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="john-safety">John Safety</SelectItem>
                <SelectItem value="mary-quality">Mary Quality</SelectItem>
                <SelectItem value="bob-compliance">Bob Compliance</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="inspection-date" className="text-right">
              Date
            </Label>
            <Input id="inspection-date" type="date" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="inspection-time" className="text-right">
              Time
            </Label>
            <Input id="inspection-time" type="time" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="inspection-notes" className="text-right">
              Notes
            </Label>
            <Textarea
              id="inspection-notes"
              placeholder="Additional notes"
              className="col-span-3"
              rows={3}
            />
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-orange-500 hover:bg-orange-600">
            Schedule Inspection
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function OrderMaterialsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          className="text-xs bg-orange-500 hover:bg-orange-600 text-white"
        >
          Order Now
        </Button>
      </DialogTrigger>
      <DialogContent className="!sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Order Materials</DialogTitle>
          <DialogDescription>
            Create a new procurement request
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] pr-4">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="material-item" className="text-right">
                Item
              </Label>
              <Input
                id="material-item"
                placeholder="Material name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="material-quantity" className="text-right">
                Quantity
              </Label>
              <Input
                id="material-quantity"
                type="number"
                placeholder="0"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="material-unit" className="text-right">
                Unit
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tons">Tons</SelectItem>
                  <SelectItem value="cubic-meters">Cubic Meters</SelectItem>
                  <SelectItem value="pieces">Pieces</SelectItem>
                  <SelectItem value="liters">Liters</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="material-supplier" className="text-right">
                Supplier
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select supplier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="metalcorp">MetalCorp Inc</SelectItem>
                  <SelectItem value="concretepro">ConcretePro</SelectItem>
                  <SelectItem value="steelworks">SteelWorks Ltd</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="material-project" className="text-right">
                Project
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select project" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="office">
                    Downtown Office Complex
                  </SelectItem>
                  <SelectItem value="tower">Residential Tower A</SelectItem>
                  <SelectItem value="mall">Shopping Mall Renovation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="material-delivery" className="text-right">
                Delivery Date
              </Label>
              <Input
                id="material-delivery"
                type="date"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="material-budget" className="text-right">
                Budget
              </Label>
              <Input
                id="material-budget"
                type="number"
                placeholder="0.00"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="material-notes" className="text-right">
                Notes
              </Label>
              <Textarea
                id="material-notes"
                placeholder="Special requirements"
                className="col-span-3"
                rows={3}
              />
            </div>
          </div>
        </ScrollArea>
        <div className="flex justify-end space-x-2 pt-4">
          <Button variant="outline">Save Draft</Button>
          <Button className="bg-orange-500 hover:bg-orange-600">
            Submit Order
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function GenerateReportModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          className="text-xs bg-orange-500 hover:bg-orange-600 text-white"
        >
          Generate
        </Button>
      </DialogTrigger>
      <DialogContent className="!sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Generate Report</DialogTitle>
          <DialogDescription>
            Create a custom report for stakeholders
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="report-type" className="text-right">
              Report Type
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select report type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="progress">Progress Report</SelectItem>
                <SelectItem value="budget">Budget Analysis</SelectItem>
                <SelectItem value="safety">Safety Report</SelectItem>
                <SelectItem value="executive">Executive Summary</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="report-project" className="text-right">
              Project
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select project" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Projects</SelectItem>
                <SelectItem value="office">Downtown Office Complex</SelectItem>
                <SelectItem value="tower">Residential Tower A</SelectItem>
                <SelectItem value="mall">Shopping Mall Renovation</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="report-period" className="text-right">
              Period
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="report-format" className="text-right">
              Format
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="excel">Excel</SelectItem>
                <SelectItem value="powerpoint">PowerPoint</SelectItem>
                <SelectItem value="email">Email Summary</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-3">
            <Label>Include Sections</Label>
            <div className="space-y-2">
              {[
                "Executive Summary",
                "Progress Overview",
                "Budget Analysis",
                "Team Performance",
                "Risk Assessment",
                "Next Steps",
              ].map((section) => (
                <div key={section} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={section}
                    defaultChecked
                    className="rounded"
                  />
                  <Label htmlFor={section} className="text-sm">
                    {section}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <Button variant="outline">Preview</Button>
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Download className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
