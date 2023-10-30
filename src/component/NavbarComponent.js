import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CreateContext from './store/CreateContext';
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
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav> 
      <button onClick = {showCartItemsHandler}>Cart {qty}</button>
    </Container>
  </Navbar>
  )
}
