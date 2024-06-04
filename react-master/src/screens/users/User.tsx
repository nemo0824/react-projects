import { useParams } from "react-router-dom";
import { users } from "../../db";
function User(){
    //User 디테일 페이지 
    const {userId} = useParams()
    return <div>
        <h1>{userId} {users[Number(userId)-1].name}</h1>
    </div>
}

export default User;