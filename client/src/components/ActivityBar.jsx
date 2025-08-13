import { UserButton, useUser } from "@clerk/clerk-react";
import {
  VscExtensions,
  VscFiles,
  VscSearch,
  VscSettingsGear,
  VscSourceControl,
} from "react-icons/vsc";

const ActivityBar = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="w-16 text-gray-300 flex flex-col justify-between items-center py-4 gap-4 h-[calc(100vh-45px)]">
      <div className="flex flex-col items-center gap-6">
        <VscFiles
          size={25}
          className="cursor-pointer text-gray-500 hover:text-white"
        />
        <VscSearch
          size={25}
          className="cursor-pointer text-gray-500 hover:text-white"
        />
        <VscSourceControl
          size={25}
          className="cursor-pointer text-gray-500 hover:text-white"
        />
        <VscExtensions
          size={25}
          className="cursor-pointer text-gray-500 hover:text-white"
        />
      </div>
      <div className="gap-6 flex flex-col items-center">
        {isSignedIn && (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action label="Code Editor" />
            </UserButton.MenuItems>
          </UserButton>
        )}
        <VscSettingsGear
          size={25}
          className="cursor-pointer text-gray-500 hover:text-white"
        />
      </div>
    </div>
  );
};

export default ActivityBar;
