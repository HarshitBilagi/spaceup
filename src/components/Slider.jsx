import React from "react";
import "../index.css";
import "./Slider.jsx";

function Slider() {
  return (
    <section className="section2">
      <div className="container">
        <input type="radio" name="slider" id="item-1" checked></input>
        <input type="radio" name="slider" id="item-2"></input>
        <input type="radio" name="slider" id="item-3"></input>
        <div className="cards">
          <label className="card" for="item-1" id="song-1">
            <img
              className="img"
              src="https://images.pexels.com/photos/14356220/pexels-photo-14356220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="song"
            ></img>
          </label>
          <label className="card" for="item-2" id="song-2">
            <img
              className="img"
              src="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg"
              alt="song"
            ></img>
          </label>
          <label className="card" for="item-3" id="song-3">
            <img
              className="img"
              src="https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg"
              alt="song"
            ></img>
          </label>
        </div>
      </div>
    </section>
  );
}

export default Slider;
