import Image from "next/image";

import docAvatar from "../../public/images/docAvatar.jpg";

const Conversation = ({ selected, name }) => {
  return (
    <div
      className={`flex gap-3 py-3 px-6 ${
        selected && "bg-slate-100"
      } hover:bg-slate-200 cursor-pointer`}
    >
      <Image
        className="rounded-full"
        width={45}
        src={docAvatar}
        alt="doctor image"
      />
      <span className="flex justify-center items-center font-semibold">
        {name}
      </span>
    </div>
  );
};

export default Conversation;
