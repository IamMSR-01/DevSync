import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function Header() {
  const { isSignedIn } = useUser();

  console.log("User signed in:", isSignedIn);
//   const navigate = useNavigate();

  return (
    <header className="w-full bg-gray-900/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-10 py-4 flex items-center justify-between">
        {/* Logo / App Name */}
        <div className="flex justify-center items-center space-x-3">
          <img className="w-10 h-10 rounded-full" src="Logo.png" alt="Logo" />
          <h1 className="text-2xl font-bold text-white tracking-wide">
            Dev<span className="text-purple-400">Sync</span>
          </h1>
        </div>

        {/* Navigation Links (Optional) */}
        <nav className="hidden md:flex space-x-6 text-gray-300">
          <a href="#features" className="hover:text-purple-400 transition">
            Features
          </a>
          <a href="#about" className="hover:text-purple-400 transition">
            About
          </a>
          <a href="#contact" className="hover:text-purple-400 transition">
            Contact
          </a>
        </nav>

        {/* Clerk Login Button */}
        <div>
          {isSignedIn ? (
            <div>
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="Code Editor"
                  />
                </UserButton.MenuItems>
              </UserButton>
            </div>
          ) : (
            <Link
              to="/sign-in"
              className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
