import userCart from '../store.js'
import { useDispatch, useSelector } from "react-redux"
import { Table } from "react-bootstrap"
import Post from '../Address.js'
import { useState } from 'react'


function Pay(){
    let state = useSelector((state)=>{return state})
    console.log(state.userCart)
    let dispatch = useDispatch()
    
    
    return(
       
        <>
        <h3>결제페이지 </h3>
        <div>
        <Table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이미지</th>
                        <th>상품명</th>
                        <th>사이즈</th>
                        <th>수량</th>
                        <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.userCart.map((a, i)=>{
                            return(
                                <>
                                <tr key={i}>
                                    <td>{[i+1]}</td>
                                    <td><img src={state.userCart[i].imgLocation} width="100px" height="10%"></img></td>
                                    <td>{state.userCart[i].name}</td>
                                    <td>{state.userCart[i].size}</td>
                                    <td>{state.userCart[i].count} </td>
                                    <td>{state.userCart[i].price }</td>
                                    
                                    
                                </tr>
                                </>
                            )
                            
                        })
                    }
                    <div>결제 금액  : </div>
                    <div></div>
                </tbody>
            </Table> 
        <div>{console.log(state.userCart)}</div>
       
        
        </div>
        </>
    )
}

export default Pay;