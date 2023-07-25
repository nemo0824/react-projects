import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { changeName, increase} from "./store/userSlice"
import { addCount } from "./store"

function Cart(){

   let state = useSelector((state)=>{return state }) //redux store 가져와줌 
   let dispatch = useDispatch() //strore.js로 요청을 보내주는 함수

  
   console.log(state.user)
   console.log(state.stock)
   console.log(state.cart[0].name)
    // 왜 props 쓰냐 reudx안쓰고 
    // Redux는 큰 프로젝트에서사용 
    // 컴포넌트 많을댸 redux사용 라이브러리 설치해야함 




    //redux state 변경하려면
    // 1. state변경해주는 함수만들기
    // 2. export
    // 3.dispatch(state변경함수())
    return(
        <div>
            {state.user.name} {state.user.age}의 장바구니  
            <button onClick={()=>{
                dispatch(increase())
            }}>버튼</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a, i)=> 
                     <tr key={i}>
                        <td>{state.cart[i].id}</td>
                        <td>{state.cart[i].name}</td>
                        <td>{state.cart[i].count}</td>
                        <td>
                            <button onClick={()=>{
                                dispatch(addCount(state.cart[i].id))
                            }}>+</button>
                        </td>

                    </tr>
                        )
                    }
                   
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart