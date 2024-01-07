import Messege from "@/components/Messege";
import { Button, Input } from "antd";

const ChatPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-[45%]">
        <div className="border-x overflow-y-scroll h-[calc(100vh-140px)] ">
          <Messege own />
          <Messege own={false} />
          <Messege own />
          <Messege own />
          <Messege own />
          <Messege own />
          <Messege own />
          <Messege own />
          <Messege own />
          <Messege own />
          <Messege own />
          <Messege own />
        </div>
        <div className="flex items-center py-2 px-8 gap-3">
          <Input
            size="large"
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
