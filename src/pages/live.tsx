import Notifications from "@/components/Notifications";
import Sidebar from "@/components/Sidebar";
import VideoPlayer from "@/components/VideoPlayer";

const live = () => {
  return (
    <div>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
  );
};

export default live;
