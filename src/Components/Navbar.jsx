import { Link } from "react-router-dom";
import {UserAuth} from '../context/authContext';
const Navbar=()=>{
    const{user,logOut}=UserAuth();
    console.log(user);
return(
    <div className="flex items-center justify-between p-4 absolute w-full z-[100]   ">
       
       <Link to='/'><h1 className="font-bold text-4xl cursor-pointer text-red-600 ">Netflix</h1></Link> 
       <div>
            <Link to='/login'>
                <button className="text-white py-2 px-6 font-bold text-xl">Sign In</button>
            </Link>
            <Link to='/signup'>
                <button className=" bg-red-600 text-white py-2 px-6 font-bold text-xl rounded cursor-pointer">Sign Up</button>
            </Link>
        </div> 
    </div>
)
}
export default Navbar;  
      