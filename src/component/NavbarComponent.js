import React, { useContext, useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CreateContext from './store/CreateContext';
import { Link,NavLink,useNavigate } from 'react-router-dom';
export default function NavbarComponent(props) {
  const [qty ,setQty] =  useState(0);
  const navigate = useNavigate();
  const cntxt = useContext(CreateContext)
  let updatedStr = localStorage.getItem("EcommEmail");
  
  useEffect(() =>{
    
                  
                 
                  localStorage.getItem("EcommEmail") &&
                    fetch(
                      `https://crudcrud.com/api/4663ea2f60274a2c9d56d10bc45db1f1/${updatedStr}`)
                      .then((res) => res.json())
                      .then((data) => {
                        console.log(data.length)
                        setQty(data.length);
                      })
                      

  } ,[])
 

 /* cntxt.items.forEach((value) =>{
      if(value.quantity > 0){
        qty++;
      }
  })*/
  const showCartItemsHandler = () =>{
    props.showCartItems();
  }
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand ><NavLink to="/" style = {{textDecoration : 'none',color:'white'}}>NavBar</NavLink></Navbar.Brand>
      <Nav className="me-auto">
   {localStorage.getItem("ecommToken") &&   <Nav.Link> <NavLink to="/Home" style = {{textDecoration : 'none',color:'white'}}>Home</NavLink></Nav.Link>}
      {localStorage.getItem("ecommToken") && <Nav.Link> <NavLink to="/About" style = {{textDecoration : 'none',color:'white'}}>About</NavLink></Nav.Link>}
       {localStorage.getItem("ecommToken") &&<Nav.Link> <NavLink to="/auth" style = {{textDecoration : 'none',color:'white'}}>Login</NavLink></Nav.Link>}
    {localStorage.getItem("ecommToken") && <Nav.Link> <NavLink to="/Contact" style = {{textDecoration : 'none',color:'white'}}>Contact</NavLink></Nav.Link>}
      </Nav> 
      {localStorage.getItem("ecommToken") &&<button onClick = {showCartItemsHandler}>Cart {qty}</button>}
     { localStorage.getItem("ecommToken") && <button onClick = {() =>{
      
        
        cntxt.removeToken();
       
        navigate('/auth')        
      }}>Logout</button> }
    </Container>
  </Navbar>
  )
}
