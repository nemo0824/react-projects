import React from 'react';

function ShopCard(props) {
  return (
   
    <div className="col-md-4">
      <div>
        <img src={props.items.imgLocation}width="80%" height="60%" ></img>
        <h4>{props.items.itemCode}</h4>
        <p>{props.items.name}</p>
        <p>{props.items.price} 원</p>
        
      </div>
    </div>
    
  );
}

export default ShopCard;