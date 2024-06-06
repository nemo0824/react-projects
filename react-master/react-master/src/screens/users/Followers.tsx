import { useOutletContext } from "react-router-dom";

interface IFollowersContext{
    nameOfMyUser:string;
}


function Followers(){
    const ctx = useOutletContext()
    // console.log(ctx)
    const {nameOfMyUser} = useOutletContext<IFollowersContext>();
    
    return <h1>here are {nameOfMyUser}의 Followers</h1>;
}

export default Followers;