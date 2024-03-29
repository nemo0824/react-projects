import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./../store";
import { changeCount } from "./../store";
function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  //   console.log(product);
  //   console.log(state.product);

  //   console.log(state);
  return (
    <div>
      {state.user}의 장바구니
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
          {state.product.map((a, i) => (
            <tr>
              <td>1</td>
              <td>{state.product[i].id}</td>
              <td>{state.product[i].name}</td>
              <td>{state.product[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(changeCount(i));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
