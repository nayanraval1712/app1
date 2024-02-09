// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import React, { useState } from 'react';
function Instapost(props) {
    let { usename, photo } = props;
    let [islike, setIslike] = useState(false)
    let updateLike = function () {
        // alert('hi ...')
        if (islike === false) { setIslike(true) }
        else { setIslike(false) }

    }
    // crating for message state verialble 
    let [message, setMessage] = useState('')
    let [Comment, setComment] = useState([])
    let addComment = function () {
        console.log(message)
        // add message ni array useState[]
        setComment([...Comment, message]);
        setMessage('')
    }
    // now display the comments 

    let displayComments = function () {
        let output = '';
        output = Comment.map((item) => { return <p>{item}</p> })
        return output
    }
    let [Number, setNumber] = useState(0)
    const plus = () => {
        setNumber((prevNumber) => prevNumber + 1);
    };
    return (
        <div className="container mt-5">
            <div className="col-6 offset-3">
                <div className="card">
                    <div className="card-header">
                        <h3>   Name :{usename}</h3>
                    </div>
                    <div className="card-body">
                        <img src={photo} className="img-fluid" />
                        <img onClick={updateLike} src={(islike === true) ? 'like.png' : 'dislike.png'} height='50px' alt="" />
                        {plus(Number)}
                        <div className="row">
                            <div className="col-9 " >
                                <textarea value={message} onChange={(event) => setMessage(event.target.value)} className="form-control"></textarea>
                            </div>
                            <div className="col-3">
                                <button className="btn btn-info" onClick={addComment}> PostComment </button>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer mt-2">
                        {displayComments()}
                    </div>
                </div>
            </div>
        </div>
    )
}
function Page() {
    return (
        <Instapost usename='NAYAN@GMAIL.COM' photo='https://picsum.photos/600/300?random=1' />
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />)





