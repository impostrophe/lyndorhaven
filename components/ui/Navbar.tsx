import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>
          <Link href="/report">Report Issue</Link>
        </li>
        <li>
          <Link href="/rules">Rules</Link>
        </li>
      </ul>
    </nav>
  );
}
