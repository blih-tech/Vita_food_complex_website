import DashboardLayout from "@/components/layout/DashboardLayout";
import MarketingNumbersControl from "@/components/content/MarketingNumbersControl";
import { NotificationProvider } from "@/context/NotificationContext";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NotificationProvider>
      <DashboardLayout>
        {children}
        <MarketingNumbersControl />
      </DashboardLayout>
    </NotificationProvider>
  );
}
