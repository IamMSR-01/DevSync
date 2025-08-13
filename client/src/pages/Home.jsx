// src/pages/Home.jsx
import React from "react";
import { SignInButton, useUser } from "@clerk/clerk-react";
import CodeEditor from "../components/CodeEditor.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  const { isLoggedIn } = useUser();
  console.log("Logged in:", isLoggedIn);

  // if (!isLoaded) {
  //   return (
  //     <div className="h-screen bg-gray-900 text-white flex items-center justify-center">
  //       Loading...
  //     </div>
  //   );
  // }

  return (
    <div>
      {isLoggedIn ? (
        <div className="bg-gray-900">
          <CodeEditor />
        </div>
      ) : (
        <div>
          <Header />
          <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center px-6 text-white relative overflow-hidden">
            {/* Floating background shapes */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

            {/* App Name */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-center drop-shadow-lg">
              Live Code <span className="text-purple-400">Guardian</span>
            </h1>

            {/* Tagline */}
            <p className="mt-4 text-lg md:text-xl text-gray-300 text-center max-w-xl">
              Collaborate in real-time. Detect bugs instantly. Secure & optimize
              your code with AI-powered insights.
            </p>

            {/* Login Button */}
            <div className="mt-8">
              <SignInButton mode="modal">
                <button className="px-6 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-transform transform hover:scale-105 shadow-lg">
                  🚀 Login to Get Started
                </button>
              </SignInButton>
            </div>

            {/* Footer */}
            <p className="mt-12 text-sm text-gray-500">
              Made with ❤️ by Shaqib
            </p>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
