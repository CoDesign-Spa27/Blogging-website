import { Link } from "react-router-dom"
import BlogCard, { Avatar } from "../components/BlogCard"
import { useState } from "react"
import { useBlogs } from "../hooks";
import AppBar from "../components/AppBar";
import Loader from "../ui/Loader";

 

interface BlogsType{
    content: string;
    title: string;
    id: string;
    author: {
        name: string | null;
    };

}
const Search = () => {
    const {loading,blogs}=useBlogs();
   
    const [searchInput,setSearchInput]=useState('');
    const [filteredResults, setFilteredResults] = useState<BlogsType[]>([]);
    const searchItems = (searchValue:string) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = blogs.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(blogs)
        }
    }
    
    if(loading){
        return <div>
      <AppBar />
      <div>
        <Loader />
      </div>
        </div>
      }else{
         
      }
  return (
    <div>
    <div className="  flex items-center bg-transparent text-black text-lg font-bold justify-between py-4 px-10">
    <div>
      <Link to={"/blogs"}>Medium</Link>
    </div>
 
    <div className="max-w-md mx-auto w-full">
  
    <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
  <div className="relative">
 
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
      </div>
      <input type="search" 
      onChange={(e)=>{searchItems(e.target.value)}}
      className="block w-full p-4 ps-10 text-sm text-gray-900 border bg-slate-100 border-gray-300 rounded-lg   outline-none " placeholder="Search Blog" required />
      <button type="submit" className="text-white  absolute end-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2  ">Search</button>

  </div>

    </div>

    <div className="flex gap-5 items-center ">
     <div> 
      <Link to={'/publish'}>
       <button
        type="button"
        className="text-white text-sm bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg    px-4 py-2 text-center "
      >
        Add Blog +
      </button>
      </Link>
      
      </div>
    <div>
    <Avatar name="Sandeep" />
    </div>
    
    </div>
  </div>
  <div className='flex  justify-center my-2'>
        <div className='flex max-w-xl flex-col items-center'>
   
   {filteredResults.map((blog,key) => <BlogCard
   id={blog.id}
   key={key} 
     authorName={blog.author.name || "Anonymous"}
     publishedDate='Dec 3,2002'
     title={blog.title}
     content={ blog.content}
     />
   )}
    
 
  </div>
    </div>
  </div>
  )
}

export default Search
