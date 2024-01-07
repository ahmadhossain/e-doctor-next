import Image from "next/image";

import docAvatar from "../../public/images/docAvatar.jpg";

const Messege = ({ own }: { own: boolean }) => {
  return (
    <div className={`flex ${own && "items-end"} flex-col gap-3 p-5 `}>
      <div className="flex gap-3">
        <div className="">
          <Image width={45} src={docAvatar} alt="doctor image" />
        </div>
        <p
          className={`max-w-[300px] py-2  ${
            own ? "text-slate-800" : "text-white"
          } px-5  ${own ? "bg-slate-200" : "bg-blue-400"} rounded-3xl`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="text-xs">1 hour ago</div>
    </div>
  );
};

export default Messege;
