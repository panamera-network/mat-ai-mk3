import Sidebar from "@/components/Sidebar";
import ChatPanel from "@/components/MainArea/ChatPanel/ChatPanel";
import MainPanel from "@/components/MainArea/MainPanel/MainPanel";

export default function MainArea() {
  return (
    <div className="main-area flex flex-1 w-full h-full min-w-0 gap-x-4">
      {/* Sidebar */}
      <div className="app-sidebar flex-shrink-0 w-[80px] bg-[#0a0c15] flex flex-col">
        <Sidebar />
      </div>

      {/* Main Panel */}
      <div className="flex-[2] flex flex-col min-w-0">
        <MainPanel />
      </div>

      {/* Chat Panel */}
      <div className="flex-[1] flex flex-col min-w-0 h-full">
        <ChatPanel />
      </div>
    </div>
  );
}
