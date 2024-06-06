import { useState } from "react";
import { text } from "stream/consumers";
import styled from "styled-components";

interface ContainerProps{
    bgColor:string;
    borderColor:string;
    
}

const Container = styled.div<ContainerProps>`
width : 200px;
height : 200px;
background-color : ${(props) => props.bgColor};
border-radius: 100px;
border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps{
    bgColor:string;
    borderColor?:string;
    text?:string;
}

function Circle({bgColor, borderColor, text="default value"}:CircleProps){
    const [counter, setCounter] = useState(1)
    // type을 default 값으로 추측해서 type 을 선언해줌 
    const [value, setValue] = useState<string|number>(0)
    // 타입을 union 타입으로 선언할때는 useState-> unionType () 이런식으로 선언 
    return(
        <div>
            <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>{text}</Container>
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
