import CardItems from "./component/CardItems/CardItems";
import Header from "./component/Header";
import NavbarComponent from "./component/NavbarComponent";
import React,{useState} from "react";
import './App.css'
import AddedItems from "./component/Addeditems/AddedItems";
import ContextProvider from "./component/store/ContextProvider";
import NewIndex from "./NewIndex";
const productsArr = [
  {
    id : 'p1',
  title: 'Colors',
  price: 100,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id : 'p2',
  title: 'Black and white Colors',
  price: 50,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id : 'p3',
  title: 'Yellow and Black Colors',
  price: 70,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id : 'p4',
  title: 'Blue Color',
  price: 100,
 imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }]

   
      
      
function App() {
  const [showCart , setShowCart] = useState(false);
  console.log('apppjs')
  const showCartItems = () =>{
      setShowCart((prevState) => !prevState )    
  }
  return (
    <ContextProvider >
     
<NavbarComponent showCartItems = {showCartItems}/>
<Header/>
<div className="cartItems">
<CardItems productsArr = {productsArr}/>
{showCart && <AddedItems showCartItems = {showCartItems}/>}
</div>
    </ContextProvider>
  );
}

export default App;
