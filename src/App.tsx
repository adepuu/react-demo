import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Profile from "./routes/Profile";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
  );
}

export default App
