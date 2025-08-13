import ActivityBar from "../components/ActivityBar";
import CodeEditor from "../components/CodeEditor";
import Sidebar from "../components/Sidebar";
import TopMenuBar from "../components/TopMenuBar";

const RoomPage = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Far Left - Activity Bar */}
      <ActivityBar />

      {/* Left - Sidebar / File Explorer */}
      <Sidebar />

      {/* Right - Main Content */}
      <div className="flex-grow flex flex-col">
        {/* Top Menu Bar */}
        <TopMenuBar />

        {/* Tab for the open file */}
        <div className="bg-[#2d2d2d] px-4 py-2 text-sm text-white border-t border-b border-gray-700">
          <span>script.js</span>
        </div>

        {/* Code Editor */}
        <div className="flex-grow">
          <CodeEditor />
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
