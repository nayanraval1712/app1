import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

var ragister = (
  <div className="container">
    <div className="row ">
      <div className="col-6 offset-3 mt-5">
        <div className="card">
          <div className="card-hader text-center text-bg-info "><h3> Ragistration Form </h3></div>
          <div className="card-body">
            <form>
              <div>
                <label htmlFor="email"  className='mb-2'>Email:</label>
                <input type="text" id="email" name="email" className="form-control" />
              </div>
              <div>
                <label htmlFor="password"  className='mb-2'>Password:</label>
                <input type="number" id="password" name="password" className="form-control" />
              </div>
              <div>
                <label htmlFor="Conform Password"  className='mb-2'>Conform Password:</label>
                <input type="number" id="Conform Password" name="Conform Password" className="form-control" />
              </div>
              <div>
                <label htmlFor="Mobile Number"  className='mb-2'>Mobile Number :</label>
                <input type="number" id="Mobile Number" name="Mobile Number" className="form-control" />
              </div>
                <input type="button" className="btn btn-info w-100 mt-3" value = "Submit" />
                <input type="button" className="btn btn-danger w-100 mt-3" value = "Clear" />
            </form>
          </div>
        </div>
      </div>
    </div >
  </div >

);

root.render(ragister);

reportWebVitals();
