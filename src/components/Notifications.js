import React, { useContext } from "react";
import { Button } from "antd";

import { SocketContext } from "@/SocketContext";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h1>{call.name} is calling:</h1>
          <Button onClick={answerCall}>Answer</Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
