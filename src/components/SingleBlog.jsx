import React from "react";
import "../index.css"

const blog = {
  marginTop: "100px",
  padding: "2rem",
  color: "white",
  height: "45vh",
  width: "20vw",
  backgroundColor: "rgba(255,255,255, 0.05)",
  backdropFilter: "blur(30px)",
};

const image = {
  maxWidth: "16vw",
  position: "relative",

}

function SingleBlog(props) {
  return (
      <div style={blog} className="blog">
        <img style={image} src={props.image} alt="" />
        <div>
        <h1>{props.title}</h1>
        <h3>{props.author}</h3>
        <p>{props.date}</p>
        </div>
      </div>
  );
}

export default SingleBlog;
