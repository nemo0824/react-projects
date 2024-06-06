import { Link, useNavigate } from "react-router-dom";
function Header(){
    const navigate = useNavigate();
    const onAboutClick= () =>{
        navigate("about")
    }

    return (
    <header>
        <ul>
        <li><Link to={"/"}>Home</Link></li>
        <button onClick={onAboutClick}><Link to={"/about"}>About</Link></button>
        </ul>
    </header>
    )
   
}

export default Header;