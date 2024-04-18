import BlogPost from "../components/BlogPost";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { BlogSkeleton } from "../ui/BlogSkeleton";
import AppBar from "../components/AppBar";
 
const Blog = () => {
  const {id}=useParams()
  const {loading,blog}=useBlog({
    id:id || ""
  });
  
  

  if(loading){
    return <div> 
    <AppBar />
<div className='flex   justify-center'>
<div>
<BlogSkeleton />
  
</div>

</div>
 </div>
  }
  return (
    <div>
    <BlogPost blog={blog} />
    </div>
  )
}

export default Blog
