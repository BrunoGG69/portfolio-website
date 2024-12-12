import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoreAboutMe from "./pages/MoreAboutMe";
import Python from "./pages/aboutMyProficiencies/python.jsx";
import Cpp from "./pages/aboutMyProficiencies/cpp.jsx";
import Arduino from "./pages/aboutMyProficiencies/arduino.jsx";
import Js from "./pages/aboutMyProficiencies/js.jsx";
import React from "./pages/aboutMyProficiencies/react.jsx";
import Reactnative from "./pages/aboutMyProficiencies/reactnative.jsx";
import Tailwindcss from "./pages/aboutMyProficiencies/tailwindcss.jsx";
import HomeAssistant from "./pages/aboutMyProficiencies/homeassistant.jsx";
import Docker from "./pages/aboutMyProficiencies/docker.jsx";
import HTML from "./pages/aboutMyProficiencies/html.jsx";
import CSS from "./pages/aboutMyProficiencies/css.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/more-about-me" element={<MoreAboutMe />} />
      <Route path="/python" element={<Python />} />
      <Route path="/c++" element={<Cpp />} />
      <Route path="/arduino" element={<Arduino />} />
      <Route path="/js" element={<Js />} />
      <Route path="/react" element={<React />} />
      <Route path="/reactnative" element={<Reactnative />} />
      <Route path="/tailwindcss" element={<Tailwindcss />} />
      <Route path="/homeassistant" element={<HomeAssistant />} />
      <Route path="/docker" element={<Docker />} />
      <Route path="/html" element={<HTML />} />
      <Route path="/css" element={<CSS />} />
    </Routes>
  );
}

export default App;
