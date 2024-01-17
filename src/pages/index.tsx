import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
import useLangStore from "@/useLangStore";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = useSession();
  const { en, toggleLan } = useLangStore();

  return (
    <main className="h-screen text-xl text-center ">
      <h1 className="pt-28">
        {en ? "Digital Healthcare Solution" : "ডিজিটাল স্বাস্থ্যসেবা সমাধান"}{" "}
        <br /> eDoctor
      </h1>
      <h3 className="text-slate-600">
        {en
          ? "Consulting a healthcare professional, getting digital prescription & health information."
          : "একজন স্বাস্থ্যসেবা পেশাদারের সাথে পরামর্শ করুন, ডিজিটাল প্রেসক্রিপশন এবং স্বাস্থ্য তথ্য পান।"}
      </h3>
    </main>
  );
}
