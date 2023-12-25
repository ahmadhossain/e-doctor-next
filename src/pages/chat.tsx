import io from "socket.io-client";
import { useEffect, useState } from "react";
import { Button, Input } from "antd";

const socket = io("http://localhost:3001");

function ChatPage() {
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [allMsg, setAllMsg] = useState<any>([]);

  //   const joinRoom = () => {
  //     if (room !== "") {
  //       socket.emit("join_room", room);
  //     }
  //   };

  const sendMessage = () => {
    socket.emit("message", { message });
  };

  useEffect(() => {
    socket.on("message", (data) => {
      setAllMsg((prevMsg: any) => [...prevMsg, data.message]);
    });
    console.log("hello");
  }, [socket]);

  return (
    <div className="min-h-screen">
      {/* <input
        placeholder="Room Number..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      /> */}
      {/* <button onClick={joinRoom}> Join Room</button> */}
      <h3> Message:</h3>
      {allMsg.map((msg: string, index: number) => (
        <p key={index + msg}>{msg}</p>
      ))}
      <div className="min-h-screen flex justify-center items-end gap-5 p-5">
        <Input
          className="w-60"
          placeholder="Message..."
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  );
}

export default ChatPage;
