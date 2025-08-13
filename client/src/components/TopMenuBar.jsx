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
    <div className="bg-[#3c3c3c] text-gray-300 px-4 py-1 flex space-x-4 text-sm">
      {menuItems.map((item) => (
        <span
          key={item}
          className="cursor-pointer hover:bg-gray-600 px-2 rounded"
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default TopMenuBar;
