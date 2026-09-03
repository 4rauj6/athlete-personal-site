import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import Navbar from "./components/pages/Navbar";
import Biografy from "./components/pages/Biografy";
import Achievements from "./components/pages/Achievements";
import Page404 from "./components/pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/biografy" element={<Biografy />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
