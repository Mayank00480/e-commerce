import React,{useState} from 'react'
import CreateContext from './CreateContext'
const ContextProvider = (props) => {
 const [cartElements , setCartElements] = useState([]);
    const reduceQuantityHandler = (itemName) =>{
        setCartElements(cartElements.map((val,index) =>{
            if(val.title === itemName && Number(val.quantity) > 0){
                val.quantity = Number(val.quantity) - 1;
                return val;
            }
           
            else return val;
        })) 

             cartElements.forEach((val,idx) =>{
                if(val.quantity == 0){
                    cartElements.splice(idx,1);
                }
              })
        console.log(cartElements);
    }
    const addItemHandler = (item) =>{
       let flag = false;
        cartElements.map((value) =>{
           if(value.title == item.title && value.quantity > 0){
            flag = true
           }
       })
       if(flag) {
        alert('Element already added');
       }
       if(!flag){
        setCartElements((prevState) =>{
            return [...prevState , item];
        } )
       }
    }
    
    const context = {
        items : cartElements,
        reduceQuantity : reduceQuantityHandler,
        addItem : addItemHandler
    }
  return (
    <CreateContext.Provider value = {context}>
      {props.children}
    </CreateContext.Provider>
  )
}

export default ContextProvider
