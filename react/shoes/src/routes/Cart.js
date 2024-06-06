
import { useDispatch, useSelector } from "react-redux"
import { changeAge, changeName } from "../store"
import { plusCount,minusCount, setCartItems, setTotalPrice } from "../store"
import axios from 'axios';
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import MainFooter from "../MainFooter";
import { Table } from "react-bootstrap"
import userCart from "../store"
 

function Cart(){
    
    let state = useSelector((state)=>{return state})
    console.log(state.user.userNo)
    let dispatch = useDispatch()
    let userNo = state.user.userNo
    let itemSize = state.user.itemSize
    let [userCart, setuserCart] = useState([]);
    let navigate = useNavigate();
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

      const handleRemoveItem = (index) => {
        const updatedCart = userCart.filter((item, i) => i !== index);
        setuserCart(updatedCart);
        dispatch(setCartItems(updatedCart)); // 업데이트된 카트 항목을 Redux 스토어에 반영
    }
      const totalPrice = userCart?.reduce((total, item) => total + (item.price * item.count), 0);
   


    return(
        <>
        
        <div className="page_container">
            <h3>{state.user.userId}의 장바구니</h3>
            
            
            <table className="cart_table">
                <thead>
                    <tr>
                        <th style={{ width: '100px' }}>번호</th>
                        <th>이미지</th>
                        <th>상품명</th>
                        <th>사이즈</th>
                        <th>수량</th>
                        <th>가격</th>
                        <th>변경하기</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userCart&&userCart.map((a, i)=>{
                            return(
                                <>
                                <tr key={i}>
                                    <td>{[i+1]}</td>
                                    <td><img src={userCart[i].imgLocation} width="100px" height="10%"></img></td>
                                    <td>{userCart[i].name}</td>
                                    <td>{userCart[i].size}</td>
                                    <td>{userCart[i].count} </td>
                                    <td>{userCart[i].price * userCart[i].count}</td>
                                    <td>
                                        <button onClick={()=>{
                                            const updatedCart = [...userCart];
                                            updatedCart[i] = {
                                                ...updatedCart[i],
                                                count: (parseInt(updatedCart[i].count) + 1).toString(), 
                                               
                                            };
                                            setuserCart(updatedCart);
                                            console.log(userCart)
                                           
                                        }}>+</button>
                                         <button onClick={()=>{
                                            const updatedCart = [...userCart];
                                            updatedCart[i] = {
                                                ...updatedCart[i],
                                                count: (parseInt(updatedCart[i].count) - 1).toString(), 
                                               
                                            };
                                            setuserCart(updatedCart); 
                                                                       
                                        }}>-</button>
                                    </td>
                                    <td><button onClick={()=>{
                                        handleRemoveItem(i);
                                    }}>x</button></td>
                                    
                                </tr>
                                </>
                            )
                            
                        })
                    }
                    

                </tbody>
            </table> 

            <div className='totalPrice'>
                        <table className='cart_price_table'>
                             <tr>
                                 <td className='order_price'>주문금액</td>
                                 <td className='order_price_num'>{totalPrice} 원</td>
                                 
                        
                             </tr>
                        </table>
                     </div>
            
           {/* 유저번호, 상품번호, 사이즈 ,  */}
           <button onClick={()=>{
            navigate('/pay')
           }}>결제하기</button>
           </div>
           <MainFooter></MainFooter>
        
        </>
    )
}

export default Cart;