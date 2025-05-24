
import { MessageSquare, Search, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const messages = [
  {
    id: 1,
    patient: "Michael Brown",
    message: "Experiencing chest pain and shortness of breath. Need urgent consultation.",
    time: "10:30 AM",
    type: "WhatsApp Bot",
    priority: "High",
    status: "Unread",
  },
  {
    id: 2,
    patient: "Sarah Connor",
    message: "Follow-up question about prescribed medication side effects.",
    time: "09:15 AM",
    type: "Direct Message",
    priority: "Medium",
    status: "Read",
  },
  {
    id: 3,
    patient: "David Wilson",
    message: "Requesting prescription refill for blood pressure medication.",
    time: "Yesterday",
    type: "WhatsApp Bot",
    priority: "Low",
    status: "Replied",
  },
];

export const Messages = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Messages & Notifications</h1>
          <p className="text-gray-600 mt-1">Patient messages and WhatsApp bot interactions</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <MessageSquare className="h-4 w-4 mr-2" />
          Compose Message
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search messages..."
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Messages List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-blue-600" />
              Recent Messages
            </span>
            <span className="text-sm text-gray-500">3 unread</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`p-4 rounded-lg border transition-colors cursor-pointer ${
                  message.status === "Unread"
                    ? "bg-blue-50 border-blue-200 hover:bg-blue-100"
                    : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{message.patient}</p>
                      <p className="text-sm text-gray-500">{message.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        message.priority === "High"
                          ? "bg-red-100 text-red-700"
                          : message.priority === "Medium"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {message.priority}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      {message.type}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        message.status === "Unread"
                          ? "bg-blue-100 text-blue-700"
                          : message.status === "Read"
                          ? "bg-gray-100 text-gray-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {message.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 ml-13">{message.message}</p>
                <div className="mt-3 ml-13">
                  <Button size="sm" className="mr-2">
                    Reply
                  </Button>
                  <Button size="sm" variant="outline">
                    View Details
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
