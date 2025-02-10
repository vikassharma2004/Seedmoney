import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";
import Video from "./pages/video/Video";
import VideoDetail from "./pages/video/VideoDetail";
import Profilepage from "./pages/Home/profile/Profilepage";

export default function App() {
  return (
    <>

  <Navigation/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videos" element={<Video/>} />
      <Route path="/video/:id" element={<VideoDetail/>} />
      <Route path="/profile" element={<Profilepage/>} />
      <Route path="/*" element={<h1>no page found</h1>} />
    </Routes>
    <Footer/>
    </>
  );
}
