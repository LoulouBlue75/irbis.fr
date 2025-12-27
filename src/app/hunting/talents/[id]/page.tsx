import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TalentDetailPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="" />
            <AvatarFallback className="bg-ivory text-ink font-medium text-xl">MD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold text-ink">Marc Dupont</h1>
            <p className="text-stone">Chief Technology Officer</p>
          </div>
          <Badge variant="active" className="ml-2">Available</Badge>
        </div>
        <Button variant="default" size="sm">Contact</Button>
      </div>

      {/* TABS */}
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="w-full justify-start border-b border-gray-200 bg-transparent p-0 h-auto rounded-none">
          <TabsTrigger value="profile" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-ink rounded-none pb-3 text-stone data-[state=active]:text-ink font-medium">Profile</TabsTrigger>
          <TabsTrigger value="8d" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-ink rounded-none pb-3 text-stone data-[state=active]:text-ink font-medium">8D</TabsTrigger>
          <TabsTrigger value="history" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-ink rounded-none pb-3 text-stone data-[state=active]:text-ink font-medium">History</TabsTrigger>
          <TabsTrigger value="mandates" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-ink rounded-none pb-3 text-stone data-[state=active]:text-ink font-medium">Mandates</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="default">
              <CardHeader>
                <CardTitle>Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone">
                  Experienced CTO with a strong background in SaaS and Fintech. Proven track record of scaling engineering teams from 10 to 100+.
                </p>
              </CardContent>
            </Card>
            <Card variant="default">
              <CardHeader>
                <CardTitle>Contact Info</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="text-stone">Email</span>
                  <span className="text-ink font-medium">marc.dupont@example.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone">Phone</span>
                  <span className="text-ink font-medium">+33 6 12 34 56 78</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone">Location</span>
                  <span className="text-ink font-medium">Paris, France</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="8d" className="mt-6">
          <Card variant="default">
            <CardHeader>
              <CardTitle>8D Assessment</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
               <div className="w-full max-w-md aspect-square bg-ivory rounded-full flex items-center justify-center border border-gray-200 relative">
                  <span className="text-stone font-medium">RADAR CHART</span>
                  {/* Simple bars for now */}
                  <div className="absolute bottom-10 w-3/4 flex justify-between items-end h-1/2 px-8">
                    <div className="w-8 bg-gold h-[85%] rounded-t-sm" title="Competencies"></div>
                    <div className="w-8 bg-gold h-[78%] rounded-t-sm" title="Leadership"></div>
                    <div className="w-8 bg-gold h-[92%] rounded-t-sm" title="Culture"></div>
                    <div className="w-8 bg-gold h-[65%] rounded-t-sm" title="Potential"></div>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-x-12 gap-y-4 mt-8 w-full max-w-2xl">
                 <div className="flex justify-between items-center">
                   <span className="text-stone">Competencies</span>
                   <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                     <div className="h-full bg-gold w-[85%]"></div>
                   </div>
                   <span className="text-sm font-medium text-ink">85%</span>
                 </div>
                 <div className="flex justify-between items-center">
                   <span className="text-stone">Leadership</span>
                   <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                     <div className="h-full bg-gold w-[78%]"></div>
                   </div>
                   <span className="text-sm font-medium text-ink">78%</span>
                 </div>
                 <div className="flex justify-between items-center">
                   <span className="text-stone">Culture</span>
                   <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                     <div className="h-full bg-gold w-[92%]"></div>
                   </div>
                   <span className="text-sm font-medium text-ink">92%</span>
                 </div>
                 <div className="flex justify-between items-center">
                   <span className="text-stone">Potential</span>
                   <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                     <div className="h-full bg-gold w-[65%]"></div>
                   </div>
                   <span className="text-sm font-medium text-ink">65%</span>
                 </div>
               </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <Card variant="default">
            <CardContent className="pt-6">
              <p className="text-stone">No history yet.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mandates" className="mt-6">
           <Card variant="default">
            <CardContent className="pt-6">
              <p className="text-stone">Not assigned to any mandate.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
