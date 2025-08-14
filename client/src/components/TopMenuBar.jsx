import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { SiGithubcopilot } from "react-icons/si";
import { FaAngleDown, FaMinus } from "react-icons/fa";
import {
  VscLayoutSidebarLeft,
  VscLayoutSidebarRight,
  VscLayoutPanel,
  VscLayout,
} from "react-icons/vsc";
import { FaRegWindowRestore } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const TopMenuBar = ({
  onOpenFolder,
  onNewFile,
  onSave,
  onSaveAs,
  onCloseEditor,
}) => {
  const menuItems = [
    {
      name: "File",
      dropdown: [
        "New File",
        "New Window",
        "Open File...",
        "Open Folder...",
        "Open Workspace...",
        "Add Folder to Workspace...",
        "Save",
        "Save As...",
        "Save All",
        "Auto Save",
        "Revert File",
        "Close Editor",
        "Close Folder",
        "Close Window",
        "Preferences",
        "Exit",
      ],
    },
    {
      name: "Edit",
      dropdown: [
        "Undo",
        "Redo",
        "Cut",
        "Copy",
        "Paste",
        "Find",
        "Replace",
        "Find in Files",
        "Replace in Files",
        "Select All",
        "Toggle Line Comment",
        "Toggle Block Comment",
        "Fold",
        "Unfold",
        "Fold All",
        "Unfold All",
      ],
    },
    {
      name: "Selection",
      dropdown: [
        "Select All",
        "Expand Selection",
        "Shrink Selection",
        "Copy Line Up",
        "Copy Line Down",
        "Move Line Up",
        "Move Line Down",
      ],
    },
    {
      name: "View",
      dropdown: [
        "Appearance",
        "Explorer",
        "Search",
        "Source Control",
        "Run",
        "Extensions",
        "Output",
        "Terminal",
        "Problems",
        "Command Palette",
      ],
    },
    {
      name: "Go",
      dropdown: [
        "Back",
        "Forward",
        "Go to File",
        "Go to Symbol",
        "Go to Definition",
        "Go to References",
      ],
    },
    {
      name: "Run",
      dropdown: [
        "Run",
        "Run Without Debugging",
        "Start Debugging",
        "Stop Debugging",
        "Restart Debugging",
      ],
    },
    {
      name: "Terminal",
      dropdown: [
        "New Terminal",
        "Split Terminal",
        "Run Task",
        "Configure Task",
      ],
    },
    {
      name: "Help",
      dropdown: [
        "Documentation",
        "Release Notes",
        "Keyboard Shortcuts",
        "About",
      ],
    },
  ];

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleOptionClick = (option) => {
    switch(option) {
      case "Open Folder...":
        onOpenFolder();
        break;
      case "New File":
        onNewFile && onNewFile();
        break;
      case "Save":
        onSave && onSave();
        break;
      case "Save As...":
        onSaveAs && onSaveAs();
        break;
      case "Close Editor":
        onCloseEditor && onCloseEditor();
        break;
      default:
        console.log("Option clicked:", option);
    }
  };

  return (
    <div className="text-gray-300 w-full px-4 pt-3 flex text-sm justify-between items-center h-7 relative">
      <div className="flex items-center justify-center">
        <img src="Logo.png" alt="Logo" className="h-6 w-6 rounded-full" />
        <div className="flex relative">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <span className="cursor-pointer hover:bg-gray-600 px-2 py-1 rounded flex items-center">
                {item.name} <FaAngleDown className="ml-1 text-xs" />
              </span>
              {openDropdown === item.name && (
                <div className="absolute top-full left-0 bg-gray-800 border border-gray-700 rounded mt-1 z-50 min-w-[180px] max-w-xs overflow-auto shadow-lg">
                  {item.dropdown.map((sub) => (
                    <div
                      key={sub}
                      className="px-3 py-1 cursor-pointer hover:bg-gray-700 whitespace-nowrap"
                      onClick={() => handleOptionClick(sub)}
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="border border-amber-50/30 h-7 w-xl flex items-center px-2 rounded-lg justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black gap-4">
        <CiSearch />
        <span>Live Code Editor</span>
      </div>

      <span className="flex items-center justify-between text-gray-400 hover:text-white hover:bg-gray-600 p-1 py-2 px-2 rounded-lg">
        <SiGithubcopilot className="h-5 w-5" />
        <FaAngleDown className="h-4 w-4" />
      </span>

      <span className="flex items-center justify-center">
        <span className="hover:bg-gray-600 p-2 rounded">
          <VscLayout className="h-5 w-5" />
        </span>
        <span className="hover:bg-gray-600 p-2 rounded">
          <VscLayoutSidebarLeft className="h-4 w-4" />
        </span>
        <span className="hover:bg-gray-600 p-2 rounded">
          <VscLayoutPanel className="h-4 w-4" />
        </span>
        <span className="hover:bg-gray-600 p-2 rounded">
          <VscLayoutSidebarRight className="h-4 w-4" />
        </span>
      </span>

      <span className="flex items-center justify-center gap-4">
        <span className="hover:bg-gray-600 p-2 ml-4 rounded">
          <FaMinus className="h-4 w-4" />
        </span>
        <span className="hover:bg-gray-600 p-2 rounded">
          <FaRegWindowRestore className="h-4 w-4" />
        </span>
        <span className="hover:bg-red-600 p-2 rounded">
          <ImCross className="h-4 w-4" />
        </span>
      </span>
    </div>
  );
};

export default TopMenuBar;
