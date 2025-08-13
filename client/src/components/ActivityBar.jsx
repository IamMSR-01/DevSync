import { VscExtensions, VscFiles, VscSearch, VscSettingsGear, VscSourceControl } from "react-icons/vsc";

const ActivityBar = () => {
  return (
    <div className="w-16 bg-gray-900 text-gray-300 flex flex-col items-center py-4 space-y-6">
      <VscFiles size={28} className="cursor-pointer hover:text-white" />
      <VscSearch size={28} className="cursor-pointer hover:text-white" />
      <VscSourceControl size={28} className="cursor-pointer hover:text-white" />
      <VscExtensions size={28} className="cursor-pointer hover:text-white" />
      <div className="mt-auto">
        <VscSettingsGear
          size={28}
          className="cursor-pointer hover:text-white"
        />
      </div>
    </div>
  );
};

export default ActivityBar;
