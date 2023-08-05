import axios from 'axios';
import { useState, useEffect } from 'react';
import ShopCard from '../ShopCard';

function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/item') 
      .then(response => {
        setItems(response.data);
        
      })
      .catch(error => console.log(error));
  }, []);


  return (
    <>
        
      <div className='shop_bg'></div>
      <div className="content">
        <div className='left_content'>
          {/* 왼쪽 사이드바 */}
          <div>나이키</div>
          <div>뉴발란스</div>
          <div>아디다스</div>
          <div>컨버스</div>
        </div>
        <div className='right_content'>
          <div className='row'>
          {items.map((a, i) => (
            <ShopCard items={items[i]} i ={i} key={i} />
          ))}
            </div>
        </div>
        
      </div>
    </>
  );
}

export default Shop;