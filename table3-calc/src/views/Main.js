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
              <button>n/a</button>
              <button>.</button>
              <button>+/-</button>
              <button>C</button>
              <button>()</button>
              <button>%</button>
            </div>
            <div id="calc-number">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button style={{ width: "104px" }}>0</button>
              <button>00</button>
            </div>
          </div>
          <div id="calc-right-func">
            <button>◀</button>
            <button>/</button>
            <button>*</button>
            <button>-</button>
            <button>+</button>
            <button>=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
