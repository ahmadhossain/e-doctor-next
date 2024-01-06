import React, { useContext, useEffect } from "react";
import { BsCameraVideo } from "react-icons/bs";
import { IoMicOutline } from "react-icons/io5";
import { MdOutlinePhoneDisabled } from "react-icons/md";

import { SocketContext } from "@/SocketContext";
import { useRouter } from "next/router";

const VideoPlayer = () => {
  const {
    name,
    callAccepted,
    leaveCall,
    myVideo,
    userVideo,
    callEnded,
    stream,
    call,
  } = useContext(SocketContext);
  const router = useRouter();

  const handleLeave = () => {
    leaveCall();
    // router.push("/");
  };

  return (
    <div className="grid grid-cols-1">
      {stream && (
        <video
          playsInline
          muted
          ref={myVideo}
          autoPlay
          className="bg-black fixed rounded-lg shadow-sm shadow-teal-500 top-[3rem] right-[3rem] h-[170px] w-[300px] z-10"
        />
      )}
      {callAccepted && !callEnded && (
        <video
          playsInline
          ref={userVideo}
          autoPlay
          className="bg-black w-[100%] h-screen"
        />
      )}
      <div className="gap-4 -translate-x-1/2 fixed bottom-[2.5rem] left-[50%] flex">
        <div className="flex bg-teal-500 p-3 rounded-full cursor-pointer">
          <BsCameraVideo size="1.25rem" />
        </div>
        <div className="bg-teal-500 p-3 rounded-full cursor-pointer">
          <IoMicOutline size="1.25rem" />
        </div>
        <div
          onClick={handleLeave}
          className="bg-red-500 hover:bg-red-400 p-3 rounded-full cursor-pointer"
        >
          <MdOutlinePhoneDisabled color="white" size="1.25rem" />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
