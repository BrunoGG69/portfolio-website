import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MoreAboutMe from "./pages/MoreAboutMe";
import Blog from "./pages/Blog.jsx";
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
import Blog1 from "./pages/blogPosts/Blog1.jsx";
import Blog2 from "./pages/blogPosts/Blog2.jsx";
import Blog3 from "./pages/blogPosts/Blog3.jsx";
import Blog4 from "./pages/blogPosts/Blog4.jsx";
import Blog5 from "./pages/blogPosts/Blog5.jsx";
import Blog6 from "./pages/blogPosts/Blog6.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/more-about-me" element={<MoreAboutMe />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<Blog />} />
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
        <Route path="/Blog1" element={<Blog1 />} />
        <Route path="/Blog2" element={<Blog2 />} />
        <Route path="/Blog3" element={<Blog3 />} />
        <Route path="/Blog4" element={<Blog4 />} />
        <Route path="/Blog5" element={<Blog5 />} />
        <Route path="/Blog6" element={<Blog6 />} />


    </Routes>
  );
}

export default App;
