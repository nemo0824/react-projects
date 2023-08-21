import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { changeAge, changeName } from "../store"
import { plusCount,minusCount } from "../store"
import axios from 'axios';
import { useEffect, useState } from "react";


function Cart(){
    
    let state = useSelector((state)=>{return state})
    console.log(state.user.userNo)
    let dispatch = useDispatch()
    let userNo = state.user.userNo
    let [userCart, setuserCart] = useState();

    useEffect(() => {
        axios.get('/cart/items',{
            params: {
                userNo: userNo, 
              },
        }) 
          .then(response => {
            console.log(response.data)
            setuserCart(response.data)
          })
          .catch(error => console.log(error));
      }, []);


    return(

        <div>
            <h6>{state.user.userId}의 장바구니</h6>
            
            
            <Table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>상품명</th>
                        <th>사이즈</th>
                        <th>수량</th>
                        <th>가격</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userCart&&userCart.map((a, i)=>{
                            return(
                                <tr key={i}>
                                    <td>{[i+1]}</td>
                                    <td>{userCart[i].name}</td>
                                    <td>{userCart[i].size}</td>
                                    <td>{userCart[i].count} </td>
                                    <td>{userCart[i].price}
                                     </td>
                                    <td>
                                        <button onClick={()=>{
                                            dispatch(plusCount(state.cart[i].id))                                          
                                        }}>+</button>
                                         <button onClick={()=>{
                                            dispatch(minusCount(state.cart[i].id))                                     
                                        }}>-</button>
                                        </td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart;