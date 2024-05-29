import styled, {keyframes}  from "styled-components"

const Father = styled.div`
display: flex;
`;
const Box = styled.div`
background-color: ${props => props.bgColor};
width:100px;
height:100px;
`;
const Circle =styled(Box)`
border-radius:50px;
`
const Btn =styled.button`
color: white;
background-color : tomato;
border: 0; 
border-radius: 15px
`


const RotateAnimation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50%{
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100%{
    transform: rotate(0deg);
    border-radius:0px;
  }
`
const Mine  = styled.span`
  font-size: 36px
`

const BoxMove = styled.div`
height: 200px;
width: 200px;
background-color: blue;
animation: ${RotateAnimation} 1s linear infinite;
display: flex;
justify-content: center;
align-items: center;

${Mine}{
  color: white;
  &:hover{
    color: yellow;
    font-size:100px
  }
// hover 사용시 &:hover 
// $는 위의 element를 뜻함 따라서 span으로 알게되는것임
}
`


const Text = styled.span`
color: white`;
// 백틱을 꼭 사용해야함



function App() {
  return <>
  <div style={{display: "flex", marginBottom:50}}> 
    <div style={{backgroundColor: "teal", width:100, height:100}}>  </div>
    <div style={{backgroundColor: "tomato", width:100, height:100}}>  </div>
  </div>
  

  <Father>
      {/* <Box bgColor="teal"/>
      <Box bgColor="tomato"/>
      <Circle bgColor="blue"></Circle>  */}
      {/* <Btn>LogIn</Btn>
      <Btn as="a">LogIn</Btn> */}
      {/* as를 이용해서 애초에 그냥 태그도 바꿀수있음 */}
      <BoxMove>
        <Mine>글자크기</Mine>
      </BoxMove>
      
  </Father>
  {/* styled component는 class명을 만들어줌 , random class 명 */}
  {/* styled components를 이용해서 확장성있는 코드를 만들수있다 예) Box 라는 컴포넌트 만들고 Circle 만들때 추가적으로 확장성있게 가져갈수있다 */}
  </>
}

export default App;
