import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Rules() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Rules and Regulations
      </h1>

      <div className="w-full max-w-2xl space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Community Rules</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>Respect your neighbors</li>
              <li>Keep noise levels down after 10 PM</li>
              <li>Maintain your property</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Local Ordinances</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Please refer to the city website for detailed local ordinances.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>State and Federal Laws</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              All residents are expected to abide by state and federal laws.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
