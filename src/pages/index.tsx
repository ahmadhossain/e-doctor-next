import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = useSession();
  console.log("data useSession", data);

  return (
    <main className="h-screen text-xl text-center ">
      <h1 className="pt-28">
        Digital Healthcare Solution <br /> eDoctor
      </h1>
      <h3 className="text-slate-600">
        Consulting a healthcare professional, getting digital prescription &
        health information.
      </h3>
    </main>
  );
}
