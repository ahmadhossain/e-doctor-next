import Notifications from "@/components/Notifications";
import Sidebar from "@/components/Sidebar";
import VideoPlayer from "@/components/VideoPlayer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const live = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) router.push("/api/auth/signin");

  return (
    <div className="bg-black min-h-screen">
      <VideoPlayer />
      {/* <Sidebar> */}
      <Notifications />
      {/* </Sidebar> */}
    </div>
  );
};

export default live;
