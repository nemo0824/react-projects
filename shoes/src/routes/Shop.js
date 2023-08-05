import axios from 'axios';
import { useState, useEffect } from 'react';
import ShopCard from '../ShopCard';
import ShopBrand from '../ShopBrand';

function Shop() {
  const [items, setItems] = useState([]);
  const [brand , setBrand] = useState([]);
  

  useEffect(() => {
    axios.get('/item') 
      .then(response => {
        setItems(response.data.item);
        setBrand(response.data.brand);
        console.log(response.data)
      })
      .catch(error => console.log(error));
  }, []);

   
  return (
    <>
        
      <div className='shop_bg'></div>
      <div className="content">
        <div className='left_content'>
            
          
        {
            brand.map((brand,i)=>(
                <ShopBrand brand={brand} key={i} onClick={()=>{}}></ShopBrand>
                //button onClick 하고 눌렀을때 --> 해당 브랜드 상품만나와야한다 
                // 1. axios로  item에서 특정브랜드 가져오는  brand = brand
                // 
            ))
        }
          
                

           
            
            
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