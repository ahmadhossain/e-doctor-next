import React, { useContext } from "react";
import { Button } from "antd";

import { SocketContext } from "@/SocketContext";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div className="flex justify-center pt-60 gap-5 items-center">
          <h3 className="flex items-center text-white">
            Patient is calling...
          </h3>
          <Button type="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
