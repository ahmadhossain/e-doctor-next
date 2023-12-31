import React, { useContext } from "react";
import { BsCameraVideo } from "react-icons/bs";
import { IoMicOutline } from "react-icons/io5";
import { MdOutlinePhoneDisabled } from "react-icons/md";

import { SocketContext } from "@/SocketContext";
// import { Grid, Typography, Paper, makeStyles } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   video: {
//     width: "550px",
//     [theme.breakpoints.down("xs")]: {
//       width: "300px",
//     },
//   },
//   gridContainer: {
//     justifyContent: "center",
//     [theme.breakpoints.down("xs")]: {
//       flexDirection: "column",
//     },
//   },
//   paper: {
//     padding: "10px",
//     border: "2px solid black",
//     margin: "10px",
//   },
// }));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <div className="grid grid-cols-1">
      {
        <video
          playsInline
          muted
          ref={myVideo}
          autoPlay
          className="bg-black fixed rounded-lg shadow-sm shadow-teal-500 top-[8rem] left-[3rem] h-[170px] w-[300px] z-10"
        />
      }
      {
        <video
          playsInline
          ref={userVideo}
          autoPlay
          className="bg-black w-[100%] h-[calc(100vh-67px)]"
        />
      }
      <div className="gap-4 -translate-x-1/2 fixed bottom-[2.5rem] left-[50%] flex">
        <div className="flex bg-teal-500 p-3 rounded-full cursor-pointer">
          <BsCameraVideo size="1.25rem" />
        </div>
        <div className="bg-teal-500 p-3 rounded-full cursor-pointer">
          <IoMicOutline size="1.25rem" />
        </div>
        <div className="bg-teal-500 p-3 rounded-full cursor-pointer">
          <MdOutlinePhoneDisabled size="1.25rem" />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
