import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CardItems = (props) => {
  return (
   <div style = {{display : 'flex', justifyContent : 'space-between'}}>{ props.productsArr.map((items) =>{
  return  (<Card  className='col-4' style = {{margin : '10px 20px'}} >
    <Card.Img variant="top" src={items.imageUrl} />
    <Card.Body>
      <Card.Title style = {{textAlign:'center'}}>{items.title}</Card.Title>
      <h2 style = {{float : 'left'}}> {items.price}</h2>
      <Button variant="primary" style = {{float : 'right'}}>Add To Cart</Button>
    </Card.Body>
  </Card>)
   })}</div>
  )
}

export default CardItems
