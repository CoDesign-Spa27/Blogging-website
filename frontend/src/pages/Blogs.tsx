 
import BlogCard from '../components/BlogCard'
import AppBar from '../components/AppBar'
import { useBlogs } from '../hooks'
 
import { BlogSkeleton } from '../ui/BlogSkeleton';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
  const {loading,blogs}=useBlogs();
  const navigate=useNavigate();
  const checkToken=()=>{
    let token=localStorage.getItem('blogToken');
    if(!token){
      navigate('/signup')
    }
  }
  checkToken();
  
  if(loading){
    return <div>
        <AppBar />
 <div className='flex   justify-center'>
    <div>
    <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
    </div>
   
  </div>
    </div>
   
  }else{
     
  }
  return (
    <div className='  h-screen'>
      <AppBar />
    <div className='flex justify-center my-2'>
        <div className='flex max-w-xl mx-2 flex-col items-center'>
   
   {blogs.map((blog,key) => <BlogCard
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

export default Blogs
