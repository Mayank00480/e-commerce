import React,{useState} from 'react'
import './UserForm.css'
const UserForm = () => {
const [name , setName] = useState("");
const [email,setEmail] = useState("");
const [phone , setPhone] = useState("");

async function submitHandler(e) {
e.preventDefault();
const myObj = {
  name : name,
  email : email,
  phone : phone
}
 await fetch('https://e-commerce-f0afd-default-rtdb.firebaseio.com/contact.json',{
  method : 'POST',
  body : JSON.stringify(myObj)
})
//const responseData = await response.json()
setName("");
setEmail("");
setPhone("");
console.log(myObj);
}
  return (
    <div className = "userForm">
    <form onSubmit={submitHandler}>
      <label> Name </label>
      <br/>
      <input  value = {name} type = "text" onChange={(e) =>{
        setName(e.target.value);
      }} required/>
      <br/>
      <label>Email</label>
      <br/>
      <input value = {email} type = "email"   onChange={(e) =>{
        setEmail(e.target.value);
      }} required/>
      <br/>
      <label>Phone Number</label>
      <br/>
      <input type = "number" value = {phone} onChange={(e) =>{
        setPhone(e.target.value);
      }} required/>
      <br/>
      <button style = {{margin : '10px 0px'}}type = "submit" >Add New Movies</button>
    </form>
    </div>
  )
}

export default UserForm
