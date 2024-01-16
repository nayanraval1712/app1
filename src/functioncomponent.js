import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById("root"));


function Cource(props) {
    return (
        <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-2'>
            <div className="card shadow">
                <img src={props.photo} className="card-img-top" />
                <div className="card-body">
                    <h4> {props.name}</h4>
                    <p>{props.details} </p>
                    <a className="btn btn-primary w-100%">Read more ...</a>
                </div>
            </div>
        </div>
    )
}

function Nayan() {
    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-12">
                    <h1>Example of Function Component</h1>
                </div>
            </div>
            <div className="row">
                <Cource photo ='https://picsum.photos/200?random=1' name= "Nayan Raval" details= "My Name is Nayan Raval"/>
                <Cource photo ='https://picsum.photos/200?random=2' name= "Brijesh Mandaliya" details= "My Name is Brijesh Mandaliya" />
                <Cource photo ='https://picsum.photos/200?random=3' name= "Karan Talsaniya" details= "My Name is Karan Talsaniya" />
                <Cource photo ='https://picsum.photos/200?random=4' name= "Jit Bhadiyadra" details= "My Name is Jit Bhadiyadra" />
            </div>
        </div>
    );
}
root.render(<Nayan />)


// reportWebVitals();
