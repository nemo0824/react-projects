import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function Test() {
  const [item, setItem] = useState();

  const fetchData = () => {
    axios
      .get('/api/test')
      .then((response) => {
        console.log(response);
        console.log(response.data[0]);
        let copy = response.data[0]; // [] 
        setItem(copy);
      })
      .catch(() => {
        console.log('실패함');
      });
  };

  useEffect(() => {
    console.log(item); // 이렇게 하면 상태 업데이트 이후의 값을 로그로 확인할 수 있습니다.
  }, [item]);

  return (
    <>
      <button onClick={fetchData}>데이터 가져와</button>

      {item && (
        <>
           
                <br></br>
                <div className='alert alert-warning'>인기상품</div>
            <div className="row">
                <div className="col-md-6">
                
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{item.name}</h4>
                    <p>{item.itemCode}</p>
                    <p>{item.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>

        </>
      )}
    </>
  );
}

export default Test;