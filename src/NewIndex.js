import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import ProductsDetail from './component/ProductsDetail';
import AuthForm from './component/Auth/AuthForm';
import CreateContext from './component/store/CreateContext';
const NewIndex = () => {
    const context = useContext(CreateContext);
    console.log(context)
  return (
   
    <Routes> { localStorage.getItem('ecommToken') &&  <Route exact path = "/" Component={App} /> } 
    { localStorage.getItem('ecommToken') &&<Route exact path = "/About" Component={About} /> } 
      { localStorage.getItem('ecommToken') && <Route exact path = "/Home" Component={Home}/>} 
       { localStorage.getItem('ecommToken') && <Route exact path = "/Contact" Component={Contact}/>} 
        { localStorage.getItem('ecommToken') && <Route exact path = "/products/:productId" Component = {ProductsDetail} />}
    <Route exact path = "/auth" Component={AuthForm}/>
    <Route  path = "*" Component={AuthForm}/>
    </Routes>
 
  )
}

export default NewIndex
