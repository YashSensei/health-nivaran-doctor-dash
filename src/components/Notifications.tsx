
import { Calendar, Clock, User, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const notifications = [
  {
    id: 1,
    type: "appointment",
    title: "New Appointment Request",
    message: "Michael Brown requested an appointment for tomorrow at 11:00 AM",
    time: "5 minutes ago",
    priority: "high",
    icon: Calendar,
  },
  {
    id: 2,
    type: "message",
    title: "WhatsApp Bot Alert",
    message: "Patient Sarah Connor reported severe chest pain via bot",
    time: "15 minutes ago",
    priority: "urgent",
    icon: MessageSquare,
  },
  {
    id: 3,
    type: "reminder",
    title: "Upcoming Appointment",
    message: "Appointment with John Smith in 30 minutes",
    time: "30 minutes ago",
    priority: "medium",
    icon: Clock,
  },
  {
    id: 4,
    type: "system",
    title: "Patient Record Updated",
    message: "Emma Wilson's lab results have been uploaded",
    time: "1 hour ago",
    priority: "low",
    icon: User,
  },
];

export const Notifications = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-600 mt-1">Stay updated with important alerts and reminders</p>
        </div>
        <Button variant="outline">
          Mark All as Read
        </Button>
      </div>

      {/* Notification Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">2</p>
              <p className="text-sm text-gray-600">Urgent</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">1</p>
              <p className="text-sm text-gray-600">High Priority</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">1</p>
              <p className="text-sm text-gray-600">Medium</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">1</p>
              <p className="text-sm text-gray-600">Low Priority</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Notifications List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Recent Notifications</span>
            <span className="text-sm text-gray-500">{notifications.length} items</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications.map((notification) => {
              const Icon = notification.icon;
              return (
                <div
                  key={notification.id}
                  className={`p-4 rounded-lg border-l-4 transition-colors ${
                    notification.priority === "urgent"
                      ? "border-red-500 bg-red-50 hover:bg-red-100"
                      : notification.priority === "high"
                      ? "border-orange-500 bg-orange-50 hover:bg-orange-100"
                      : notification.priority === "medium"
                      ? "border-blue-500 bg-blue-50 hover:bg-blue-100"
                      : "border-green-500 bg-green-50 hover:bg-green-100"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div
                        className={`p-2 rounded-lg ${
                          notification.priority === "urgent"
                            ? "bg-red-100 text-red-600"
                            : notification.priority === "high"
                            ? "bg-orange-100 text-orange-600"
                            : notification.priority === "medium"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                        <p className="text-gray-700 mt-1">{notification.message}</p>
                        <p className="text-sm text-gray-500 mt-2">{notification.time}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                      <Button size="sm">
                        Action
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
