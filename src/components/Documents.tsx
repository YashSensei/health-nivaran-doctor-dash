
import { FileText, Upload, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const documents = [
  {
    id: 1,
    name: "John Smith - Blood Test Results",
    type: "Lab Report",
    date: "2024-01-20",
    size: "2.3 MB",
    patient: "John Smith",
  },
  {
    id: 2,
    name: "Emma Wilson - X-Ray Report",
    type: "Imaging",
    date: "2024-01-18",
    size: "5.1 MB",
    patient: "Emma Wilson",
  },
  {
    id: 3,
    name: "Michael Brown - Prescription",
    type: "Prescription",
    date: "2024-01-15",
    size: "0.8 MB",
    patient: "Michael Brown",
  },
];

export const Documents = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
          <p className="text-gray-600 mt-1">Manage patient documents and medical records</p>
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
          <CardTitle className="flex items-center">
            <FileText className="h-5 w-5 mr-2 text-blue-600" />
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
                    <p className="font-medium text-gray-900">{doc.name}</p>
                    <p className="text-sm text-gray-600">
                      {doc.type} • {doc.patient} • {doc.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-500">{doc.size}</span>
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
