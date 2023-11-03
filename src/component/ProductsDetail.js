import React from 'react'
import NavbarComponent from './NavbarComponent'
import Header from './Header'
import { useParams } from 'react-router-dom'
const ProductsDetail = () => {
    const param = useParams();
    const productsArr = [
        {
          id : 'p1',
        title: 'Colors',
        },
        {
          id : 'p2',
        title: 'Black and white Colors',
        },
        {
          id : 'p3',
        title: 'Yellow and Black Colors',
        },
        {
          id : 'p4',
        title: 'Blue Color',
          }]
         const data =  productsArr.find(item => item.id === param.productId)
  return (
    <div>
      <NavbarComponent/>
      <Header/>
      <h2>This is Product with a title {data.title}</h2>
      
    </div>
  )
}

export default ProductsDetail
