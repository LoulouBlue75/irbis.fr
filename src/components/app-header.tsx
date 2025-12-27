import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu } from "lucide-react";

export function AppHeader() {
  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 fixed top-0 right-0 left-0 md:left-64 z-30 transition-all">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        {/* Breadcrumbs or Title could go here */}
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" className="hidden md:inline-flex">Help</Button>
        <Avatar className="h-8 w-8">
          <AvatarImage src="" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
