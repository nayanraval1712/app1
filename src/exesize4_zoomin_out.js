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
            zoom: 1,
            rotate: 0
        }
    }
    ZOOMIN = () => {
        this.setState((prevState) => ({
            zoom: prevState.zoom + 0.1
        }));
    }
    ZOOMOUT = () => {
        this.setState((prevState) => ({
            zoom: prevState.zoom - 0.1
        }));

    }
    rotate = () => {
        this.setState((prevState) => ({
            rotate: prevState.rotate + 10
        }));

    }
    rotateLEFT = () => {
        this.setState((prevState) => ({
            rotate: prevState.rotate - 10
        }));
    }

    render() {
        const { zoom } = this.state;
        const { rotate } = this.state;
        return (
            <div className="container">
                <div className="row mb-5">
                    <div className="col-6 offset-3 mt-5" >
                        <div className="card">
                            <div className="card-header">
                                <div className="card-body">
                                    <img src="https://picsum.photos/100?random=1" className="card-img-top"
                                        style={{
                                            transform: `scale(${zoom}) rotate(${rotate}deg )`,

                                        }} />


                                </div>

                                <div className="card-footer">
                                    <button onClick={this.ZOOMIN}  className="btn btn-sucess" > ZOOM IN  + </button>
                                    <button onClick={this.ZOOMOUT}  className="btn btn-info "> ZOOM OUT - </button>
                                    <button onClick={this.rotate}  className="btn btn-info "> ROTED RIGHT + </button>
                                    <button onClick={this.rotateLEFT}  className="btn btn-info "> ROTED LEFT - </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

root.render(<Nayan />)
// // reportWebVitals();


