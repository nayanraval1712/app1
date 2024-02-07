import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById("root"));

class Nayan extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            result: [],
            CauntryName: ' ',
            FlagURL: '',
            CapitalName: ''
        }
  
    }
    onInputchang = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onInputSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

    }


    DisplyCard = (item) => {
        let { CauntryName, FlagURL, CapitalName } = item
        let display = <>
            <div className="card text-center">
                <div className="card-header"> {item.CauntryName}</div>
                <div className="card-body"> hello</div>
                <div className="card-footer"> hello</div>
            </div>

        </>
        return display;
    }
    render() {
        return (
            <>

                <div className="container bg-light">
                    <div className="col-12">
                        <form onSubmit={this.onInputSubmit} className="row g-2 align-items-center mt-5">
                            <div className="col-3 ">
                                <label className="sr-only mb-3" htmlFor="input1">Cauntry Name :</label>
                                <input name='CauntryName' value={this.state.CauntryName} type="text" className="form-control mb-2" id="input1" onChange={this.onInputchang} />
                            </div>
                            <div className="col-3">
                                <label className="sr-only mb-3" htmlFor="input2">Flag URL</label>
                                <input name="FlagURL" value={this.state.FlagURL} type="text" className="form-control mb-2" id="input2" onChange={this.onInputchang} />
                            </div>
                            <div className="col-3">
                                <label className="sr-only mb-3" htmlFor="input3">Capital Name </label>
                                <input name="CapitalName" value={this.state.CapitalName} type="text" className="form-control mb-2" id="input3" onChange={this.onInputchang} />
                            </div>
                            <div className="col-3">
                                <button type="submit" className="btn btn-primary mt-4">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>

                <div className="container mt-5">
                    <div className="col-5 offset-3" >
                        {this.state.result.map((item, index) => this.DisplyCard(item, index))}

                    </div>
                </div>
            </>

        )
    }

}

root.render(<Nayan />)
// // reportWebVitals();


