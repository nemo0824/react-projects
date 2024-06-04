import { users } from "../db";
import { Link } from "react-router-dom";
function Home(){
    return <div>
        <h1>Home</h1>
        <h2>users</h2>
        <ul>
           {users.map(user => 
           <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
           </li>

           )}
        
        </ul>
    </div>

    
}


export default Home;