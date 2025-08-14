import React, { useState, useRef } from "react";
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
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [panelVisible, setPanelVisible] = useState(true);
  const [rightBarVisible, setRightBarVisible] = useState(true);
  const [terminalVisible, setTerminalVisible] = useState(false);

  const editorRef = useRef(null);

  // When folder is opened from the Sidebar component
  const handleFolderOpen = (name, fileList) => {
    setFolderName(name);
    setFiles(fileList);
  };

  // When user selects a file from Sidebar
  const handleFileSelect = (fileName, fileContent) => {
    setActiveFile(fileName);
    setActiveFileContent(fileContent);
  };

  // When folder is opened from TopMenuBar dropdown
  const handleOpenFolderFromRoom = async () => {
    if ("showDirectoryPicker" in window) {
      try {
        const dirHandle = await window.showDirectoryPicker();
        const fileList = [];

        for await (const [name, handle] of dirHandle.entries()) {
          fileList.push({ name, handle });
        }

        setFolderName(dirHandle.name);
        setFiles(fileList);
      } catch (err) {
        console.error("Error opening folder:", err);
      }
    } else {
      alert("Your browser does not support the File System Access API.");
    }
  };

  const runActiveFile = () => {
    if (activeFile) {
      console.log(`Running ${activeFile}...`);
      // add actual run logic here
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col">
      <TopMenuBar
        onOpenFolder={handleFolderOpen}
        onNewFile={() => {
          /* new file flow */
        }}
        onSave={() => {
          /* save active file */
        }}
        onSaveAs={() => {
          /* save-as */
        }}
        onCloseEditor={() => setActiveFile(null)}
        onToggleSidebar={() => setSidebarVisible((v) => !v)}
        onTogglePanel={() => setPanelVisible((v) => !v)}
        onToggleRightBar={() => setRightBarVisible((v) => !v)}
        onRun={runActiveFile}
        onToggleTerminal={() => setTerminalVisible((v) => !v)}
        onFind={() => editorRef.current?.trigger("any", "actions.find")}
      />

      <div className="mt-4 flex border-t border-gray-700">
        <ActivityBar />

        {sidebarVisible && (
          <Sidebar
            onFolderOpen={handleFolderOpen}
            onFileSelect={handleFileSelect}
          />
        )}

        <div className="w-full h-[calc(100vh-45px)]">
          {activeFile ? (
            <CodeEditor
              ref={editorRef}
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
