import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { Table } from "react-bootstrap"
import {ImmediateMinus, ImmediatePlus} from "../store"


function Order(){
    let state = useSelector((state)=>{return state})
    let dispatch = useDispatch()
    console.log(state.immediateBuy)
    return(
        <>
            <h2>주문/작성 페이지 </h2>
            
           <Table>
               <thead>
                    <tr>
                        <th>번호</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>가격</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tr>
                    <td>{state.immediateBuy.userNo}</td>
                    <td>{state.immediateBuy.size}</td>
                    <td>{state.immediateBuy.stock}</td>
                    <td>{state.immediateBuy.price}</td>
                    <td>
                    <button onClick={()=>{
                        dispatch(ImmediateMinus())
                    }}>-</button>
                    {state.immediateBuy.stock}
                    <button onClick={()=>{
                        dispatch(ImmediatePlus())
                    }}>+</button>
                    </td>
                </tr>

           </Table>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </>
    )
}


export default Order;