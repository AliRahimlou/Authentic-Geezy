import React from "react";
import HoverPic from "./components/header/header";
import Listen from "./components/listen/listen";
import Watch from "./components/watch/watchvideo";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";

import "./App.css";

function App() {
  return (
    <div className="div">
      <Navbar />
      <HoverPic />
      <Listen />
      <Watch />
      <Footer />
    </div>
  );
}

export default App;
