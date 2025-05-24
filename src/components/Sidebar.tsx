import { Calendar, Users, FileText, MessageSquare, Settings, User, List, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { getUnreadMessagesCount } from "./Messages";
import { notifications } from "./Notifications";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const unreadMessagesCount = getUnreadMessagesCount();
  const unreadNotificationsCount = notifications.filter(n => n.unread).length;

  const navigationItems = [
    { id: "overview", label: "Overview", icon: Calendar },
    { id: "appointments", label: "Appointments", icon: Clock },
    { id: "patients", label: "Patients", icon: Users },
    { id: "schedule", label: "Schedule", icon: Calendar },
    { id: "documents", label: "Documents", icon: FileText },
    { id: "messages", label: "Messages", icon: MessageSquare, badge: unreadMessagesCount > 0 ? unreadMessagesCount : undefined },
    { id: "medication", label: "Medication", icon: List },
    { id: "notifications", label: "Notifications", icon: Calendar, badge: unreadNotificationsCount > 0 ? unreadNotificationsCount : undefined },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="h-full w-full bg-white border-r border-gray-200 shadow-sm">
      {/* Header - Only show on desktop */}
      <div className="hidden lg:block p-6 border-b border-gray-100">
        <h1 className="text-lg font-bold text-blue-600">Health Nivaran</h1>
        <p className="text-xs text-gray-500 mt-1">Doctor's Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-colors text-sm",
                    isActive
                      ? "bg-blue-50 text-blue-600 border border-blue-200"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  <div className="flex items-center">
                    <Icon className="h-4 w-4 mr-3" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="bg-orange-400 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[18px] text-center leading-none">
                      {item.badge}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Doctor Profile - Only show on desktop */}
      <div className="hidden lg:block p-4 mt-auto border-t border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-blue-600" />
          </div>
          <div>
            <p className="font-medium text-gray-900 text-sm">Dr. Sarah Johnson</p>
            <p className="text-xs text-gray-500">General Physician</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
