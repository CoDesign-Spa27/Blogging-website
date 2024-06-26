import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./BlogCard";
 
const AppBar = () => {
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.removeItem("blogToken");
    navigate('/signin')
  }
  return (
    <div  className="flex justify-center gap-2 items-center md:block flex-col">
       <div className="flex items-center bg-transparent gap-10 text-black text-lg font-bold justify-between py-4 px-10">
      <div className="text-xl font-extrabold">
        <Link to={"/blogs"}>
        InkSpire hub
</Link>
      </div>
  
      <div className="max-w-md hidden md:block mx-auto w-full">
      <Link to={"/search"}>
      <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
 
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" 
        
        className="block w-full p-4 ps-10 text-sm text-gray-900 border bg-slate-100 border-gray-300 rounded-lg   outline-none " placeholder="Search Blog" required />
        <button type="submit" className="text-white  absolute end-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2  ">Search</button>
        
    </div>
    </Link>

      </div>
      <div className="md:block hidden">

      <div className="flex gap-5 items-center ">
       <div> 
       <button
       onClick={logout}
          type="button"
          className="text-white text-sm bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg  mx-2  px-4 py-2 text-center "
        >
         Logout
        </button>
        <Link to={'/publish'}>
         <button
          type="button"
          className="text-white text-sm bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg  mx-2  px-4 py-2 text-center "
        >
          Add Blog +
        </button>
        </Link>
        
        </div>
    
      </div>
      
      </div>
      <div>
      <Avatar name="Sandeep" />
      </div>
      
    </div>
    <div className="md:hidden pb-3 block">

      <div className="flex gap-5 items-center ">
       <div> 
       <button
       onClick={logout}
          type="button"
          className="text-white text-sm bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg  mx-2  px-4 py-2 text-center "
        >
         Logout
        </button>
        <Link to={'/publish'}>
         <button
          type="button"
          className="text-white text-sm bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg  mx-2  px-4 py-2 text-center "
        >
          Add Blog +
        </button>
        </Link>
        
        </div>
    
      </div>
      
      </div>
    </div>
   
  );
};

export default AppBar;
