import React from "react";

const navStyles = {
  position:"fixed",
  width: "100%",
  height: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "rgba(255, 255, 255, 0.02)",
  position: "fixed",
  top: "0",
  color: "#ffffff",
  padding: "25px 35px",
  fontFamily: 'Futurism',
  backdropFilter: "blur(15px)",
  boxShadow: "0 0 30px black",
  zIndex: "999",
};

const preStyles = {
  paddingTop: "15px",
};

const aStyles = {
  color: "#ffffff",
  letterSpacing: "1px",
  textDecoration: "none",
  margin: "auto 10px",
  fontFamily: "consolas",
};

const uList = {
  display: "flex",
  listStyle: "none",
  padding: "0",
  marginRight: "4rem",
};

const anchorStyles = {
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "1.3rem",
  fontWeight: "bold",
  letterSpacing: "2px",
  fontFamily: 'Futurism',
};

function Navbar() {
  return (
    <nav style={navStyles}>
      <a href="index.html" style={anchorStyles}>
        <p>SPACEUP</p>
      </a>
      <ul style={uList}>
        <li>
          <a href="#section1" style={aStyles}>
            Home
          </a>
        </li>
        <li>
          <a href="#Explore" style={aStyles}>
            Explore
          </a>
        </li>
        <li>
          <a href="#blogs" style={aStyles}>
            Blogs
          </a>
        </li>
        <li>
          <a href="#About" style={aStyles}>
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;