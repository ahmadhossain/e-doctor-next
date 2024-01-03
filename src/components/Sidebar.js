import React, { useState, useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Button, Input } from "antd";
import { SocketContext } from "@/SocketContext";

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <>
      <form className="w-40" noValidate autoComplete="off">
        <CopyToClipboard text={me}>
          <Button>Copy Your ID</Button>
        </CopyToClipboard>
        <Input
          label="ID to call"
          value={idToCall}
          onChange={(e) => setIdToCall(e.target.value)}
        />
        {callAccepted && !callEnded ? (
          <Button onClick={leaveCall}>Hang Up</Button>
        ) : (
          <Button onClick={() => callUser(idToCall)}>Call</Button>
        )}
      </form>
      {children}
    </>
  );
};

export default Sidebar;
