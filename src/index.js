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
import AuthForm from './component/Auth/AuthForm';
import ContextProvider from './component/store/ContextProvider';
import NewIndex from './NewIndex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    <ContextProvider >
 <NewIndex /> 
 </ContextProvider>
 </Router>
);


