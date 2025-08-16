import React, { useState, useRef } from "react";
import axios from "axios";
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

  const editorRef = useRef(null);

  console.log("Active file:", activeFile);

  // When folder is opened from the Sidebar component
  const handleFolderOpen = (name, fileList) => {
    setFolderName(name);
    setFiles(fileList);
  };

  // When user selects a file from Sidebar
  const handleFileSelect = (fileObj) => {
    setActiveFile(fileObj); // ab isme {name, path, content} sab aayega
    setActiveFileContent(fileObj.content);
  };

  // --- File Save Functionality ---

  const handleSave = async () => {
    if (!activeFile) return alert("No file is open");

    try {
      await axios.post("http://localhost:5000/api/files/save", {
        filePath: activeFile.path,
        content: activeFileContent,
      });
      alert("File saved successfully");
    } catch (error) {
      console.error("Error saving file:", error);
      alert("Error saving file");
    }
  };

  const handleSaveAs = async () => {
    if (!activeFile) return alert("No file is open");
    const newPath = prompt("Enter new file path:", activeFile.path);
    console.log("File Path:", newPath);
    if (!newPath) return;

    try {
      await axios.post("http://localhost:5000/api/files/save-as", {
        filePath: newPath,
        content: activeFileContent,
      });
      setActiveFile({ ...activeFile, path: newPath });
      alert("File saved successfully");
    } catch (error) {
      console.error("Error saving file:", error);
      alert("Error saving file");
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col">
      <TopMenuBar
        onOpenFolder={() => console.log("Open Folder")}
        onNewFile={() => console.log("New File")}
        onSave={handleSave}
        onSaveAs={handleSaveAs}
        onCloseEditor={() => setActiveFile(null)}
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
              fileName={activeFile.name}
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
