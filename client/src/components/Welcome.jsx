// src/components/Welcome.jsx
import React from "react";
import { VscNewFile, VscFolderOpened, VscRemote } from "react-icons/vsc";

const Welcome = () => {
  return (
    <div className="flex items-center justify-center h-full w-full text-gray-400 select-none">
      <div className="text-center">
        {/* Main Logo/Title */}
        <h1 className="text-5xl font-bold text-gray-200">
          Dev<span className="text-blue-500">Sync</span>
        </h1>
        <p className="text-lg mt-2 text-gray-500">
          Welcome to DevSync — your real-time collaborative code editor,{" "}
        </p>
        <p className="text-lg mt-1 text-gray-500">
          built to connect minds, streamline teamwork, and turn ideas into
          production-ready code with{" "}
        </p>
        <p className="text-lg mt-1 text-gray-500">speed, precision, and seamless synergy.</p>

        {/* Start Actions Section */}
        <div className="mt-12 text-left w-full max-w-sm">
          <h2 className="text-lg text-gray-300 mb-4">Start</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-4 cursor-pointer p-2 rounded hover:bg-[#2b2b73]">
              <VscNewFile size={20} className="text-blue-400" />
              <span>New File...</span>
            </li>
            <li className="flex items-center gap-4 cursor-pointer p-2 rounded hover:bg-[#2b2b73]">
              <VscFolderOpened size={20} className="text-blue-400" />
              <span>Open Folder...</span>
            </li>
            <li className="flex items-center gap-4 cursor-pointer p-2 rounded hover:bg-[#2b2b73]">
              <VscRemote size={20} className="text-blue-400" />
              <span>Connect to a Live Share session...</span>
            </li>
          </ul>
        </div>

        {/* Recent Projects Section */}
        <div className="mt-8 text-left w-full max-w-sm">
          <h2 className="text-lg text-gray-300 mb-4">Recent</h2>
          <p className="text-sm text-gray-600 p-2">
            You have no recent projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
