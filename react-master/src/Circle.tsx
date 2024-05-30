import styled from "styled-components";

interface ContainerProps{
    bgColor:string;
}

const Container = styled.div<ContainerProps>`
width : 200px;
height : 200px;
background-color : ${(props) => props.bgColor};
border-radius: 100px;
`;

interface CircleProps{
    bgColor:string;
}

function Circle({bgColor}:CircleProps){
    return(
        <div>
            <Container bgColor={bgColor}></Container>
        </div>
    )

}

export default Circle;

interface PlayerShape{
    name:string;
    age:number;
}

const sayHi = (playerobj:PlayerShape)=> `Hello ${playerobj.name}입니다, ${playerobj.age}나이입니다`


sayHi({name:"임재원", age:123})
