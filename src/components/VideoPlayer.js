import React, { useContext, useEffect } from "react";
import { BsCameraVideo } from "react-icons/bs";
import { IoMicOutline } from "react-icons/io5";
import { MdOutlinePhoneDisabled } from "react-icons/md";
import { io } from "socket.io-client";

import { SocketContext } from "@/SocketContext";

const socket = io("http://localhost:5000");

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  useEffect(() => {
    socket.on("me", (id) => console.log("my id", id));
  }, []);
  return (
    <div className="grid grid-cols-1">
      {stream && (
        <video
          playsInline
          muted
          ref={myVideo}
          autoPlay
          className="bg-black fixed rounded-lg shadow-sm shadow-teal-500 top-[8rem] right-[13rem] h-[170px] w-[300px] z-10"
        />
      )}
      {callAccepted && !callEnded && (
        <video
          playsInline
          ref={userVideo}
          autoPlay
          className="bg-black w-[100%] h-[calc(100vh-67px)]"
        />
      )}
      {/* <div className="gap-4 -translate-x-1/2 fixed bottom-[2.5rem] left-[50%] flex">
        <div className="flex bg-teal-500 p-3 rounded-full cursor-pointer">
          <BsCameraVideo size="1.25rem" />
        </div>
        <div className="bg-teal-500 p-3 rounded-full cursor-pointer">
          <IoMicOutline size="1.25rem" />
        </div>
        <div className="bg-teal-500 p-3 rounded-full cursor-pointer">
          <MdOutlinePhoneDisabled size="1.25rem" />
        </div>
      </div> */}
    </div>
  );
};

export default VideoPlayer;
