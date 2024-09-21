import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Report() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <h1 className="text-4xl font-bold mb-6 text-center">Report an Issue</h1>

      <form className="w-full max-w-md space-y-4">
        <Input placeholder="Your Name" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Issue Title" />
        <Textarea placeholder="Describe the issue..." />
        <Button type="submit" className="w-full">
          Submit Report
        </Button>
      </form>
    </main>
  );
}
