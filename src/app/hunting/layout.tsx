import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";

export default function HuntingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AppSidebar />
      <div className="flex-1 flex flex-col md:pl-64">
        <AppHeader />
        <main className="flex-1 p-8 mt-14">
          {children}
        </main>
      </div>
    </div>
  );
}
