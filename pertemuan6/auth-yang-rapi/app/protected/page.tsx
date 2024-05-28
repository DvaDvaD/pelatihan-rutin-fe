"use client";

import { useAuth } from "@/context/auth-provider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Protected = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Handle protected page logic here
    if (!user) {
      router.replace("/login");
    }
  }, [user, router]);

  return (
    <>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button
        className="bg-white px-6 py-2 m-4 text-black inline-block"
        onClick={logout}
      >
        Logout
      </button>
    </>
  );
};
export default Protected;
