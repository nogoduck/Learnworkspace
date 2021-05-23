import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div id="calc__container">
        <input type="text"></input>

        <div style={{ display: "flex" }}>
          <div>
            <div id="calc-top-func">
              <button className="btn btn-null">n/a</button>
              <button className="btn">.</button>
              <button className="btn">+/-</button>
              <button className="btn">C</button>
              <button className="btn">()</button>
              <button className="btn">%</button>
            </div>
            <div id="calc-number">
              <button className="btn">1</button>
              <button className="btn">2</button>
              <button className="btn">3</button>
              <button className="btn">4</button>
              <button className="btn">5</button>
              <button className="btn">6</button>
              <button className="btn">7</button>
              <button className="btn">8</button>
              <button className="btn">9</button>
              <button className="btn btn-width-2">0</button>
              <button className="btn">00</button>
            </div>
          </div>
          <div id="calc-right-func">
            <button className="btn">◀</button>
            <button className="btn">/</button>
            <button className="btn">*</button>
            <button className="btn">-</button>
            <button className="btn">+</button>
            <button className="btn">=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
