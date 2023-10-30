import React,{useState} from 'react'
import CreateContext from './CreateContext'
const ContextProvider = (props) => {
 const [cartElements , setCartElements] = useState([{
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
    }]);
    const reduceQuantityHandler = (itemName) =>{
        setCartElements(cartElements.map((val) =>{
            if(val.title === itemName && Number(val.quantity) > 0){
                val.quantity = Number(val.quantity) - 1;
                return val;
            }
            else return val;
        })) 
               
        
    }
    const context = {
        items : cartElements,
        reduceQuantity : reduceQuantityHandler
    }
  return (
    <CreateContext.Provider value = {context}>
      {props.children}
    </CreateContext.Provider>
  )
}

export default ContextProvider
