import React from "react";
import "../index.css";
import SingleBlog from "./SingleBlog";
import blogData from "../components/blogsData";

const blogDiv = {
  padding: "2rem",
  height: "100vh",
  width: "100vw",
  position: "absolute",
  marginBottom: "200px",
  backgroundColor: "rgba(0,0,0,0.1)",
  backdropFilter: "blur(100px)",
};

const blogsHeading = {
  color: "white",
  fontSize: "5rem",
  fontWeight: "bold",
  fontFamily: "Consolas",
  textShadow: "2px 2px 4px #000000",
};

const heading = {
  color: "white",
  fontSize: "5rem",
  width: "fit-content",
  fontWeight: "bold",
  fontFamily: "Consolas",
  marginTop: "0px",
  marginLeft: "0px",
  textShadow: "2px 2px 4px #000000",
};

const subDiv = {
  position: "relative",
  maxWidth: "90%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
};

function Explore(props) {
  return (
    <section className="BlogsSection1">
      <div style={blogDiv}>
        <h1 style={heading}>Blogs</h1>
        <div style={subDiv}>
          {blogData.map((blog) => (
            <SingleBlog
              id={blog.id}
              title={blog.title}
              image={blog.image}
              author={blog.author}
              date={blog.date}
            />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Explore;
