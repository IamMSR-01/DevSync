import {
  BsThreeDots,
  BsFolderPlus,
  BsFolder,
  BsFolderFill,
} from "react-icons/bs";
import { VscNewFile, VscCollapseAll } from "react-icons/vsc";
import { IoMdRefresh } from "react-icons/io";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { FileIcon, defaultStyles } from "react-file-icon";

const Sidebar = ({ onFileSelect }) => {
  const [folderName, setFolderName] = useState("No Folder");
  const [tree, setTree] = useState([]);

  const getFileIcon = (fileName) => {
    const ext = fileName.split(".").pop().toLowerCase();
    return (
      <div style={{ width: 18, height: 18 }}>
        {defaultStyles[ext] ? (
          <FileIcon extension={ext} {...defaultStyles[ext]} />
        ) : (
          <FileIcon extension="" {...defaultStyles.default} />
        )}
      </div>
    );
  };

  const handleFileClick = async (fileHandle) => {
    try {
      const file = await fileHandle.getFile();
      const text = await file.text();
      onFileSelect(file.name, text);
    } catch (err) {
      console.error("Error reading file:", err);
    }
  };

  const readDirectory = async (dirHandle) => {
    let entries = [];
    for await (const [name, handle] of dirHandle.entries()) {
      if (handle.kind === "directory") {
        entries.push({
          name,
          kind: "directory",
          handle,
          children: await readDirectory(handle),
          expanded: false,
        });
      } else {
        entries.push({
          name,
          kind: "file",
          handle,
        });
      }
    }
    return entries;
  };

  const handleOpenFolder = async () => {
    if ("showDirectoryPicker" in window) {
      try {
        const dirHandle = await window.showDirectoryPicker();
        setFolderName(dirHandle.name);
        const treeData = await readDirectory(dirHandle);
        setTree(treeData);
      } catch (error) {
        console.error("Error opening folder:", error);
      }
    } else {
      const input = document.createElement("input");
      input.type = "file";
      input.webkitdirectory = true;
      input.onchange = (e) => {
        const fileObjects = Array.from(e.target.files);
        if (fileObjects.length > 0) {
          const pathParts = fileObjects[0].webkitRelativePath.split("/");
          setFolderName(pathParts[0]);

          const buildTree = (files) => {
            const root = {};
            for (const file of files) {
              const parts = file.webkitRelativePath.split("/");
              let current = root;
              parts.forEach((part, idx) => {
                if (!current[part]) {
                  current[part] =
                    idx === parts.length - 1
                      ? {
                          kind: "file",
                          handle: {
                            getFile: async () => file,
                            name: file.name,
                          },
                          name: file.name,
                        }
                      : {
                          kind: "directory",
                          name: part,
                          children: {},
                          expanded: false,
                        };
                }
                if (idx !== parts.length - 1) current = current[part].children;
              });
            }
            const convert = (obj) =>
              Object.values(obj).map((node) =>
                node.kind === "directory"
                  ? { ...node, children: convert(node.children) }
                  : node
              );
            return convert(root);
          };

          setTree(buildTree(fileObjects));
        }
      };
      input.click();
    }
  };

  const toggleFolder = (node) => {
    node.expanded = !node.expanded;
    setTree([...tree]);
  };

  const renderTree = (nodes, depth = 0) => {
    return nodes.map((node, idx) => (
      <div key={`${node.name}-${idx}`} style={{ paddingLeft: depth * 16 }}>
        {node.kind === "directory" ? (
          <div
            className="flex items-center cursor-pointer hover:bg-gray-700 p-1 rounded"
            onClick={() => toggleFolder(node)}
          >
            {node.expanded ? (
              <FaChevronDown size={12} className="mr-1" />
            ) : (
              <FaChevronRight size={12} className="mr-1" />
            )}
            {node.expanded ? (
              <BsFolderFill className="mr-2 text-yellow-400" />
            ) : (
              <BsFolder className="mr-2 text-yellow-400" />
            )}
            {node.name}
          </div>
        ) : (
          <div
            className="flex items-center cursor-pointer hover:bg-gray-700 p-1 rounded pl-6"
            onClick={() => handleFileClick(node.handle)}
          >
            {getFileIcon(node.name)}
            <span className="ml-2">{node.name}</span>
          </div>
        )}
        {node.kind === "directory" &&
          node.expanded &&
          renderTree(node.children, depth + 1)}
      </div>
    ));
  };

  return (
    <div className="w-72 border-l border-r border-gray-700 text-gray-300 p-2 sidebar-scroll h-[calc(100vh-45px)] overflow-y-auto">
      <h2 className="text-xs font-medium uppercase tracking-wide px-2 py-1 flex items-center justify-between">
        Explorer{" "}
        <span className="hover:text-white text-gray-300 hover:bg-gray-600 p-1 rounded">
          <BsThreeDots size={15} />
        </span>
      </h2>
      <div className="mt-2">
        <div className="text-xs font-bold uppercase px-2 py-1 flex items-center justify-between bg-gray-800 rounded">
          <span className="flex items-center justify-center gap-1">
            <FaChevronDown />
            {folderName}
          </span>
          <span className="flex">
            <VscNewFile size={25} className="hover:bg-gray-700 p-1 rounded" />
            <BsFolderPlus
              size={25}
              className="hover:bg-gray-700 p-1 rounded cursor-pointer"
              onClick={handleOpenFolder}
            />
            <IoMdRefresh size={25} className="hover:bg-gray-700 p-1 rounded" />
            <VscCollapseAll
              size={25}
              className="hover:bg-gray-700 p-1 rounded"
            />
          </span>
        </div>
        {/* File List */}
        {tree.length > 0 ? (
          <div className="mt-4">{renderTree(tree)}</div>
        ) : (
          <div className="mt-4 w-[90%] mx-auto">
            <p className="text-sm font-medium">
              You have not yet opened a folder.
            </p>
            <button
              onClick={handleOpenFolder}
              className="mt-3 bg-purple-700 px-12 cursor-pointer text-white py-1 rounded"
            >
              Open Folder
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
