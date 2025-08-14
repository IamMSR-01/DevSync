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

const TopMenuBar = () => {
  const menuItems = [
    "File",
    "Edit",
    "Selection",
    "View",
    "Go",
    "Run",
    "Terminal",
    "Help",
  ];
  return (
    <div className="text-gray-300 w-full px-4 pt-3 flex text-sm justify-between items-center h-7">
      <div className="flex items-center justify-center">
        <img
          src="Logo.png"
          alt="Logo"
          className="h-6 w-6 rounded-full"
        />
        <div>
          {menuItems.map((item) => (
            <span
              key={item}
              className="cursor-pointer hover:bg-gray-600 px-2 py-1 rounded"
            >
              {item}
            </span>
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
