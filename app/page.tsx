import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <h1 className="text-4xl font-bold mb-6 text-center">Community Hub</h1>

      <section className="w-full max-w-2xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Latest Announcements</h2>
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Community Cleanup Day</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Join us this Saturday for our annual community cleanup event!</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>New Recycling Program</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Starting next month, we&apos;re implementing a new recycling
              program.
            </p>
          </CardContent>
        </Card>
      </section>

      <Link href="/events">
        <Button size="lg">View All Events</Button>
      </Link>
    </main>
  );
}
