import Conversation from "@/components/Conversation";
import Messege from "@/components/Messege";
import { Button, Input } from "antd";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const ChatPage = () => {
  const scrollRef = useRef(null);
  const [messeges, setMesseges] = useState([]);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, []);

  console.log(scrollRef);

  const conversations = [
    {
      name: "John Doe",
      selected: true,
    },
    {
      name: "Buse Solmaz",
      selected: false,
    },
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
          <Button shape="round" type="primary">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
