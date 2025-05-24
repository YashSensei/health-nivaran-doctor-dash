
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { DashboardOverview } from "@/components/DashboardOverview";
import { PatientManagement } from "@/components/PatientManagement";
import { AppointmentManagement } from "@/components/AppointmentManagement";
import { ScheduleManager } from "@/components/ScheduleManager";
import { Messages } from "@/components/Messages";
import { Documents } from "@/components/Documents";
import { Medication } from "@/components/Medication";
import { Notifications } from "@/components/Notifications";
import { Settings } from "@/components/Settings";

const Index = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <DashboardOverview />;
      case "patients":
        return <PatientManagement />;
      case "appointments":
        return <AppointmentManagement />;
      case "schedule":
        return <ScheduleManager />;
      case "messages":
        return <Messages />;
      case "documents":
        return <Documents />;
      case "medication":
        return <Medication />;
      case "notifications":
        return <Notifications />;
      case "settings":
        return <Settings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1 ml-64 p-6">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
