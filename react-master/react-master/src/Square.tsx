import styled from "styled-components"
interface ContainerProps{
    bgColor:string;
}


const Container = styled.div<ContainerProps>`
width: 200px;
height: 200px;
background-color:${(props)=> props.bgColor} 

`
interface SquareType{
    bgColor:string;
}




function Square({bgColor}:SquareType){
    return <>
        <Container bgColor={bgColor}></Container>
    
    </>

}

export default Square;