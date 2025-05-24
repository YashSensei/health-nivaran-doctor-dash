
import { useState } from "react";
import { Search, Users, FileText, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PatientProfile } from "./PatientProfile";

const patients = [
  {
    id: 1,
    name: "John Smith",
    age: 45,
    gender: "Male",
    phone: "+1 (555) 123-4567",
    lastVisit: "2024-01-15",
    condition: "Hypertension",
    status: "Active",
    avatar: "JS",
  },
  {
    id: 2,
    name: "Emma Wilson",
    age: 32,
    gender: "Female",
    phone: "+1 (555) 234-5678",
    lastVisit: "2024-01-20",
    condition: "Diabetes",
    status: "Follow-up",
    avatar: "EW",
  },
  {
    id: 3,
    name: "Michael Brown",
    age: 58,
    gender: "Male",
    phone: "+1 (555) 345-6789",
    lastVisit: "2024-01-22",
    condition: "Arthritis",
    status: "New Query",
    avatar: "MB",
  },
  {
    id: 4,
    name: "Lisa Davis",
    age: 28,
    gender: "Female",
    phone: "+1 (555) 456-7890",
    lastVisit: "2024-01-18",
    condition: "Allergies",
    status: "Active",
    avatar: "LD",
  },
];

export const PatientManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPatient, setSelectedPatient] = useState<any>(null);

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedPatient) {
    return (
      <PatientProfile 
        patient={selectedPatient} 
        onBack={() => setSelectedPatient(null)} 
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Patient Management</h1>
          <p className="text-gray-600 mt-1 text-sm">Manage your patient records and medical history</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-sm">
          <User className="h-4 w-4 mr-2" />
          Add New Patient
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search patients by name or condition..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="text-sm">Filter</Button>
          </div>
        </CardContent>
      </Card>

      {/* Patient List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Users className="h-4 w-4 mr-2 text-blue-600" />
            Patient List ({filteredPatients.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredPatients.map((patient) => (
              <div
                key={patient.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={() => setSelectedPatient(patient)}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-medium text-sm">{patient.avatar}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{patient.name}</p>
                    <p className="text-xs text-gray-600">
                      {patient.age} years • {patient.gender} • {patient.phone}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{patient.condition}</p>
                  <p className="text-xs text-gray-500">Last visit: {patient.lastVisit}</p>
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${
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
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
