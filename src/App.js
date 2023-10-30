import CardItems from "./component/CardItems/CardItems";
import Header from "./component/Header";
import NavbarComponent from "./component/NavbarComponent";
import React,{useState} from "react";
import './App.css'
import AddedItems from "./component/Addeditems/AddedItems";
import ContextProvider from "./component/store/ContextProvider";
const productsArr = [
  {
  title: 'Colors',
  price: 100,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
  title: 'Black and white Colors',
  price: 50,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
  title: 'Yellow and Black Colors',
  price: 70,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
  title: 'Blue Color',
  price: 100,
 imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }]

    const cartElements = [
      {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
      },
      {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
      },
      {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
      }
      ]
      
      
function App() {
  const [showCart , setShowCart] = useState(false);
  const showCartItems = () =>{
      setShowCart((prevState) => !prevState )    
  }
  return (
    <ContextProvider >
<NavbarComponent showCartItems = {showCartItems}/>
<Header/>
<div className="cartItems">
<CardItems productsArr = {productsArr}/>
{showCart && <AddedItems cartElements = {cartElements} showCartItems = {showCartItems}/>}
</div>
    </ContextProvider>
  );
}

export default App;
