import { useState, useRef } from "react";
import { Menu } from "lucide-react";
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
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Index = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const schedulePrefRef = useRef<HTMLDivElement>(null);

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <DashboardOverview />;
      case "patients":
        return <PatientManagement />;
      case "appointments":
        return <AppointmentManagement />;
      case "schedule":
        return <ScheduleManager onModifyHours={handleModifyHours} />;
      case "messages":
        return <Messages />;
      case "documents":
        return <Documents />;
      case "medication":
        return <Medication />;
      case "notifications":
        return <Notifications />;
      case "settings":
        return <Settings schedulePrefRef={schedulePrefRef} />;
      default:
        return <DashboardOverview />;
    }
  };

  function handleModifyHours() {
    setActiveSection("settings");
    setTimeout(() => {
      if (schedulePrefRef.current) {
        schedulePrefRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  }

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
        <h1 className="text-lg font-bold text-blue-600">Health Nivaran</h1>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 h-full">
        <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
      </div>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0">
        <div className="p-4 lg:p-6">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Index;
