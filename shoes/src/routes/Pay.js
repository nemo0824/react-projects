import userCart from '../store.js'
import { useDispatch, useSelector } from "react-redux"
import { Table } from "react-bootstrap"
import Post from '../Address.js'
import { useState } from 'react'
import { CheckoutPage } from '../pages/Checkout.jsx';
import MainFooter from '../MainFooter.js'
function Pay(){
    let state = useSelector((state)=>{return state})
    console.log(state.userCart)
    let dispatch = useDispatch()
        const totalPrice = state.userCart.reduce((total, item) => {
        return total + item.price * item.count;
    }, 0);




    const [enroll_company, setEnroll_company] = useState({
        address:'', 
        extra: '',
    });
    
    const [popup, setPopup] = useState(false);
    
    const handleInput = (e) => {
        setEnroll_company({
            ...enroll_company,
            [e.target.name]:e.target.value,
        })
    }

    const extrahandleInput = (e) => {
        setEnroll_company({
            ...enroll_company,
            [e.target.name]:e.target.value,
        })
    }
    
    
    
    
    const handleComplete = (data) => {
        setPopup(!popup);
    }

     const handleCloseModal = () => {
        setPopup(false); // 닫기 버튼을 클릭하면 모달을 닫기 위해 popup 상태를 false로 설정합니다
    };
    let fullAddress = enroll_company.address + enroll_company.extra



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
                                    <td>{state.userCart[i].price * state.userCart[i].count }</td>
                                    
                                    
                                </tr>
                                </>
                            )
                            
                        })
                    }
                    
                    
                </tbody>
                
            </Table> 
            <div className='totalPrice'>결제 금액  : {totalPrice}</div>
        <div>{console.log(state.userCart)}</div>
       <div id="address_content">
        <div className="address_search" >
            <h4>주소 입력</h4>
             <input className="user_enroll_text" placeholder="주소"  type="text" required={true} name="address" onChange={handleInput} value={enroll_company.address}/>
             <input className= "extra_address" placeholder="상세주소" name="extra" onChange={extrahandleInput} value={enroll_company.extra} ></input>
             <button onClick={handleComplete}>우편번호 찾기</button>
             {popup && <Post company={enroll_company} setcompany={setEnroll_company} handleCloseModal={handleCloseModal}></Post>}
             <button onClick={()=>{
                console.log(enroll_company)
                console.log(fullAddress)
             }}>데이터 확인</button>
             </div>
        </div>
        <CheckoutPage totalPrice={totalPrice} fullAddress={fullAddress}></CheckoutPage>
        </div>
        <MainFooter></MainFooter>
        </>
    )
}

export default Pay;