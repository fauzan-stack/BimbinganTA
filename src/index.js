import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './Menu/Menu.jsx'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login/Login.jsx'
import DataMahasiswa from './Data/DataMahasiswa.jsx';
import DataDosen from './Data/DataDosen.jsx';
import DataBimbingan from './Data/DataBimbingan.jsx';

ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/Home" component={Menu} />
        <Route path="/DataMahasiswa" component={DataMahasiswa} />
        <Route path="/DataDosen" component={DataDosen} />
        <Route path="/DataBimbingan" component={DataBimbingan} />
      </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
