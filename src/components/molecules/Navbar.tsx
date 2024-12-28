import Link from "next/link";
import Text from "@/components/atoms/Text";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-white p-4 shadow-lg shadow-[rgba(0,0,0,0.07)] z-10">
      <Link href="/" className="w-10">
        <Image src="/favicon.ico" alt="logo" width={20} height={20} />
      </Link>
      <ul className="flex space-x-4 gap-5">
        <li className="relative text-slate-600 hover:text-black w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <Link href="/launches">
            <Text>Launches</Text>
          </Link>
        </li>
        <li className="relative text-slate-600 hover:text-black w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <Link href="/rockets">
            <Text>Rockets</Text>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
