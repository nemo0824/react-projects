import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { Table } from "react-bootstrap"
import {ImmediateMinus, ImmediatePlus} from "../store"
import Post from '../Address.js'
import { CheckoutPage } from '../pages/Checkout.jsx';
import MainFooter from '../MainFooter.js'

function Order(){
    let state = useSelector((state)=>{return state})
    let dispatch = useDispatch()
    console.log(state.immediateBuy)
    let totalPrice = state.immediateBuy.price * state.immediateBuy.stock
    
    const [popup, setPopup] = useState(false);
    const handleComplete = (data) => {
        setPopup(!popup);
    }
    const extrahandleInput = (e) => {
        setEnroll_company({
            ...enroll_company,
            [e.target.name]:e.target.value,
        })
    }
    const handleInput = (e) => {
        setEnroll_company({
            ...enroll_company,
            [e.target.name]:e.target.value,
        })
    }
    const handleCloseModal = () => {
        setPopup(false); // 닫기 버튼을 클릭하면 모달을 닫기 위해 popup 상태를 false로 설정합니다
    };

    const [enroll_company, setEnroll_company] = useState({
        address:'', 
        extra: '',
    });

    let fullAddress = enroll_company.address + enroll_company.extra
    return(
        <>
        <div className='page_container'>
            <h2>주문/작성 페이지 </h2>
            
           <Table 침ㄴ>
               <thead>
                    <tr>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>가격</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tr>
                    <td>{state.immediateBuy.size}</td>
                    <td>{state.immediateBuy.stock}</td>
                    <td>{state.immediateBuy.price * state.immediateBuy.stock} </td>
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
           <div className='totalPrice'>
                    <table className='cart_price_table'>
                         <tr>
                            <td className='order_price'>주문금액</td>
                            <td className='order_price_num'>{totalPrice} 원</td>
                        </tr>
                    </table>
            </div>

            <div id="address_content">
                <h4>주소 입력</h4>
                <div className="address_search" >
                        <table className='paymentTable'>
                            <tr>
                                <td className='payment'>
                                    배송지
                                </td>
                                <td className='payment-number'>
                                    <input className="user_enroll_text" placeholder="주소" type="text" required={true} name="address" onChange={handleInput} value={enroll_company.address} />
                                    <input className="user_enroll_text" placeholder="상세주소" name="extra" onChange={extrahandleInput} value={enroll_company.extra} ></input>
                                    <button onClick={handleComplete} >우편번호 찾기</button>
                                </td>

                            </tr>
                        </table>
             
            
            
             
           
             {popup && <Post company={enroll_company} setcompany={setEnroll_company} handleCloseModal={handleCloseModal}></Post>}
             
             
             </div>
             
        </div>       
        <CheckoutPage totalPrice={totalPrice} fullAddress={fullAddress}></CheckoutPage>
        </div>
        <MainFooter></MainFooter>
        </>
        
    )
}


export default Order;