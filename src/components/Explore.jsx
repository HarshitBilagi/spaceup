import React from "react";
import "../index.css";

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
}

const button = {
  backgroundColor:"black",
  color: "white",
  fontSize: "1.5rem",
};

const para = {
  color: "white",
  width: "fit-content",
  fontSize: "1.2rem",
  fontFamily: "sans-serif",
  textAlign: "justify",
  lineHeight: "25px",
};

function Explore(props) {
  return (
    <section className="section3" id="Explore">
      <div style={blogDiv}>
        <div style={subDiv}>
          <h1 style={blogsHeading}>Explore</h1>
          <p style={para}>
          Embark on a cosmic adventure as we unveil the mysteries of the universe and explore a world of insights in our diverse blog collection. Stay updated on upcoming celestial events, from meteor showers to planetary alignments, and dive into thought-provoking articles crafted to inform and inspire. Explore the wonders of the cosmos, witness the celestial dance, and join us in celebrating our realm of achievements, where innovation meets success. Click below to discover upcoming events, captivating blogs, and the milestones that define our story.
          </p>
          <button className="buttonClass">Visit</button>
        </div>
      </div>
    </section>
  );
}

export default Explore;
