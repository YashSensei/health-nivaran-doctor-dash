import { FileText, Upload, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const documents = [
  {
    id: 1,
    name: "Rajesh Kumar Singh - HbA1c Test Results",
    type: "Lab Report",
    date: "2024-05-20",
    size: "1.8 MB",
    patient: "Rajesh Kumar Singh",
  },
  {
    id: 2,
    name: "Priya Sharma - Ultrasound Report (28 weeks)",
    type: "Imaging",
    date: "2024-05-22",
    size: "4.2 MB",
    patient: "Priya Sharma",
  },
  {
    id: 3,
    name: "Amit Kumar Yadav - Blood Pressure Medication",
    type: "Prescription",
    date: "2024-05-23",
    size: "0.9 MB",
    patient: "Amit Kumar Yadav",
  },
  {
    id: 4,
    name: "Sunita Devi - Thyroid Function Test",
    type: "Lab Report",
    date: "2024-05-24",
    size: "2.1 MB",
    patient: "Sunita Devi",
  },
  {
    id: 5,
    name: "Rahul Gupta - Chest X-Ray Report",
    type: "Imaging",
    date: "2024-05-24",
    size: "3.5 MB",
    patient: "Rahul Gupta",
  },
  {
    id: 6,
    name: "Vikram Singh - Joint Pain Assessment",
    type: "Medical Report",
    date: "2024-05-25",
    size: "1.2 MB",
    patient: "Vikram Singh",
  },
  {
    id: 7,
    name: "Meena Kumari - Complete Blood Count",
    type: "Lab Report",
    date: "2024-05-25",
    size: "1.5 MB",
    patient: "Meena Kumari",
  },
  {
    id: 8,
    name: "Anita Rani - Post-delivery Care Plan",
    type: "Medical Report",
    date: "2024-05-25",
    size: "1.1 MB",
    patient: "Anita Rani",
  }
];

export const Documents = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Documents</h1>
          <p className="text-sm text-gray-600 mt-1">Manage patient documents and medical records</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Upload className="h-4 w-4 mr-2" />
          Upload Document
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search documents by patient name or type..."
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Documents List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-[1.1rem]">
            <FileText className="h-4 w-4 mr-2 text-blue-600" />
            Recent Documents ({documents.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                    <p className="text-xs text-gray-600">
                      {doc.type} • {doc.patient} • {doc.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xs text-gray-500">{doc.size}</span>
                  <Button size="sm" variant="outline">
                    View
                  </Button>
                  <Button size="sm">
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
