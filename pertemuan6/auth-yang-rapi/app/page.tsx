import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link
        className="bg-white px-6 py-2 m-4 text-black inline-block"
        href={"/login"}
      >
        Login
      </Link>
      <Link
        className="bg-white px-6 py-2 m-4 text-black inline-block"
        href={"/register"}
      >
        Register
      </Link>
    </div>
  );
}
