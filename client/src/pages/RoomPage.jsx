import React, { useState } from "react";
import TopMenuBar from "../components/TopMenuBar";
import ActivityBar from "../components/ActivityBar";
import Sidebar from "../components/Sidebar";
import Welcome from "../components/Welcome";
import CodeEditor from "../components/CodeEditor";

function RoomPage() {
  const [folderName, setFolderName] = useState("");
  const [files, setFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);
  const [activeFileContent, setActiveFileContent] = useState("");

  const handleFolderOpen = (name, fileList) => {
    setFolderName(name);
    setFiles(fileList);
  };

  const handleFileSelect = (fileName, fileContent) => {
    setActiveFile(fileName);
    setActiveFileContent(fileContent);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col">
      <TopMenuBar />
      <div className="mt-4 flex border-t border-gray-700">
        <ActivityBar />
        <Sidebar
          onFolderOpen={handleFolderOpen}
          onFileSelect={handleFileSelect}
        />
        <div className="w-full h-[calc(100vh-45px)]">
          {activeFile ? (
            <CodeEditor
              fileName={activeFile}
              content={activeFileContent}
              onChange={(newContent) => setActiveFileContent(newContent)}
              onClose={() => setActiveFile(null)}
            />
          ) : (
            <Welcome folderName={folderName} files={files} />
          )}
        </div>
      </div>
    </div>
  );
}

export default RoomPage;
