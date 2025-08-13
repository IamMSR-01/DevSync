import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./components/SignUp.jsx";
import Home from "./pages/Home.jsx";
import RoomPage from "./pages/RoomPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
