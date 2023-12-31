import { useRouter } from "next/router";
import { AiOutlineUser } from "react-icons/ai";
import { Button, Rate } from "antd";

import { SocketContext } from "@/SocketContext";
import { useContext } from "react";
import Link from "next/link";

const DoctorCard = ({
  name,
  specialities,
  degree,
  working,
  rating,
  experience,
}) => {
  const router = useRouter();
  const { me, callAccepted, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);

  const handleCall = () => {
    callUser();
    router.push("/live");
  };

  return (
    <div className="flex rounded-md cursor-pointer shadow hover:shadow-md my-3 p-4 gap-10 border ">
      <div className="w-24 flex  justify-center items-center rounded-md bg-gray-200">
        <AiOutlineUser size="3.5rem" color="white" />
      </div>
      <div>
        <div className="text-md font-medium text-slate-800">{name}</div>
        <div className="text-base font-light">{degree}</div>
        <div className="text-gray-400 text-sm">Specialities</div>
        <div className="text-sm">{specialities}</div>
      </div>
      <div>
        <div className="text-gray-400 text-sm">Working in</div>
        <div className="text-md font-medium text-slate-800">{working}</div>
        <div className="flex gap-4">
          <div>
            <div className="text-gray-400 text-sm">Total Experience</div>
            <div className="text-md font-medium text-slate-800">
              {experience}
            </div>
          </div>
          <div>
            <div className="text-gray-400 text-sm">Rating</div>
            <Rate disabled defaultValue={rating} />
          </div>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <Button onClick={handleCall} shape="round" type="primary">
          See Doctor
        </Button>
        <Button
          onClick={() => router.push("/chat")}
          shape="round"
          type="primary"
        >
          Chat with Doctor
        </Button>
      </div>
    </div>
  );
};

export default DoctorCard;
