"use client";

import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  const redirect = () => {
    router.replace("/");
  };
  return (
    <div>
      <button onClick={redirect}>redirect</button>
    </div>
  );
};
export default About;
