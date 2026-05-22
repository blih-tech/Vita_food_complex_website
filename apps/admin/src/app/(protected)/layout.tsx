import DashboardLayout from "@/components/layout/DashboardLayout";
import { NotificationProvider } from "@/context/NotificationContext";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NotificationProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </NotificationProvider>
  );
}
