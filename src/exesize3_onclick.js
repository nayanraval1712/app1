import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById("root"));

class Case extends React.Component {
    constructor(propes){
        super(propes);
        this.state ={
           Number : 0 
        }
    }
    add = ()=>{
        this.setState({

            Number: this.state.Number+1,
        });
    }
    minus = ()=>{
        this.setState({

            Number: this.state.Number-1,
        });
    }
    rest = ()=>{
        this.setState({

            Number: this.state.Number - this.state.Number,
        });
    }
    
    render() {
        return (
            <div className="col-6 offset-3 mt-5">
                <div className="card shedow">
                    <div className="card-body text-center ">
                        <h3> Count :{this.state.Number} </h3>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <button className="btn btn-info " onClick={()=> this.add()}> Addition  </button>
                        <button className="btn btn-success " onClick={()=> this.minus()}> Substration   </button>
                        <button className="btn btn-danger " onClick={()=> this.rest()}> Resat  </button>
                    </div>
                </div>
            </div>
        )
    }
}

class Count extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Case/>
                </div>
            </div>
        )

    }
}
root.render(<Count />)
// reportWebVitals();
