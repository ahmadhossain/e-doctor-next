import { Button } from "antd";
import Link from "next/link";
import React from "react";

const doctor = () => {
  return (
    <div className="h-screen px-20">
      <h1 className="pt-36 ">
        Are You <br /> A Qualified Doctor?
      </h1>
      <h3>Join the digital healthcare.</h3>
      <Link href={"/register"}>
        <Button className="bg-emerald-500 rounded-full text-white font-bold">
          Sign up now
        </Button>
      </Link>
    </div>
  );
};

export default doctor;
