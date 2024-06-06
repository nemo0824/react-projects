import React from 'react';
import axios from 'axios';

function ShopBrand(props){
    return(
        <>
         <ul>
            <li>
            <p onClick={()=>{
                    axios.get('/item',{params: {brand : props.brand}}).then(response =>{
                      props.setItems(response.data.item);
                      console.log(response.data.item)
                    })
                    .catch(error => console.log(error));
                  }}>{props.brand}</p>
            </li>
         </ul>
        </>
    )

}


export default ShopBrand;