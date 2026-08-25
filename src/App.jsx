import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import Navbar from "./components/pages/Navbar";
import Biografy from "./components/pages/Biografy";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/biografy" element={<Biografy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
