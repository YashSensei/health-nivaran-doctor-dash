
import { ArrowLeft, User, Calendar, FileText, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PatientProfileProps {
  patient: any;
  onBack: () => void;
}

export const PatientProfile = ({ patient, onBack }: PatientProfileProps) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button variant="outline" onClick={onBack} className="flex items-center">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Patients
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{patient.name}</h1>
          <p className="text-gray-600">Patient ID: #{patient.id.toString().padStart(6, '0')}</p>
        </div>
      </div>

      {/* Patient Basic Info */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start space-x-6">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-blue-600" />
            </div>
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-sm font-medium text-gray-600">Full Name</p>
                <p className="text-lg font-semibold text-gray-900">{patient.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Age / Gender</p>
                <p className="text-lg font-semibold text-gray-900">{patient.age} / {patient.gender}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Phone</p>
                <p className="text-lg font-semibold text-gray-900">{patient.phone}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Status</p>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    patient.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : patient.status === "Follow-up"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {patient.status}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Patient Details Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="history">Medical History</TabsTrigger>
          <TabsTrigger value="vitals">Vitals</TabsTrigger>
          <TabsTrigger value="bot-interactions">Bot Interactions</TabsTrigger>
          <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Current Condition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600 mb-2">{patient.condition}</p>
                <p className="text-gray-600">Primary diagnosis and ongoing treatment plan.</p>
                <div className="mt-4 space-y-2">
                  <p className="text-sm"><span className="font-medium">Last Visit:</span> {patient.lastVisit}</p>
                  <p className="text-sm"><span className="font-medium">Next Appointment:</span> Pending</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Appointment
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Add Prescription
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Medical History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-200 pl-4">
                  <p className="font-medium">January 15, 2024</p>
                  <p className="text-gray-600">Routine checkup - Blood pressure elevated, prescribed medication</p>
                </div>
                <div className="border-l-4 border-green-200 pl-4">
                  <p className="font-medium">December 10, 2023</p>
                  <p className="text-gray-600">Follow-up visit - Condition improving, continue current treatment</p>
                </div>
                <div className="border-l-4 border-orange-200 pl-4">
                  <p className="font-medium">November 5, 2023</p>
                  <p className="text-gray-600">Initial diagnosis - Hypertension identified, lifestyle changes recommended</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vitals">
          <Card>
            <CardHeader>
              <CardTitle>Latest Vitals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">120/80</p>
                  <p className="text-sm text-gray-600">Blood Pressure</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">72</p>
                  <p className="text-sm text-gray-600">Heart Rate</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <p className="text-2xl font-bold text-orange-600">98.6°F</p>
                  <p className="text-sm text-gray-600">Temperature</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">98%</p>
                  <p className="text-sm text-gray-600">Oxygen Sat</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bot-interactions">
          <Card>
            <CardHeader>
              <CardTitle>WhatsApp Bot Interactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-2">Today, 10:30 AM</p>
                  <p className="font-medium">Patient Query: "Experiencing chest pain and shortness of breath"</p>
                  <p className="text-gray-600 mt-1">Bot Response: Advised immediate medical attention, appointment requested.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-2">Yesterday, 3:45 PM</p>
                  <p className="font-medium">Patient Query: "Medication side effects question"</p>
                  <p className="text-gray-600 mt-1">Bot Response: Provided general information, suggested consultation.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prescriptions">
          <Card>
            <CardHeader>
              <CardTitle>Prescription History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border border-gray-200 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-medium">Lisinopril 10mg</p>
                    <span className="text-sm text-gray-500">Jan 15, 2024</span>
                  </div>
                  <p className="text-gray-600 text-sm">Once daily for blood pressure management</p>
                  <p className="text-green-600 text-sm mt-1">✓ Active</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-medium">Metformin 500mg</p>
                    <span className="text-sm text-gray-500">Dec 10, 2023</span>
                  </div>
                  <p className="text-gray-600 text-sm">Twice daily with meals</p>
                  <p className="text-gray-500 text-sm mt-1">○ Discontinued</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
