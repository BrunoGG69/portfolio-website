import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoreAboutMe from "./pages/MoreAboutMe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/more-about-me" element={<MoreAboutMe />} />
    </Routes>
  );
}

export default App;
