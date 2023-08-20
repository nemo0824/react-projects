import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { changeAge, changeName } from "../store"
import { plusCount,minusCount } from "../store"


function Cart(){
    
    let state = useSelector((state)=>{return state})
    console.log(state)
    let dispatch = useDispatch()
    


    return(

        <div>
            <h6>{state.user.userId}의 장바구니</h6>
            
            
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>사이즈</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.userCart.map((a, i)=>{
                            return(
                                <tr key={i}>
                                    <td>{state.cart[i].id}</td>
                                    <td>{state.cart[i].title}</td>
                                    <td>사이즈 </td>
                                    <td>{state.cart[i].count}
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