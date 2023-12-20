import Image from "next/image";

import leftArrow from "../../public/images/leftArrow.svg";

const BackButton = () => {
  return (
    <Image
      width={35}
      src={leftArrow}
      className="ml-20 cursor-pointer absolute"
    />
  );
};

export default BackButton;
