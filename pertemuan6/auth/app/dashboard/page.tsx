"use client";

import { AuthContext } from "@/context/auth-provider";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  const { user } = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      // Redirect ke login page
      router.push("/login");
    }

    setLoading(false);
  }, [router, user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(user, null, 2)}</div>;
};
export default Dashboard;
