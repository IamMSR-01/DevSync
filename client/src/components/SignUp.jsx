import { SignUp } from "@clerk/clerk-react";

function Signup() {
  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
      <SignUp />
    </div>
  )
}

export default Signup