import Link from "next/link";
import Text from "@/components/atoms/Text";

export default function Navbar() {
  return (
    <nav className="bg-slate-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link href="/launches">
            <Text>Launches</Text>
          </Link>
        </li>
        <li>
          <Link href="/rockets">
            <Text>Rockets</Text>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
