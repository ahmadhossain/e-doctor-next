import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = useSession();
  console.log("data useSession", data);
  return <main className="h-screen text-xl">eDoctor</main>;
}
