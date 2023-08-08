import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from 'axios';

function ShopDetail(props){
    let {itemNo} = useParams();
    let [tab, setTab] = useState(0)
    const[selectedItem, setSelectedItem] = useState(); 
    useEffect(()=>{
        axios.get(`/shop/${itemNo}`).then(response =>{
            setSelectedItem(response.data);
            console.log(response.data)
            console.log(selectedItem)

          })
          .catch(error => console.log(error));
    }, [])
    return(
        <div className="container">
                <br></br>
                <div className='alert alert-warning'>인기상품</div>
            <div className="row">
                <div className="col-md-6">
                
                <img src={selectedItem?.imgLocation}width="100%" height="60%"/>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{selectedItem?.name}</h4>
                    <p>{selectedItem?.itemCode}</p>
                    <p>{selectedItem?.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={()=>{
                        setTab(0)
                    }}>버튼0</Nav.Link>
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