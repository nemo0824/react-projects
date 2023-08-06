import React from 'react';

import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import {NavLink} from "react-router-dom";

function ShopCard(props) {
  return (
   
    <div className="col-md-4">
      <div>
        <Link to={`/shop/${props.items.itemNo}`}>
        <img src={props.items.imgLocation} width="80%" height="60%" ></img>
        </Link>
        <h4>{props.items.itemCode}</h4>
        <p>{props.items.name}</p>
        <p>{props.items.price} 원</p>
        
      </div>
    </div>
    
  );
}

export default ShopCard;