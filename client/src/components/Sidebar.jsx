const Sidebar = () => {
  // Abhi bhi dummy data hai, lekin structure real hai
  return (
    <div className="w-64 bg-[#252526] text-gray-300 p-2">
      <h2 className="text-sm font-bold uppercase tracking-wide px-2 py-1">
        Explorer
      </h2>
      <div className="mt-2">
        <p className="text-xs font-semibold uppercase px-2 py-1">
          DevSync Project
        </p>
        <ul className="mt-1">
          <li className="flex items-center gap-2 p-1 rounded hover:bg-gray-700 cursor-pointer">
            <span className="text-yellow-400">📄</span> script.js
          </li>
          <li className="flex items-center gap-2 p-1 rounded hover:bg-gray-700 cursor-pointer">
            <span className="text-orange-500">📄</span> index.html
          </li>
          <li className="flex items-center gap-2 p-1 rounded hover:bg-gray-700 cursor-pointer">
            <span className="text-blue-500">📄</span> style.css
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
