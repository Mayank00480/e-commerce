import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CreateContext from "../store/CreateContext";
const CardItems = (props) => {
  const cntxt = useContext(CreateContext);
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {props.productsArr.map((items) => {
        return (
          <Card className="col-4" style={{ margin: "10px 20px" }}>
            <Card.Img variant="top" src={items.imageUrl} />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <Link
                  to={"/products/" + items.id}
                  style={{ textDecoration: "none" }}
                >
                  {items.title}
                </Link>
              </Card.Title>
              <h2 style={{ float: "left" }}> {items.price}</h2>
              <Button
                variant="primary"
                onClick={() => {
                  let myObje = {
                    title: items.title,
                    price: items.price,
                    imageUrl: items.imageUrl,
                    quantity: 1,
                  };
                 console.log(cntxt.items.indexOf(myObje) == -1)
                
                if(cntxt.items.indexOf(myObje) == -1){  
                  let updatedStr = localStorage.getItem("EcommEmail");
                  console.log(updatedStr);
                  localStorage.getItem("EcommEmail") &&
                    fetch(
                      `https://crudcrud.com/api/4663ea2f60274a2c9d56d10bc45db1f1/${updatedStr}`,
                      {
                        method: "POST",
                        body: JSON.stringify(myObje),
                        headers: {
                          'Content-Type' : 'application/json',
                        } 
                      }
                    )
                      .then((res) =>
                        res.json().then((response) => console.log(response))
                      )
                      .catch((err) => console.log(err));
                      
                      cntxt.addItem({
                        myObje
                      });
                    }
                 else{
                  alert('Item Already added')
                 }
                }}
                style={{ float: "right" }}
              >
                Add To Cart
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default CardItems;
