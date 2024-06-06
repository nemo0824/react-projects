import Table from 'react-bootstrap/Table';

function Certificate() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>취득일/수상일</th>
          <th>자격증 이름</th>
          <th>발행처</th>
          <th>합격여부</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2017.02</td>
          <td>2종보통 운전면허</td>
          <td>경찰청(운전면허시험관리단)</td>
          <td>최종합격</td>
        </tr>
        <tr>
          <td>2021.06</td>
          <td>정보처리 산업기사</td>
          <td>한국산업인력공단</td>
          <td>최종합격</td>
        </tr>
        <tr>
          <td>2022.03</td>
          <td>한국사능력검정시험 1급</td>
          <td>국사편찬위원회</td>
          <td>최종합격</td>
        </tr>
        <tr>
          <td>2023.06</td>
          <td>정보처리 기사</td>
          <td>한국산업인력공단</td>
          <td>필기합격</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Certificate;