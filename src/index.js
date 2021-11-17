import React from "react";
import ReactDOM from 'react-dom';
import App from "./App"
import { BrowserRouter } from "react-router-dom";
import 'jquery';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'popper.js/dist/popper'
import 'popper.js'



ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,
    document.querySelector('#root'))