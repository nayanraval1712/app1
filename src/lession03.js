import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

function intressCalculter() {
  var page = (
    <div className="container">
      <div className="row ">
        <div className="col-6 offset-3 mt-5">
          <div className="card">
            <div className="card-header">
              <h3> Intress Calculeter</h3>
            </div>
            <div className="card-body">
            <form>
            <div>
                <label className="form-lebal" htmlFor="amount">
                  {" "}
                  Amount{" "}
                </label>
                <input type="number" id="amount" className="form-control" />
              </div>
              <div>
                <label className="form-lebal" htmlFor="rate">
                  {" "}
                  Rate{" "}
                </label>
                <input type="number" id="rate" className="form-control" />
              </div>
              <div>
                <label className="form-lebal" htmlFor="year">
                  {" "}
                  Year{" "}
                </label>
                <input type="number" id="year" className="form-control" />
              </div>
              <input type="button" className="btn btn-danger w-100 mt-3" value='calculate' />
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return page;
}
root.render(intressCalculter());

reportWebVitals();
