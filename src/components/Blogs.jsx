import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory from react-router-dom
import "../index.css";
import BlogPage from "./BlogsPage";

const blogDiv = {
  padding: "2rem",
  height: "100vh",
  width: "100vw",
  position: "absolute",
  marginBottom: "200px",
  backgroundColor: "rgba(0,0,0,0.1)",
  backdropFilter: "blur(30px)",
};

const blogsHeading = {
  color: "white",
  fontSize: "5rem",
  fontWeight: "bold",
  fontFamily: "Consolas",
  textShadow: "2px 2px 4px #000000",
};

const subDiv = {
  width: "45rem",
  height: "20rem",
  marginTop: "10%",
};

const button = {
  color: "white",
  fontSize: "1.5rem",
  marginTop: "1rem",
};

const para = {
  color: "white",
  width: "fit-content",
  fontSize: "1.2rem",
  fontFamily: "sans-serif",
  textAlign: "justify",
  lineHeight: "25px",
};

function Blogs() {

  return (
    <section className="section4" id="blogs">
      <div style={blogDiv}>
        <div style={subDiv}>
          <h1 style={blogsHeading}>Blogs</h1>
          <p style={para}>
            Explore a world of insights and knowledge in our diverse blog
            collection, covering topics from technology to lifestyle. Dive
            into thought-provoking articles crafted to inform and inspire.
            Ready to embark on a journey of discovery? Click below to delve
            into our captivating blogs.
          </p>
          <button style={button}>
            Visit
          </button>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
