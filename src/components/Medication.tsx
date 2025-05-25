import { List, Search, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const medications = [
  {
    id: 1,
    patient: "Rajesh Kumar Singh",
    medication: "Metformin 500mg",
    dosage: "Twice daily with meals",
    startDate: "2024-05-15",
    status: "Active",
    refillsLeft: 2,
  },
  {
    id: 2,
    patient: "Amit Kumar Yadav",
    medication: "Amlodipine 5mg",
    dosage: "Once daily in morning",
    startDate: "2024-05-10",
    status: "Active",
    refillsLeft: 1,
  },
  {
    id: 3,
    patient: "Sunita Devi",
    medication: "Levothyroxine 50mcg",
    dosage: "Once daily on empty stomach",
    startDate: "2024-05-20",
    status: "Active",
    refillsLeft: 2,
  },
  {
    id: 4,
    patient: "Rahul Gupta",
    medication: "Azithromycin 500mg",
    dosage: "Once daily for 3 days",
    startDate: "2024-05-24",
    status: "Active",
    refillsLeft: 0,
  },
  {
    id: 5,
    patient: "Vikram Singh",
    medication: "Diclofenac 50mg",
    dosage: "Twice daily after meals",
    startDate: "2024-05-22",
    status: "Active",
    refillsLeft: 1,
  },
  {
    id: 6,
    patient: "Priya Sharma",
    medication: "Folic Acid 5mg",
    dosage: "Once daily",
    startDate: "2024-05-01",
    status: "Active",
    refillsLeft: 2,
  }
];

export const Medication = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Medication Management</h1>
          <p className="text-sm text-gray-600 mt-1">Track patient prescriptions and medication history</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <List className="h-4 w-4 mr-2" />
          New Prescription
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search by patient name or medication..."
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Medications List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-[1.1rem]">
            <List className="h-4 w-4 mr-2 text-blue-600" />
            Active Prescriptions ({medications.filter(m => m.status === "Active").length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {medications.map((med) => (
              <div key={med.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <User className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-sm font-semibold text-gray-900">{med.patient}</h3>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            med.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {med.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-xs font-medium text-gray-600">Medication</p>
                          <p className="text-sm text-gray-900">{med.medication}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-600">Dosage</p>
                          <p className="text-sm text-gray-900">{med.dosage}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-600">Start Date</p>
                          <p className="text-sm text-gray-900">{med.startDate}</p>
                        </div>
                      </div>
                      
                      {med.status === "Active" && (
                        <div className="mt-3">
                          <p className="text-xs text-gray-600">
                            <span className="font-medium">Refills remaining:</span> {med.refillsLeft}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                    {med.status === "Active" && (
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Refill
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
