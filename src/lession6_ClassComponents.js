import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById("root"));

class Product extends React.Component {
    constructor(propes) {

        super(propes);//compulsory
        //create property variable (that can be accessed all methods of the class)
        this.name = propes.name
        this.photo = propes.photo
        this.price = propes.price

        // Creat a state object
        this.state = {
            message: ' Add to card',
            mess : 'Add to buy '
        }
    }

addTocart = () => {
    // change the veriable this . state 
    alert('Item add')
    this.setState({
        message: 'Added'
    });
}
addTobuy=()=>{
    alert('Item Buy')
    this.setState({
        mess: 'Item Buy '
    })
}
render() {
    return (
        <>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
                <div className="card shadow">
                    <div className="card-hedar text-center">
                        <h2>{this.name}</h2>
                    </div>
                    <div className="card-body text-center">
                        <img src={this.photo} className="img-fluid" />
                        <h3 className="mt-2"> RS .. {this.price} </h3>
                    </div>
                    <div className="card-footer d-flex justify-content-between p-3">
                        <button onClick={() => this.addTocart()} className="btn btn-info" > Your Good Time Collection  </button>
                        <button onClick={() => this.addTobuy()} className="btn btn-info"> PayOut  </button>
                    </div>
                </div>
            </div>
        </>
    )
}
}

class Componey extends React.Component {
    render() {
        return (
            <>
                <div className="container-fluid bg-light shadow p-3">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between">
                            <h3> The Rich Time </h3>
                            <ul className="nav">
                                <li className="nav-item"><a className="nav-link"> Welcome Home  </a></li>
                                <li className="nav-item"><a className="nav-link"> Our Peredise Collection  </a></li>
                                <li className="nav-item"><a className="nav-link"> Your Good Time Collection   </a></li>
                                <li className="nav-item"><a className="nav-link"> PayOut  </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-4">
                        <Product name="Rolax" photo="https://picsum.photos/300?random=1" price="200k$" />
                        <Product name="Rolax Air" photo="https://picsum.photos/300?random=2" price="400k$" />
                        <Product name="Rolax Medacast" photo="https://picsum.photos/300?random=3" price="500k$" />
                        <Product name="Rolax Green" photo="https://picsum.photos/300?random=4" price="600k$" />
                        <Product name="Patic Phylips" photo="https://picsum.photos/300?random=5" price="600k$" />
                        <Product name="Jacob & Componey" photo="https://picsum.photos/300?random=6" price="600k$" />

                    </div>
                </div>
            </>
        )
    }
}

root.render(<Componey />)
// reportWebVitals();
