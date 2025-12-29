import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";

export default function HuntingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-irbis-cream font-sans text-irbis-navy selection:bg-irbis-gold selection:text-irbis-navy">
      <AppSidebar />

      <div className="flex-1 flex flex-col md:pl-72 transition-all duration-300">
        <AppHeader />

        {/* Main Content Area - Le "Sanctuaire" avec espacement généreux */}
        <main className="flex-1 px-6 py-8 md:px-12 md:py-12 mt-20 max-w-[1600px] w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
