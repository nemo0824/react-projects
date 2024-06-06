import { Link, useParams } from "react-router-dom";
import { users } from "../../db";
import { Outlet } from "react-router-dom";

function User(){
    //User 디테일 페이지 
    const {userId} = useParams()
    return (
    <div>
        <h1>{userId} {users[Number(userId)-1].name}</h1>
        <hr/>
        <Link to="followers">see followers</Link>
        <Outlet context={{
            nameOfMyUser: users[Number(userId)-1].name
            }}/>
    </div>
    )
}

export default User;