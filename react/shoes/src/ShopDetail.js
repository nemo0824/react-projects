import { Navigate, useNavigate, useParams, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from 'axios';
import MainFooter from "./MainFooter";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "./store";
import {setImmediate} from "./store";


function ShopDetail(props) {
    let { itemNo } = useParams();
    let [tab, setTab] = useState(0)
    const [selectedItem, setSelectedItem] = useState();
    let [itemSize, setitemSize] = useState();
    let [userCount, setuserCount] = useState(0);
    let [dataCount, setdataCount] = useState();

    let [selectedOption, setSelectedOption] = useState(null);
    let [detialdiv, setDetialDiv] = useState(false); //상품 골랐을시 밑에 나오는 div 

    let navigate = useNavigate();
    

    let state = useSelector((state)=>{return state})
    console.log(state.userCart)
    let dispatch = useDispatch()

    useEffect(() => {
        axios.get(`/shop/${itemNo}`).then(response => {
            setSelectedItem(response.data.item);
            setitemSize(response.data.size);
            console.log(response.data)

            

        })
            .catch(error => console.log(error));
    }, [])
    return (
        <div>
        <div className="container">
            <br></br>
            <div className='alert alert-warning'>인기상품</div>
            <div className="row">
                <div className="col-md-6">

                    <img src={selectedItem?.imgLocation} width="100%" height="80%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{selectedItem?.name}</h4>
                    <p>{selectedItem?.itemCode}</p>
                    <p>{selectedItem?.price}원</p>
                    <select style={{ width: "100%", height: "5%" }}
                        onChange={(e) => {
                            const selectedIndex = e.target.selectedIndex;
                            if (selectedIndex >= 0) {
                                setdataCount(itemSize[selectedIndex].stock)
                                setDetialDiv(true)

                                let selectedOptiondata = itemSize[selectedIndex];
                                setSelectedOption(selectedOptiondata)
                                 
                            }else{
                                setDetialDiv(false)
                                setSelectedOption(null);
                            }
                        }}
                    >
                        {itemSize && itemSize.map((a, i) => (
                            <option key={i}><span className="size">사이즈 {itemSize[i].size}</span> 
                             <span className="stock">재고  {(itemSize[i].stock)}</span></option>
                        ))}

                    </select>
                    {/*해야할것  수량 비교해서  맞게하고 
                               클릭시 뭐나오고    
                               하드코딩해서 레이아웃 짜기 */}


                    {/* 그러면 이제 stock를 뺴서 --> itemsize[i].stock랑 userCount 랑 비교 */}


                    <div>
                        <button onClick={() => {
                            setuserCount(userCount - 1)
                            if (userCount < 0) {
                                alert('1개 이상 선택해주세요')
                                setuserCount(0)
                            }
                        }}>-</button>     {userCount}    
                         <button onClick={() => {
                            setuserCount(userCount + 1)
                            if (userCount > dataCount) {
                                alert('재고를 초과하였습니다')
                                setuserCount(dataCount)
                            }
                        }}>+</button></div>
                        {detialdiv && selectedOption && (
                        <Detialdiv 
                        userCount = {userCount}
                        selectedOption={selectedOption} 
                        selectedItemPrice={selectedItem?.price}/>)} 



                            {/* 상품번호, userId, 갯수,  */}
                    <div className="detail-btn-box">
                    <button className="btn btn-warning" id="cart-btn" onClick={()=>{
                        if(state.user != null){
                            const userInfo = { loginUser: state.user, ShopItems: selectedOption  }
                         
                            console.log(state.userCart);
                            console.log(state.user)
                            axios.get(`/cart/insert/${itemNo}`,{
                                params: {
                                userNo: state.user.userNo,
                                itemSize : userInfo.ShopItems.size,
                                itemCount : userInfo.ShopItems.stock
                                }
                                } ).then(response => {
                            })
                                .catch(error => console.log(error));
                            
                        }else{
                            alert('로그인 해주세요 ')
                            navigate('/login')
                        }
                        


                    }}>장바구니</button>
                    <button className="btn btn-danger" id="order-btn" onClick={() => {
                        if(state.user != null){
                            // console.log(state.user)
                            const item ={ShopItems : selectedOption}
                            dispatch(setImmediate({
                                userNo: state.user.userNo,
                                size: item.ShopItems.size,
                                stock: item.ShopItems.stock,
                                price: selectedItem?.price}))
                            console.log(state.user.userNo, item.ShopItems.size, item.ShopItems.stock, selectedItem?.price)
                            navigate('/order'); 
                            console.log(state.immediateBuy)
                        }else{
                            alert('로그인 해주세요 ')
                            navigate('/login')
                        }
                        
                    
                    }}>즉시구매</button> 
                    </div>
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={() => {
                        setTab(0)
                    }}>상세상품</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={() => {
                        setTab(1)

                    }}>반품/교환정보</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={() => {
                        setTab(2)
                    }}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabComponent tab={tab} />
           
        </div>
        <MainFooter></MainFooter>
        </div>
    )
}


//if문은 html 밖에서 해야함 
//가져다 넣을려면 컴포넌트로 사용할수있음 


function TabComponent(props) {
    if (props.tab == 0) {

        return <>
            <img src={process.env.PUBLIC_URL + '/nikeDetail0.jpg'} style={{ width: '100%', height: '100%', marginBottom: '45px' }} />
            <img src={process.env.PUBLIC_URL + '/nikeDetail1.jpg'} style={{ width: '100%', height: '100%', marginBottom: '45px' }} />
            <img src={process.env.PUBLIC_URL + '/nikeDetail2.jpg'} style={{ width: '100%', height: '100%', marginBottom: '45px' }} />
            <img src={process.env.PUBLIC_URL + '/nikeDetail3.jpg'} style={{ width: '100%', height: '100%', marginBottom: '45px' }} />
            <h2>새 학기 남성 스타일링</h2>
            <h5>
                <p>부드러운 베이지의 ACG 플리스 크루와 산뜻한 그린 색상의 쇼츠가 돋보이는 새 학기 스타일링.</p>

                <p>클래식한 매력의 나이키 코르테즈로 가을에 어울리는 나만의 스타일을 완성해 보세요.</p>

                <p>개성있는 프린트의 후프 엘리트 백팩을 손에 들거나,

                자연스럽게 한쪽 어깨에 걸쳐 더 편안한 분위기를 연출할 수 있습니다.</p>
            </h5>
            <h2>남성 모델 착장 제품</h2>
            <h5>
                <p>나이키 에이펙스 타이다이 버킷 햇</p>
                <p>나이키 ACG 써마 핏 플리스 크루</p>
                <p>나이키 스포츠웨어 테크 팩 남성 우븐 유틸리티 쇼츠</p>
                <p>나이키 코르테즈</p>
                <p>나이키 후프 엘리트 백팩(32L)</p>
                <p>남자 모델 키, 착용 사이즈 : 185cm, L</p>

                <p>*일부 제품은 스타일링을 위해 연출되어 실물과 다를 수 있고, 판매되지 않을 수 있습니다.</p>

                <p>*스타일링에 포함된 제품 중 일부는 새 학기 컬렉션 할인 혜택에 포함되지 않을 수 있습니다.</p>
            </h5>
                 </>
    }
    if (props.tab == 1) {
        return <>
                <div className="exchange-title">
                <h2>반품/교환정보</h2>
                </div>
                <ExcahngeReturn></ExcahngeReturn>
                   
                </>
    }
    if (props.tab == 2) {
        return <div>2번</div>
    }

}

function Detialdiv(props) {
    const selectedItemPrice = props.selectedItemPrice;

    return (
        <div>
            <p>선택한 사이즈: {props.selectedOption.size}</p>
            <p>보유한 재고: {props.selectedOption.stock}</p>
            <p>상품 가격: {selectedItemPrice} 원</p>
            <p>유저가 선택한 재고: {props.userCount} 개</p>
            <p>총 금액 : {props.userCount * selectedItemPrice}</p>
                        
            {/* 기타 정보를 활용할 수 있도록 추가 */}
        </div>
    );
}

function ExcahngeReturn() {
    return (
        <>
        <table id="returnTable">
            <tr>
            <th>신발 반품 정보 안내</th>
            </tr>
            <tr>
                <td>판매지정사 택배</td>
                <td>우체국 택배</td>
            </tr>
            <tr>
                <td>반품배송비</td>
                <td>편도 5000원 </td>
                <td>교환배송비</td>
                <td>편도 5500원</td>
            </tr>
            <tr>
                <td>보내실곳</td>
                <td>과천시 별양로</td>
            </tr>
            <tr>
                <td rowSpan={2}>반품/교환 사유에 따른 요청 가능기간</td>
                <td>구매자 단순 변심은 상품 수령 후 7일 이내(구매자 반품배송비 부담) </td>
                
            </tr>
            <tr>
                <td>표시/광고와 상이 계약내용과 다르게 이행된 경우 상품 수령후 3개월 이내 혹은 표시/광고와 다른 사실안 날부터 30일이내 </td>
            </tr>
            <tr rowSpan={4}>
                <td rowSpan={4}>반품/교환 불가능 사유</td>
                <td> 1번 ~~</td>
            </tr>
            <tr> 
                <td>2번</td>
                
            </tr>
            <tr> 
                <td>3번</td>
               
            </tr>
            <tr> 
                <td>4번</td>
            </tr>

        </table>
        </>
    );
  }
  

export default ShopDetail;