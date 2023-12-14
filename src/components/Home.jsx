import React from "react";
import Navbar from "./Navbar";
import LandingHeader from "./LandingHeader";
import Slider from "./Slider";
import Blogs from "./Blogs";
import Explore from "./Explore";
import About from "./About";
import Footer from "./Footer";
import "../index.css";

function Home() {
  return (
    <div>
      <Navbar />
      <LandingHeader />
      <Slider />
      <Explore />
      <Blogs />
      <About />
    </div>
  );
}

export default Home;