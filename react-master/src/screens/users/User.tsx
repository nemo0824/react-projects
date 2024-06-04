import { useParams } from "react-router-dom"
import { users } from "../../db"

function User(){
    console.log("이거머임", useParams())
    console.log("userId") 
    const [a , b] = [5,7]
    console.log("a",a)
    console.log("b",b)
    const {userId} = useParams(); // 구조 분배 할당
    console.log(userId)
    return <h1>Users with it {userId} is name: {users[Number(userId)-1].name}</h1>
    
}

export default User