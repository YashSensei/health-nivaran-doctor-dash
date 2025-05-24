
import { Calendar, Users, Clock, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const summaryCards = [
  {
    title: "Today's Appointments",
    value: "12",
    subtitle: "4 pending approval",
    icon: Calendar,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "New Patient Queries",
    value: "8",
    subtitle: "From WhatsApp Bot",
    icon: MessageSquare,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Total Patients",
    value: "245",
    subtitle: "12 new this week",
    icon: Users,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Pending Approvals",
    value: "6",
    subtitle: "Appointment requests",
    icon: Clock,
    color: "bg-purple-50 text-purple-600",
  },
];

const upcomingAppointments = [
  {
    time: "09:00 AM",
    patient: "John Smith",
    reason: "Routine Checkup",
    status: "Confirmed",
  },
  {
    time: "10:30 AM",
    patient: "Emma Wilson",
    reason: "Follow-up Consultation",
    status: "Confirmed",
  },
  {
    time: "11:45 AM",
    patient: "Michael Brown",
    reason: "WhatsApp Bot Query",
    status: "Pending",
  },
  {
    time: "02:00 PM",
    patient: "Lisa Davis",
    reason: "Prescription Review",
    status: "Confirmed",
  },
];

export const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Dr. Johnson!</h1>
        <p className="text-gray-600 mt-1">Here's what's happening with your patients today.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{card.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{card.value}</p>
                    <p className="text-sm text-gray-500 mt-1">{card.subtitle}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${card.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Upcoming Schedule */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="h-5 w-5 mr-2 text-blue-600" />
            Today's Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingAppointments.map((appointment, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="text-sm font-medium text-blue-600 w-20">
                    {appointment.time}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{appointment.patient}</p>
                    <p className="text-sm text-gray-600">{appointment.reason}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      appointment.status === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {appointment.status}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    {appointment.status === "Confirmed" ? "Consult" : "Approve"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
