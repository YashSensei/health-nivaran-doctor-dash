import { MessageSquare, Search, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const messages = [
  {
    id: 1,
    patient: "Rajesh Kumar Singh",
    message: "Namaste Doctor, sugar level bahut high ho gaya hai (280). Kya karu?",
    time: "10:30 AM",
    type: "WhatsApp Bot",
    priority: "High",
    status: "Unread",
  },
  {
    id: 2,
    patient: "Priya Sharma",
    message: "Doctor sahab, pregnancy ke 28 weeks mein pet mein dard ho raha hai. Normal hai?",
    time: "09:15 AM",
    type: "Direct Message",
    priority: "High",
    status: "Unread",
  },
  {
    id: 3,
    patient: "Amit Kumar Yadav",
    message: "BP ki medicine khatam ho gayi hai. Refill ke liye appointment chahiye.",
    time: "Yesterday",
    type: "WhatsApp Bot",
    priority: "Medium",
    status: "Read",
  },
  {
    id: 4,
    patient: "Sunita Devi",
    message: "Thyroid test ke results aaye hain. Review ke liye kab aa sakte hain?",
    time: "Yesterday",
    type: "Direct Message",
    priority: "Medium",
    status: "Replied",
  },
  {
    id: 5,
    patient: "Rahul Gupta",
    message: "Doctor ji, khansi aur bukhar ke saath saans lene mein takleef ho rahi hai.",
    time: "2 hours ago",
    type: "WhatsApp Bot",
    priority: "High",
    status: "Unread",
  },
  {
    id: 6,
    patient: "Vikram Singh",
    message: "Joint pain medicine ka effect kam ho raha hai. Dose badhani hai?",
    time: "1 hour ago",
    type: "Direct Message",
    priority: "Medium",
    status: "Read",
  },
  {
    id: 7,
    patient: "Meena Kumari",
    message: "Routine checkup ke liye appointment chahiye. Koi slot available hai?",
    time: "30 minutes ago",
    type: "WhatsApp Bot",
    priority: "Low",
    status: "Unread",
  },
  {
    id: 8,
    patient: "Anita Rani",
    message: "Post-delivery care ke liye diet plan share karna bhool gaye. Please send karein.",
    time: "15 minutes ago",
    type: "Direct Message",
    priority: "Low",
    status: "Read",
  }
];

// Export unread count for sidebar
export const getUnreadMessagesCount = () => {
  return messages.filter(message => message.status === "Unread").length;
};

export const Messages = () => {
  const unreadCount = getUnreadMessagesCount();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Messages & Notifications</h1>
          <p className="text-gray-600 mt-1 text-sm">Patient messages and WhatsApp bot interactions</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-sm">
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
          <CardTitle className="flex items-center justify-between text-lg">
            <span className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-2 text-blue-600" />
              Recent Messages
            </span>
            <span className="text-sm text-gray-500">{unreadCount} unread</span>
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
                      <p className="font-semibold text-gray-900 text-sm">{message.patient}</p>
                      <p className="text-xs text-gray-500">{message.time}</p>
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
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        message.status === "Unread"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {message.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700">{message.message}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
