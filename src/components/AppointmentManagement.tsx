import { useState } from "react";
import { Calendar, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const initialAppointmentRequests = [
  {
    id: 1,
    patient: "Rajesh Kumar Singh",
    requestedTime: "2024-05-25 11:00 AM",
    reason: "Diabetes follow-up consultation",
    source: "WhatsApp Bot",
    priority: "High",
    submitted: "2 hours ago",
  },
  {
    id: 2,
    patient: "Priya Sharma",
    requestedTime: "2024-05-25 02:30 PM",
    reason: "Pregnancy check-up (28 weeks)",
    source: "WhatsApp Bot",
    priority: "High",
    submitted: "1 hour ago",
  },
  {
    id: 3,
    patient: "Amit Kumar Yadav",
    requestedTime: "2024-05-26 09:15 AM",
    reason: "Blood pressure medication review",
    source: "WhatsApp Bot",
    priority: "Medium",
    submitted: "1 day ago",
  },
];

const initialConfirmedAppointments = [
  {
    id: 1,
    patient: "Sunita Devi",
    time: "09:00 AM",
    date: "2024-05-25",
    reason: "Thyroid Function Test Review",
    status: "Confirmed",
  },
  {
    id: 2,
    patient: "Rahul Gupta",
    time: "10:30 AM",
    date: "2024-05-25",
    reason: "Respiratory Infection Follow-up",
    status: "Confirmed",
  },
  {
    id: 3,
    patient: "Meena Kumari",
    time: "02:00 PM",
    date: "2024-05-25",
    reason: "Routine Health Checkup",
    status: "Confirmed",
  },
  {
    id: 4,
    patient: "Vikram Singh",
    time: "03:00 PM",
    date: "2024-05-25",
    reason: "Joint Pain Consultation",
    status: "Confirmed",
  },
];

export const AppointmentManagement = () => {
  const [selectedTab, setSelectedTab] = useState("requests");
  const [appointmentRequests, setAppointmentRequests] = useState(initialAppointmentRequests);
  const [confirmedAppointments, setConfirmedAppointments] = useState(initialConfirmedAppointments);
  const [consultingPatient, setConsultingPatient] = useState<string | null>(null);

  const handleApprove = (id: number) => {
    setAppointmentRequests((prev) => prev.filter((req) => req.id !== id));
  };

  const handleReject = (id: number) => {
    setAppointmentRequests((prev) => prev.filter((req) => req.id !== id));
  };

  const handleStartConsultation = (patient: string) => {
    setConsultingPatient(patient);
    setTimeout(() => setConsultingPatient(null), 2000);
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
          <Card className="bg-white border border-gray-100 rounded-xl shadow-none p-0">
            <CardHeader className="px-6 pt-6 pb-2">
              <CardTitle className="flex items-center text-base text-gray-700 font-semibold">
                <Clock className="h-4 w-4 mr-2 text-gray-400" />
                Appointment Requests Awaiting Approval
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-0">
              <div className="flex flex-col gap-4">
                {appointmentRequests.length === 0 ? (
                  <div className="text-gray-400 text-sm text-center py-8">No pending requests.</div>
                ) : appointmentRequests.map((request, idx) => (
                  <div
                    key={request.id}
                    className={`flex items-start justify-between border-b last:border-b-0 border-gray-100 pb-4 rounded-lg relative ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} group hover:bg-gray-100 transition-colors`}
                    style={{ marginTop: idx === 0 ? 0 : '12px' }}
                  >
                    <div className="absolute left-0 top-2 bottom-2 w-2 rounded bg-blue-300 group-hover:bg-blue-500 transition-colors" />
                    <div className="flex-1 pl-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-800 text-sm">{request.patient}</span>
                        <span
                          className={`px-2 py-0.5 rounded text-xs font-normal border ${request.priority === 'High' ? 'border-red-300 text-red-700 bg-red-50' : request.priority === 'Medium' ? 'border-orange-300 text-orange-700 bg-orange-50' : 'border-green-300 text-green-700 bg-green-50'}`}
                        >
                          {request.priority}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 flex items-center gap-2">
                        <span>{request.requestedTime}</span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span>{request.reason}</span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span>Requested {request.submitted}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 ml-4">
                      <Button
                        onClick={() => handleApprove(request.id)}
                        variant="outline"
                        className="border-gray-200 text-green-700 text-xs px-3 py-1 h-7 min-w-[70px]"
                        size="sm"
                      >
                        Accept
                      </Button>
                      <Button
                        onClick={() => handleReject(request.id)}
                        variant="ghost"
                        className="text-red-500 text-xs px-3 py-1 h-7 min-w-[70px]"
                        size="sm"
                      >
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="confirmed" className="space-y-4">
          <Card className="bg-white border border-gray-100 rounded-xl shadow-none p-0">
            <CardHeader className="px-6 pt-6 pb-2">
              <CardTitle className="flex items-center text-base text-gray-700 font-semibold">
                <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                Today's Confirmed Appointments
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-0">
              <div className="flex flex-col gap-3">
                {confirmedAppointments.map((appointment, idx) => (
                  <div
                    key={appointment.id}
                    className={`flex items-center justify-between border-b last:border-b-0 border-gray-100 pb-3 rounded-lg relative ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} group hover:bg-gray-100 transition-colors`}
                    style={{ marginTop: idx === 0 ? 0 : '12px' }}
                  >
                    <div className="absolute left-0 top-2 bottom-2 w-2 rounded bg-green-300 group-hover:bg-green-500 transition-colors" />
                    <div className="flex items-center gap-4 pl-4">
                      <div className="text-xs text-gray-500 w-16">{appointment.time}</div>
                      <div>
                        <div className="font-semibold text-gray-800 text-sm">{appointment.patient}</div>
                        <div className="text-xs text-gray-500">{appointment.reason}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="border border-green-200 text-green-700 px-2 py-0.5 rounded text-xs font-normal bg-green-50">{appointment.status}</span>
                      <Button 
                        variant="outline"
                        className="border-gray-200 text-gray-700 text-xs px-3 py-1 h-7"
                        size="sm"
                        onClick={() => handleStartConsultation(appointment.patient)}
                      >
                        Start Consultation
                      </Button>
                    </div>
                  </div>
                ))}
                {consultingPatient && (
                  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-20">
                    <div className="bg-white rounded-lg shadow-lg p-8 min-w-[280px] text-center">
                      <div className="text-lg font-semibold mb-2">Consultation Started</div>
                      <div className="text-gray-700 mb-4">Consultation started for <span className="font-bold">{consultingPatient}</span>.</div>
                      <Button onClick={() => setConsultingPatient(null)} className="bg-blue-600 text-white px-4 py-1.5 rounded">Close</Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
