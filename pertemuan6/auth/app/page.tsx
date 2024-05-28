import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link
        className="inline-block m-4 bg-white px-4 py-2 text-black"
        href="/login"
      >
        Login
      </Link>
      <Link
        className="inline-block m-4 bg-white px-4 py-2 text-black"
        href="/register"
      >
        Register
      </Link>
      <Link
        className="inline-block m-4 bg-white px-4 py-2 text-black"
        href="/about"
      >
        About
      </Link>
    </div>
  );
}
