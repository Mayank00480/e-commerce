import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CreateContext from './store/CreateContext';
import { Link,NavLink,useNavigate } from 'react-router-dom';
export default function NavbarComponent(props) {
  const navigate = useNavigate();
  const cntxt = useContext(CreateContext)
  let qty = 0 ;
  cntxt.items.forEach((value) =>{
      if(value.quantity > 0){
        qty++;
      }
  })
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
      
        console.log(cntxt.removeToken)
        cntxt.removeToken();
        console.log(cntxt);
        navigate('/auth')        
      }}>Logout</button> }
    </Container>
  </Navbar>
  )
}
