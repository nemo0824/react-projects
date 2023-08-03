import axios from 'axios';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function ShopCard() {
  const [item, setItem] = useState();

  const fetchData = () => {
    axios
      .get('/item')
      .then((response) => {
        console.log(response);
        console.log(response.data[0]);
        let copy = response.data[0]; // []
        setItem(copy);
      })
      .catch(() => {
        console.log('실패함');
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="col-md-4">
      {item && (
        <div>
          {/* <img src={item.imgLocation} width="80%" height="60%" alt="product-img" /> */}
          <h4>{item.itemCode}</h4>
          <p>{item.name}</p>
          <p>{item.price} 원</p>
        </div>
      )}
    </div>
  );
}

export default ShopCard;