import React from 'react'
import './HomeContent.css'
const HomeContent = () => {
    const metaData = [{
        date : 'JUL16',
        itemName : 'DETROIT, MI',
        itemDesc : 'DTE ENERGY MUSIC THEATRE',
        itemBtn : 'Buy Tickets'
    },{
        date : 'JUL16',
        itemName : 'DETROIT, MI',
        itemDesc : 'DTE ENERGY MUSIC THEATRE',
        itemBtn : 'Buy Tickets'
    },{
        date : 'JUL16',
        itemName : 'DETROIT, MI',
        itemDesc : 'DTE ENERGY MUSIC THEATRE',
        itemBtn : 'Buy Tickets'
    },{
        date : 'JUL16',
        itemName : 'DETROIT, MI',
        itemDesc : 'DTE ENERGY MUSIC THEATRE',
        itemBtn : 'Buy Tickets'
    },{
        date : 'JUL16',
        itemName : 'DETROIT, MI',
        itemDesc : 'DTE ENERGY MUSIC THEATRE',
        itemBtn : 'Buy Tickets'
    }] 
  return (
    <div className = "listItems">
      <h1> Tours </h1>
      {metaData.map((item) =>{
         return <li>{item.date} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.itemName}&nbsp;&nbsp;&nbsp;&nbsp;{item.itemDesc}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button> {item.itemBtn} </button>
        <hr/></li>        
      })}
    </div>
  )
}

export default HomeContent
