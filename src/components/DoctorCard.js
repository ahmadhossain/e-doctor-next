import { useRouter } from "next/router";
import { AiOutlineUser } from "react-icons/ai";
import { Button } from "antd";

const DoctorCard = ({ name, specialities, degree }) => {
  const router = useRouter();
  return (
    <div className="flex rounded-md cursor-pointer shadow hover:shadow-md my-3 p-4 gap-10 border h-32">
      <div className="w-24 flex  justify-center items-center rounded-md bg-gray-200">
        <AiOutlineUser size="3.5rem" color="white" />
      </div>
      <div>
        <div className="text-md font-medium text-slate-800">{name}</div>
        <div className="text-base font-light">{degree}</div>
        <div className="text-gray-400 text-sm">Specialities</div>
        <div className="text-sm">{specialities}</div>
      </div>
      <div className="flex gap-3 items-center">
        <Button
          shape="round"
          type="primary"
          onClick={() => router.push("/live")}
        >
          See Doctor
        </Button>
        <Button
          shape="round"
          type="primary"
          onClick={() => router.push("/live")}
        >
          Chat with Doctor
        </Button>
      </div>
    </div>
  );
};

export default DoctorCard;
