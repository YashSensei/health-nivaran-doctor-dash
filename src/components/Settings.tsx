import { Settings as SettingsIcon, User, Calendar, MessageSquare, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Settings = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your account and system preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="h-5 w-5 mr-2 text-blue-600" />
              Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue="Dr. Sarah Johnson" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="dr.sarah@healthnivaran.com" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" defaultValue="+1 (555) 123-4567" />
            </div>
            <div>
              <Label htmlFor="specialization">Specialization</Label>
              <Input id="specialization" defaultValue="General Physician" />
            </div>
            <Button className="w-full">Update Profile</Button>
          </CardContent>
        </Card>

        {/* Schedule Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-blue-600" />
              Schedule Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="morning-start">Morning Session Start</Label>
              <Input id="morning-start" type="time" defaultValue="09:00" />
            </div>
            <div>
              <Label htmlFor="morning-end">Morning Session End</Label>
              <Input id="morning-end" type="time" defaultValue="12:00" />
            </div>
            <div>
              <Label htmlFor="afternoon-start">Afternoon Session Start</Label>
              <Input id="afternoon-start" type="time" defaultValue="14:00" />
            </div>
            <div>
              <Label htmlFor="afternoon-end">Afternoon Session End</Label>
              <Input id="afternoon-end" type="time" defaultValue="17:00" />
            </div>
            <Button className="w-full">Update Schedule</Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-blue-600" />
              Notification Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>WhatsApp Bot Alerts</span>
              <Button variant="outline" size="sm">Enabled</Button>
            </div>
            <div className="flex items-center justify-between">
              <span>Appointment Reminders</span>
              <Button variant="outline" size="sm">Enabled</Button>
            </div>
            <div className="flex items-center justify-between">
              <span>Emergency Notifications</span>
              <Button variant="outline" size="sm">Enabled</Button>
            </div>
            <div className="flex items-center justify-between">
              <span>Email Notifications</span>
              <Button variant="outline" size="sm">Disabled</Button>
            </div>
            <Button className="w-full">Save Preferences</Button>
          </CardContent>
        </Card>

        {/* System Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <SettingsIcon className="h-5 w-5 mr-2 text-blue-600" />
              System Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="timezone">Timezone</Label>
              <Input id="timezone" defaultValue="UTC-5 (Eastern Time)" />
            </div>
            <div>
              <Label htmlFor="language">Language</Label>
              <Input id="language" defaultValue="English" />
            </div>
            <div className="flex items-center justify-between">
              <span>Auto-backup</span>
              <Button variant="outline" size="sm">Daily</Button>
            </div>
            <div className="flex items-center justify-between">
              <span>Two-factor Authentication</span>
              <Button variant="outline" size="sm">Setup</Button>
            </div>
            <Button className="w-full">Apply Settings</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
