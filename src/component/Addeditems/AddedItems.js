import React,{useContext,useState,useEffect} from 'react'
import './AddedItems.css'
import CreateContext from '../store/CreateContext'
const AddedItems = (props) => {
  const cntxt = useContext(CreateContext)
  let [fetchedData , setFetchedData] = useState([]);
  console.log(localStorage.getItem("EcommEmail"));
 useEffect(() =>{
  fetch(`https://crudcrud.com/api/4663ea2f60274a2c9d56d10bc45db1f1/${localStorage.getItem("EcommEmail")}`)
  .then((res) =>  res.json())
  .then(response => setFetchedData(response))
 },[])
 
  
  return (
    <div className = "cart" style = {{width : '600px'}}>
      <button onClick = {props.showCartItems} style = {{float : 'right',marginTop : '10px',marginRight : '30px' }}>X</button>
      <br/>
      <br/>
      <h2 style = {{textAlign : 'center'}}>CART</h2>
      <table>
        <tr >
            <th style = {{width : '300px',paddingLeft : '30px'}}>Item</th>
            <th style = {{width : '100px',paddingLeft : '30px'}}>Price</th>
            <th style = {{width : '200px',paddingLeft : '30px'}}>Quantity</th><hr/>
        </tr>
       { fetchedData.length > 0 && fetchedData.map((elem) =>{
        return (
      elem != undefined && elem.quantity > 0 &&  <tr >
            <td style = {{width : '220px',paddingLeft : '30px',display : 'flex' ,justifyContent : 'space-between'}}><img src = {elem.imageUrl} height = "80px" width = "80px" /> {elem.title}</td>
            <td style = {{width : '100px',paddingLeft : '30px'}}>{elem.price}</td>
            <td style = {{width : '200px',paddingLeft : '30px'}}>{elem.quantity} <button onClick = {() =>{
           
           let dia = fetchedData.filter((data) =>{
            return data._id === elem._id;
          })
         console.log(dia[0]._id)
         fetch(`https://crudcrud.com/api/4663ea2f60274a2c9d56d10bc45db1f1/${localStorage.getItem("EcommEmail")}/${dia[0]._id}`,{
          method : 'DELETE'
          })
          .then((res) => {
            fetch(`https://crudcrud.com/api/4663ea2f60274a2c9d56d10bc45db1f1/${localStorage.getItem("EcommEmail")}`)
            .then((res => res.json()))
            .then((response) => setFetchedData(response));
          })

            }} style = {{marginLeft : '10px',padding : '1px 7px',border : '1px solid black', borderRadius : '5px'}}>-</button></td><hr/>
        </tr>
        )
       })}
       
     
       
      

      </table>
    </div>
  )
}

export default AddedItems
