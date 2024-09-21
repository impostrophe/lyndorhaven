import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Events() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <h1 className="text-4xl font-bold mb-6 text-center">Community Events</h1>

      <div className="w-full max-w-2xl">
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Community Cleanup Day</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Date: Saturday, October 15th</p>
            <p>Location: Community Park</p>
            <p>Join us for our annual community cleanup event!</p>
          </CardContent>
        </Card>
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Neighborhood Watch Meeting</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Date: Wednesday, October 19th</p>
            <p>Location: Community Center</p>
            <p>Monthly meeting to discuss community safety.</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
