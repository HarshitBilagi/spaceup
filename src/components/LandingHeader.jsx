import React from "react";
import "../index.css";

const sectionStyles = {
  width: "100%",
  height: "100vh",
  backgroundImage:
    "url('../images/planet-earth-4k-space-hd-qis7o51sock2fwsr.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const headerDiv = {
  width: "fit-content",
  position: "absolute",
  top: "27%",
};

const headerStyles = {
  width: "fit-content",
  fontSize: "6rem",
  fontFamily: "Futurism",
  color: "#fff",
};

function LandingHeader() {
  return (
    <section className="section1" id="section1">
      <div style={headerDiv}>
        <h1 style={headerStyles}>Spaceup</h1>
      </div>
    </section>
  );
}

export default LandingHeader;
