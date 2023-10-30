import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CreateContext from './store/CreateContext';
import { Link,NavLink } from 'react-router-dom';
export default function NavbarComponent(props) {
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
      <Nav.Link> <NavLink to="/Home" style = {{textDecoration : 'none',color:'white'}}>Home</NavLink></Nav.Link>
       <Nav.Link> <NavLink to="/About" style = {{textDecoration : 'none',color:'white'}}>About</NavLink></Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav> 
      <button onClick = {showCartItemsHandler}>Cart {qty}</button>
    </Container>
  </Navbar>
  )
}
