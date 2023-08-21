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

      const handleRemoveItem = (index) => {
      const updatedCart = userCart.filter((item, i) => i !== index);
        setuserCart(updatedCart);
    }
      const totalPrice = userCart?.reduce((total, item) => total + (item.price * item.count), 0);
        
    //   const handlePlusCount = (i)=>{
    //     const updatedCart = [...userCart];
    //     updatedCart[i].count += 1;
    //     setuserCart(updatedCart)
    //   }
    //   const handleMinusCount = (i)=>{
    //     const updatedCart = [...userCart];
    //     updatedCart[i].count -= 1;
    //     setuserCart(updatedCart)
    //   }  
      
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
                                    <td>{userCart[i].name}</td>
                                    <td>{userCart[i].size}</td>
                                    <td>{userCart[i].count} </td>
                                    <td>{userCart[i].price * userCart[i].count}</td>
                                    <td>
                                        <button onClick={()=>{
                                            setuserCart(userCart[i].count+1)                                          
                                        }}>+</button>
                                         <button onClick={()=>{
                                            setuserCart(userCart[i].count-1)                                      
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
                    <div>결제 금액  :{totalPrice} </div>
                </tbody>
            </Table> 
           
        </div>
    )
}

export default Cart;