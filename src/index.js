import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './About';
//import "../node_modules/react-bootstrap/dist/react-bootstrap.js"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './Home';
import Contact from './Contact';
import ProductsDetail from './component/ProductsDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Router>
    <Routes>
    <Route exact path = "/" Component={App} />
    <Route exact path = "/About" Component={About} />
    <Route exact path = "/Home" Component={Home}/>
    <Route exact path = "/Contact" Component={Contact}/>
    <Route exact path = "/products/:productId" Component = {ProductsDetail} />
    </Routes>
</Router>  
);


