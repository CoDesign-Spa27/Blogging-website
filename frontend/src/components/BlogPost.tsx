import { BlogType } from '../hooks'
import AppBar from './AppBar'
import { Avatar } from './BlogCard'

const BlogPost = ({ blog }:{blog:BlogType }) => {

  return (
    <div>
        <AppBar />
        <div className='flex justify-center'>
    <div className='grid md:grid-cols-12 pt-14 px-14 w-full max-w-screen-2xl'>
      <div className=' col-span-8 py-4'>
       <div className='text-4xl capitalize font-extrabold'>
{blog.title}
       </div>
       <div className='text-slate-400 pt-1'>
        Post on 2nd December
       </div>
       <div className='text-md pt-4'>
        {blog.content}
       </div>
      </div>
      <div  className=' col-span-4 md:px-10 flex gap-5 flex-col '>
        <div className='font-medium text-2xl '>
        Author
        </div>
       
        <div className='flex capitalize items-center gap-2 '>
          <div>
          <Avatar name={blog.author.name || "A"} />
          </div>

          <div className='border-l-2 border-red-700 pl-2'>
            <p className='text-xl font-bold'>
        {blog.author.name || "Anonymous"}
            </p>
       
          this place is for bio of the author 
        </div>
        </div>
     
       
      </div>
    </div>
    </div>
    </div>
  )
}

export default BlogPost
