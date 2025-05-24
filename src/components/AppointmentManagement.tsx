
import { useState } from "react";
import { Calendar, Clock, Users, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const appointmentRequests = [
  {
    id: 1,
    patient: "Michael Brown",
    requestedTime: "2024-01-25 11:00 AM",
    reason: "Chest pain consultation",
    source: "WhatsApp Bot",
    priority: "High",
    submitted: "2 hours ago",
  },
  {
    id: 2,
    patient: "Sarah Connor",
    requestedTime: "2024-01-25 02:30 PM",
    reason: "Follow-up appointment",
    source: "Phone Call",
    priority: "Medium",
    submitted: "4 hours ago",
  },
  {
    id: 3,
    patient: "David Wilson",
    requestedTime: "2024-01-26 09:15 AM",
    reason: "Prescription review",
    source: "WhatsApp Bot",
    priority: "Low",
    submitted: "1 day ago",
  },
];

const confirmedAppointments = [
  {
    id: 1,
    patient: "John Smith",
    time: "09:00 AM",
    date: "2024-01-25",
    reason: "Routine Checkup",
    status: "Confirmed",
  },
  {
    id: 2,
    patient: "Emma Wilson",
    time: "10:30 AM",
    date: "2024-01-25",
    reason: "Follow-up Consultation",
    status: "Confirmed",
  },
  {
    id: 3,
    patient: "Lisa Davis",
    time: "02:00 PM",
    date: "2024-01-25",
    reason: "Prescription Review",
    status: "Confirmed",
  },
];

export const AppointmentManagement = () => {
  const [selectedTab, setSelectedTab] = useState("requests");

  const handleApprove = (id: number) => {
    console.log("Approved appointment:", id);
    // In a real app, this would update the backend
  };

  const handleReject = (id: number) => {
    console.log("Rejected appointment:", id);
    // In a real app, this would update the backend
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-gray-900">Appointment Management</h1>
        <p className="text-gray-600 mt-1 text-sm">Manage appointment requests and your schedule</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-600">Pending Requests</p>
                <p className="text-xl font-bold text-orange-600">{appointmentRequests.length}</p>
              </div>
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-600">Today's Appointments</p>
                <p className="text-xl font-bold text-blue-600">{confirmedAppointments.length}</p>
              </div>
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-600">Total Patients</p>
                <p className="text-xl font-bold text-green-600">24</p>
              </div>
              <Users className="h-6 w-6 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Appointment Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="requests" className="text-sm">Pending Requests</TabsTrigger>
          <TabsTrigger value="confirmed" className="text-sm">Today's Schedule</TabsTrigger>
        </TabsList>

        <TabsContent value="requests" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Clock className="h-4 w-4 mr-2 text-orange-600" />
                Appointment Requests Awaiting Approval
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {appointmentRequests.map((request) => (
                  <div key={request.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-sm font-semibold text-gray-900">{request.patient}</h3>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              request.priority === "High"
                                ? "bg-red-100 text-red-700"
                                : request.priority === "Medium"
                                ? "bg-orange-100 text-orange-700"
                                : "bg-green-100 text-green-700"
                            }`}
                          >
                            {request.priority} Priority
                          </span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            {request.source}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                          <div>
                            <p className="font-medium text-gray-600">Requested Time</p>
                            <p className="text-gray-900">{request.requestedTime}</p>
                          </div>
                          <div>
                            <p className="font-medium text-gray-600">Reason</p>
                            <p className="text-gray-900">{request.reason}</p>
                          </div>
                          <div>
                            <p className="font-medium text-gray-600">Submitted</p>
                            <p className="text-gray-900">{request.submitted}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3 ml-6">
                        <Button
                          onClick={() => handleApprove(request.id)}
                          className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1.5"
                          size="sm"
                        >
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Accept
                        </Button>
                        <Button
                          onClick={() => handleReject(request.id)}
                          variant="outline"
                          className="border-red-300 text-red-600 hover:bg-red-50 text-xs px-3 py-1.5"
                          size="sm"
                        >
                          <XCircle className="h-3 w-3 mr-1" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="confirmed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                Today's Confirmed Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {confirmedAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="text-xs font-medium text-blue-600 w-16">
                        {appointment.time}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{appointment.patient}</p>
                        <p className="text-xs text-gray-600">{appointment.reason}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                        {appointment.status}
                      </span>
                      <Button 
                        className="bg-blue-600 hover:bg-blue-700 text-xs px-3 py-1.5"
                        size="sm"
                      >
                        Start Consultation
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
