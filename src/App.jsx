import { useState } from "react";
import "./App.css";
import "./main.css";

import { Routes, Route } from "react-router-dom";

import Feed from "./pages/Feed";
import ChannelDetail from "./pages/ChannelDetail";
import VideoPage from "./pages/VideoPage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/video/:id" element={<VideoPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
