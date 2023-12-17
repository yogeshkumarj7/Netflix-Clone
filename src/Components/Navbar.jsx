const Navbar=()=>{
return(
    <div className="flex items-center justify-between p-4 absolute w-full   ">
        <div><h1 className="font-bold text-4xl cursor-pointer text-red-600 ">Netflix</h1></div>
        <div>
            <button className="text-white py-2 px-6 font-bold text-xl">Sign In</button>
            <button className=" bg-red-600 text-white py-2 px-6 font-bold text-xl rounded cursor-pointer">Sign Up</button>
        </div>

    </div>
)
}
export default Navbar;
      