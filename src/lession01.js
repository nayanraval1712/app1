import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
var output =(
    <div>
        <h1 align='center'> Example and lession 1 table</h1>
     <table border='2' align='center' width='50%' cellPadding={10}>
     <thead>
        <tr>
          <td>No.</td>
          <td>Name</td>
          <td>Number</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01</td>
          <td>Nayan Raval</td>
          <td>9284710300</td>
        </tr>
        <tr>
          <td>02</td>
          <td>Brijesh Mandaliya</td>
          <td>9284710300</td>
        </tr>
        <tr>
          <td>03</td>
          <td>Karan Talsaniya</td>
          <td>9284710300</td>
        </tr>
        <tr>
          <td>04</td>
          <td>Umang Pandya</td>
          <td>9284710300</td>
        </tr>
      </tbody>
     </table>
    </div>
  );
root.render(output);


reportWebVitals();
