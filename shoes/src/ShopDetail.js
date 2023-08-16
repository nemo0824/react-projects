import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from 'axios';

function ShopDetail(props){
    let {itemNo} = useParams();
    let [tab, setTab] = useState(0)
    const[selectedItem, setSelectedItem] = useState(); 
    let [itemSize, setitemSize] = useState();
    let [userCount, setuserCount] = useState(0);
    let [dataCount, setdataCount] = useState();

    useEffect(()=>{
        axios.get(`/shop/${itemNo}`).then(response =>{
            setSelectedItem(response.data.item);
            setitemSize(response.data.size);
            console.log(response.data)
            console.log(itemSize[0].stock)
          })
          .catch(error => console.log(error));
    }, [])
    return(
        <div className="container">
                <br></br>
                <div className='alert alert-warning'>인기상품</div>
            <div className="row">
                <div className="col-md-6">
                
                <img src={selectedItem?.imgLocation}width="100%" height="80%"/>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{selectedItem?.name}</h4>
                    <p>{selectedItem?.itemCode}</p>
                    <p>{selectedItem?.price}원</p>
                    <select style={{width:"100%" , height:"5%"}}>
                        {itemSize && itemSize.map((a, i)=>(
                            <option><span className="size">사이즈 {itemSize[i].size}</span>  <span className="stock">재고  {itemSize[i].stock}</span></option>
                        ))}

                    </select>
                    {/*해야할것  수량 비교해서  맞게하고 
                               클릭시 뭐나오고 
                               하드코딩해서 레이아웃 짜기 */}
                   
                    
                        {/* 그러면 이제 stock를 뺴서 --> itemsize[i].stock랑 userCount 랑 비교 */}
                        
                    
                    <div>{userCount}<button
                    onClick={()=>{
                        setuserCount(userCount+1)
                    }}>+</button><button onClick={()=>{
                        setuserCount(userCount-1) 
                        if(userCount<0){
                            alert('1개 이상 선택해주세요')
                            setuserCount(0)
                        }
                    }}>-</button></div>
                    
                    


                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={()=>{
                        setTab(0)
                    }}>상세상품</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={()=>{
                        setTab(1)
                    }}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2"onClick={()=>{
                        setTab(2)
                    }}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <tabComponent tab = {tab}></tabComponent>
            
        </div> 
    )
}


//if문은 html 밖에서 해야함 
//가져다 넣을려면 컴포넌트로 사용할수있음 
//
function tabComponent(props){
        
        

      
        if(props.tab == 0){
          return  <div>내용</div>
        }else if(props.tab == 1){
          return  <div>내용1</div>
        }else if(props.tab == 2){
          return <div>내용2</div>
        }
        
}

    

export default ShopDetail;