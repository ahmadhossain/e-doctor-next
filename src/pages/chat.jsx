import Conversation from "@/components/Conversation";
import Messege from "@/components/Messege";
import { Button, Input } from "antd";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const ChatPage = () => {
  const scrollRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { data: session } = useSession();
  const router = useRouter();
  const socket = useRef();
  console.log(session);

  if (!session) router.push("/api/auth/signin");

  useEffect(() => {
    socket.current = io("http://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      // currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    socket.current.emit("addUser", session?.user?.email);
    socket.current.on("getUsers", (users) => {
      console.log(users);
      // setOnlineUsers(
      //   user.followings.filter((f) => users.some((u) => u.userId === f))
      // );
    });
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    // try {
    //   const res = await axios.post("/messages", message);
    //   setMessages([...messages, res.data]);
    //   setNewMessage("");
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const conversations = [
    {
      name: "John Doe",
      selected: true,
    },
    // {
    //   name: "Buse Solmaz",
    //   selected: false,
    // },
  ];

  // if (!session) router.push("/api/auth/signin");

  return (
    <div className="w-full flex">
      <div className="w-[27.5%] px-3 pt-5">
        {conversations.map((el) => (
          <Conversation {...el} />
        ))}
      </div>
      <div className="w-[45%]">
        <div className="border-x overflow-y-scroll h-[calc(100vh-140px)] ">
          <Messege own />
          <Messege own={false} />
          <Messege own />
          <div ref={scrollRef} />
        </div>
        <div className="flex items-center py-2 px-8 gap-3">
          <Input
            size="large"
            style={{ borderRadius: "999px", background: "#e2e8f0" }}
            className="bg-slate-200 rounded-full"
            placeholder="write messege..."
          />
          <Button onClick={handleSubmit} shape="round" type="primary">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
