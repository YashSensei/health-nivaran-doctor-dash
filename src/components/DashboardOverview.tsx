import React, { useState } from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/card";
import { notifications as notificationsData } from "@/components/Notifications";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const summaryCards = [
  {
    title: "Appointments",
    value: "24",
    change: "+5.11%",
    icon: "briefcase",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-500",
  },
  {
    title: "Hours",
    value: "1hr",
    change: "+7.11%",
    icon: "clock",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    title: "Surgery",
    value: "02",
    change: "+5.11%",
    icon: "surgery",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
];

const appointments = [
  { visit: "#876364", name: "Jayarajan kp", gender: "Male", reason: "Monthly checkup" },
  { visit: "#348745", name: "Varun P", gender: "Male", reason: "Consultation" },
  { visit: "#234856", name: "Nithya P", gender: "Female", reason: "Monthly checkup" },
  { visit: "#542374", name: "Jithesh", gender: "Male", reason: "Monthly checkup" },
  { visit: "#097345", name: "Vibha Ak", gender: "Female", reason: "Monthly checkup" },
  { visit: "#123745", name: "Manushi Pl", gender: "Female", reason: "Checkup" },
  { visit: "#382745", name: "Hari Raj", gender: "Male", reason: "Monthly checkup" },
  { visit: "#187345", name: "Ravi Prasadh", gender: "Male", reason: "Monthly checkup" },
];

const schedule = [
  { time: "8:00", title: "Consultation Abdul Nishan", patient: null },
  { time: "8:20", title: "Consultation Adamu", patient: null },
  { time: "8:30", title: "Consultation Vibha", patient: { name: "Vibha Jayarajan", time: "8:30 - 9:00", purpose: "General check-up" } },
  { time: "9:00", title: "Consultation Abayomi Johnson", patient: null },
  { time: "9:30", title: "Rebecca Gifts", patient: null },
  { time: "10:00", title: "ERC Report", patient: null },
  { time: "10:30", title: "Consolation meeting", patient: null },
  { time: "11:00", title: "Victory Jones", patient: null },
  { time: "11:30", title: "Board meeting", patient: null },
  { time: "12:00", title: "Consultation", patient: null },
  { time: "12:30", title: "Team meeting", patient: null },
  { time: "12:40", title: "Break", patient: null },
  { time: "12:50", title: "Board meeting", patient: null },
];

export const DashboardOverview = () => {
  const [selectedSchedule, setSelectedSchedule] = useState(2);
  const unreadNotifications = notificationsData.filter(n => n.unread);

  // Demo auth state
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const doctorName = "Dr. Sarah Johnson";

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-xl font-bold text-blue-900">Today – May 25th</div>
        <div className="flex items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <button className="relative p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-100">
                <BellIcon className="h-5 w-5 text-blue-500" />
                {unreadNotifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">
                    {unreadNotifications.length}
                  </span>
                )}
              </button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="p-4 border-b font-semibold text-blue-900">New Notifications</div>
              <div className="max-h-80 overflow-y-auto">
                {unreadNotifications.length === 0 ? (
                  <div className="p-4 text-gray-500 text-sm">No new notifications</div>
                ) : (
                  unreadNotifications.map((n) => (
                    <div key={n.id} className="flex items-start gap-3 p-4 border-b last:border-b-0 hover:bg-gray-50">
                      <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                        <n.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm text-gray-900">{n.title}</div>
                        <div className="text-xs text-gray-700 mt-1">{n.message}</div>
                        <div className="text-xs text-gray-400 mt-1">{n.time}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </PopoverContent>
          </Popover>
          {/* Auth logic */}
          {isLoggedIn ? (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="font-semibold text-blue-900 px-4">
                  {doctorName}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-40 p-2">
                <div className="text-sm mb-2">Signed in as<br /><span className="font-semibold">{doctorName}</span></div>
                <Button variant="outline" className="w-full" onClick={() => setIsLoggedIn(false)}>
                  Sign Out
                </Button>
              </PopoverContent>
            </Popover>
          ) : (
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4" onClick={() => setIsLoggedIn(true)}>
              Sign In / Login
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {summaryCards.map((card, idx) => (
              <Card key={idx} className="p-6 flex flex-col gap-2 shadow-none border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className={`rounded-lg p-3 ${card.iconBg}`}>{
                    card.icon === "briefcase" ? (
                      <svg className={`w-6 h-6 ${card.iconColor}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4M8 3v4"/></svg>
                    ) : card.icon === "clock" ? (
                      <svg className={`w-6 h-6 ${card.iconColor}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    ) : (
                      <svg className={`w-6 h-6 ${card.iconColor}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 21v-4a4 4 0 0 1 8 0v4"/></svg>
                    )
                  }</div>
                  <div>
                    <div className="text-xl font-bold text-blue-900">{card.value}</div>
                    <div className="text-gray-500 text-sm">{card.title}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`text-xs font-semibold ${card.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>{card.change}</span>
                </div>
              </Card>
            ))}
          </div>

          {/* Appointments Table */}
          <Card className="p-6 mt-2">
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-bold text-blue-900">Appointments</div>
              <button className="text-blue-600 text-sm font-semibold hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-gray-500 text-left">
                    <th className="py-2 px-2 font-medium text-xs">Visit No.</th>
                    <th className="py-2 px-2 font-medium text-xs">Patient Name</th>
                    <th className="py-2 px-2 font-medium text-xs">Gender</th>
                    <th className="py-2 px-2 font-medium text-xs">Reason</th>
                    <th className="py-2 px-2 font-medium text-xs">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((a, idx) => (
                    <tr key={a.visit} className="border-b last:border-b-0">
                      <td className="py-2 px-2 text-blue-700 font-semibold text-sm">{a.visit}</td>
                      <td className="py-2 px-2 text-sm">{a.name}</td>
                      <td className="py-2 px-2 text-sm">{a.gender}</td>
                      <td className="py-2 px-2 text-sm">{a.reason}</td>
                      <td className="py-2 px-2">
                        <button className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-xs font-semibold hover:bg-blue-100">Consult</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Upcoming Schedule */}
        <div className="lg:col-span-1">
          <Card className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-bold text-blue-900">Upcoming schedule</div>
              <button className="text-blue-600 text-sm font-semibold hover:underline">View All</button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="relative">
                {/* Vertical timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
                
                <div className="space-y-4">
                  {schedule.map((item, idx) => (
                    <div key={idx} className="relative flex items-start">
                      {/* Time and dot container */}
                      <div className="flex flex-col items-center w-12 flex-shrink-0">
                        <span className="text-gray-400 text-xs mb-2">{item.time}</span>
                        <div className={`w-3 h-3 rounded-full border-2 relative z-10 ${
                          idx === selectedSchedule 
                            ? "bg-blue-500 border-blue-500" 
                            : "bg-white border-gray-300"
                        }`} />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 ml-4 pb-4">
                        {item.patient ? (
                          <button
                            onClick={() => setSelectedSchedule(idx)}
                            className={`text-left font-semibold text-sm block ${
                              idx === selectedSchedule 
                                ? "text-blue-700" 
                                : "text-blue-600 hover:text-blue-700"
                            }`}
                          >
                            {item.title}
                          </button>
                        ) : (
                          <span className={`text-gray-400 text-sm${idx < selectedSchedule ? " line-through" : ""}`}>{item.title}</span>
                        )}
                        
                        {/* Expanded details for selected schedule */}
                        {item.patient && idx === selectedSchedule && (
                          <div className="mt-3 bg-blue-50 border border-blue-100 rounded-lg p-4">
                            <div className="mb-2">
                              <div className="text-xs text-gray-500 font-medium">Patient</div>
                              <div className="text-sm font-semibold text-blue-900">{item.patient.name}</div>
                            </div>
                            <div className="text-xs text-gray-500 mb-1">
                              Time: <span className="text-gray-700">{item.patient.time}</span>
                            </div>
                            <div className="text-xs text-gray-500 mb-3">
                              Purpose: <span className="text-gray-700">{item.patient.purpose}</span>
                            </div>
                            <button className="bg-blue-600 text-white px-3 py-2 rounded-lg text-xs font-semibold hover:bg-blue-700 w-full">
                              Begin appointment
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
