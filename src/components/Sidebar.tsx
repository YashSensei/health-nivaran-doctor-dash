
import { Calendar, Users, FileText, MessageSquare, Settings, User, List, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems = [
  { id: "overview", label: "Overview", icon: Calendar },
  { id: "appointments", label: "Appointments", icon: Clock },
  { id: "patients", label: "Patients", icon: Users },
  { id: "schedule", label: "Schedule", icon: Calendar },
  { id: "documents", label: "Documents", icon: FileText },
  { id: "messages", label: "Messages", icon: MessageSquare, badge: 3 },
  { id: "medication", label: "Medication", icon: List },
  { id: "notifications", label: "Notifications", icon: Calendar, badge: 5 },
  { id: "settings", label: "Settings", icon: Settings },
];

export const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 shadow-sm">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <h1 className="text-xl font-bold text-blue-600">Health Nivaran</h1>
        <p className="text-sm text-gray-500 mt-1">Doctor's Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors",
                    isActive
                      ? "bg-blue-50 text-blue-600 border border-blue-200"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  <div className="flex items-center">
                    <Icon className="h-5 w-5 mr-3" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="bg-orange-400 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                      {item.badge}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Doctor Profile */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p className="font-medium text-gray-900">Dr. Sarah Johnson</p>
            <p className="text-sm text-gray-500">General Physician</p>
          </div>
        </div>
      </div>
    </div>
  );
};
