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
      </div>
    </div>
  );
};

export default Welcome;
