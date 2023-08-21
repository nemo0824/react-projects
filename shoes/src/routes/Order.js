import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';

function Order(){
    let state = useSelector((state)=>{return state})
    let dispatch = useDispatch()
    console.log(state.immediateBuy)
    return(
        <>
            <div>주문페이지</div>
        </>
    )
}

export default Order;