import axios from 'axios';
import { useState, useEffect } from 'react';
import ShopCard from '../ShopCard';
import ShopBrand from '../ShopBrand';
import ShopDetail from '../ShopDetail'
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'


function Shop(props) {
  const [items, setItems] = useState([]);
  const [brand , setBrand] = useState([]);
  
  

  useEffect(() => {
    axios.get('/item') 
      .then(response => {
        setItems(response.data.item);
        setBrand(response.data.brand);
        
      })
      .catch(error => console.log(error));
  }, []);

  //  console.log(items)
  
  return (
    <>
        
      <div className='shop_bg'></div>
      <div className="content">

        
          <div className='left_content'>
            <div className='sidebar'>
          
          {
              brand.map((brand,i)=>(
                  <ShopBrand brand={brand} key={i} i={i} setItems={setItems} ></ShopBrand>
                
              ))
          }
          
          
            </div>
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