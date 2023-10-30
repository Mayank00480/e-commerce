import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './About';
//import "../node_modules/react-bootstrap/dist/react-bootstrap.js"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Router>
    <Routes>
    <Route exact path = "/" Component={App} />
    <Route exact path = "/About" Component={About} />
    <Route exact path = "/Home" Component={Home}/>
    </Routes>
</Router>  
);


