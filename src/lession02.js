import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
var jack = (
  <div>
  

   <div className="container">
    <div className="row">
    <h2 className="text-center">Top 10 Richest People</h2>
      <div className="col-12">
      <table  className="table table-striped  mt-5">
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Country</th>
        <th>Net Worth (in billions)</th>
        <th>Company</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Elon Musk</td>
        <td>United States</td>
        <td>219</td>
        <td>Tesla, SpaceX</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jeff Bezos</td>
        <td>United States</td>
        <td>185</td>
        <td>Amazon</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Bernard Arnault & family</td>
        <td>France</td>
        <td>155</td>
        <td>LVMH</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Bill Gates</td>
        <td>United States</td>
        <td>134</td>
        <td>Microsoft</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Mark Zuckerberg</td>
        <td>United States</td>
        <td>129</td>
        <td>Meta Platforms</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Warren Buffett</td>
        <td>United States</td>
        <td>128</td>
        <td>Berkshire Hathaway</td>
      </tr>
      <tr>
        <td>7</td>
        <td>Larry Page</td>
        <td>United States</td>
        <td>122</td>
        <td>Alphabet</td>
      </tr>
      <tr>
        <td>8</td>
        <td>Sergey Brin</td>
        <td>United States</td>
        <td>119</td>
        <td>Alphabet</td>
      </tr>
      <tr>
        <td>9</td>
        <td>Mukesh Ambani</td>
        <td>India</td>
        <td>98</td>
        <td>Reliance Industries</td>
      </tr>
      <tr>
        <td>10</td>
        <td>Steve Ballmer</td>
        <td>United States</td>
        <td>96</td>
        <td>Microsoft</td>
      </tr>
    </table>
      </div>
    </div>
   </div>
  </div>
);

root.render(jack);

reportWebVitals();
