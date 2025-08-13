import { BsThreeDots, BsFolderPlus } from "react-icons/bs";
import { VscNewFile, VscCollapseAll } from "react-icons/vsc";
import { IoMdRefresh } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";


const Sidebar = () => {
  // Abhi bhi dummy data hai, lekin structure real hai
  return (
    <div className="w-64 border-l border-r border-gray-700  text-gray-300 p-2">
      <h2 className="text-xs font-medium uppercase tracking-wide px-2 py-1 flex items-center justify-between">
        Explorer <span className="hover:text-white text-gray-300 hover:bg-gray-600 p-1 rounded"><BsThreeDots size={15} /></span>
      </h2>
      <div className="mt-2">
        <div className="text-xs font-bold uppercase px-2 py-1 flex items-center justify-between bg-gray-800 rounded">
          <span className="flex items-center justify-center gap-1"><FaChevronDown />DevSync</span><span className="flex"><VscNewFile size={25} className="hover:bg-gray-700 p-1 rounded" /><BsFolderPlus size={25} className="hover:bg-gray-700 p-1 rounded" /><IoMdRefresh size={25} className="hover:bg-gray-700 p-1 rounded" /><VscCollapseAll size={25} className="hover:bg-gray-700 p-1 rounded" /></span>
        </div>
        {/* <ul className="mt-1">
          <li className="flex items-center gap-2 p-1 rounded hover:bg-gray-700 cursor-pointer">
            <span className="text-yellow-400">📄</span> script.js
          </li>
          <li className="flex items-center gap-2 p-1 rounded hover:bg-gray-700 cursor-pointer">
            <span className="text-orange-500">📄</span> index.html
          </li>
          <li className="flex items-center gap-2 p-1 rounded hover:bg-gray-700 cursor-pointer">
            <span className="text-blue-500">📄</span> style.css
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Sidebar;
