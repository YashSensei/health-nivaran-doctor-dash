import { Calendar, Clock, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";

const timeSlots = [
  { time: "09:00 AM", available: true, booked: true, patient: "Sunita Devi" },
  { time: "09:30 AM", available: true, booked: true, patient: "Rajesh Kumar Singh" },
  { time: "10:00 AM", available: true, booked: false },
  { time: "10:30 AM", available: true, booked: true, patient: "Rahul Gupta" },
  { time: "11:00 AM", available: true, booked: false },
  { time: "11:30 AM", available: false, booked: false },
  { time: "12:00 PM", available: false, booked: false },
  { time: "02:00 PM", available: true, booked: true, patient: "Meena Kumari" },
  { time: "02:30 PM", available: true, booked: true, patient: "Priya Sharma" },
  { time: "03:00 PM", available: true, booked: true, patient: "Vikram Singh" },
  { time: "03:30 PM", available: true, booked: false },
  { time: "04:00 PM", available: true, booked: false },
];

export const ScheduleManager = ({ onModifyHours }: { onModifyHours?: () => void }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Schedule Manager</h1>
          <p className="text-sm text-gray-600 mt-1">Manage your availability and consultation hours</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Settings className="h-4 w-4 mr-2" />
          Update Availability
        </Button>
      </div>

      {/* Schedule Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-base">
                <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                Today's Schedule - January 25, 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((slot, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      !slot.available
                        ? "bg-gray-100 border-gray-200 text-gray-400"
                        : slot.booked
                        ? "bg-blue-50 border-blue-200 text-blue-700"
                        : "bg-green-50 border-green-200 text-green-700 cursor-pointer hover:bg-green-100"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{slot.time}</span>
                      <span className="text-xs">
                        {!slot.available
                          ? "Unavailable"
                          : slot.booked
                          ? "Booked"
                          : "Available"}
                      </span>
                    </div>
                    {slot.patient && (
                      <p className="text-sm mt-1 font-medium">{slot.patient}</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Schedule Settings */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-base">
                <Clock className="h-4 w-4 mr-2 text-blue-600" />
                Consultation Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-900">Morning Session</p>
                <p className="text-xs text-gray-600">09:00 AM - 12:00 PM</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Afternoon Session</p>
                <p className="text-xs text-gray-600">02:00 PM - 04:30 PM</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Slot Duration</p>
                <p className="text-xs text-gray-600">30 minutes per appointment</p>
              </div>
              <Button variant="outline" className="w-full" onClick={onModifyHours}>
                Modify Hours
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Block Time Slot
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Clock className="h-4 w-4 mr-2" />
                Add Break Time
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Settings className="h-4 w-4 mr-2" />
                Emergency Closure
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
