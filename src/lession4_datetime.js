import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));


function Datetime(today) {
  let output = (
    <div>
      <div className="container mt-5 offset-2" >
        <div className="row">
          <div className="col -12">
            <table width='100%' align="center">
              <tr>
                <td>Day</td>
                <td>Month</td>
                <td>Year</td>
              </tr>
              <tr>
                <td>{today.day}</td>
                <td>{today.Month}</td>
                <td>{today.Year}</td>
              </tr>
              <tr>
                <td>Hour</td>
                <td>Minute</td>
                <td>Secound</td>
              </tr>
              <tr>
                <td>{today.hour}</td>
                <td>{today.Minutes}</td>
                <td>{today.Secounds}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
  return output;

}
var now = new Date()
var today ={
  day : now.getDay(),
  Month : now.getMonth()+1,
  Year : now.getYear(),
  hour : now.getHours(),
  Minutes : now.getMinutes(),
  Secounds : now.getSeconds(),
}
root.render(Datetime(today));

// reportWebVitals();
