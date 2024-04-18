import { Link } from "react-router-dom";

 
 
interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id:string
}


const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
 
  return <Link to={`/blog/${id}`}> 
   <div className="p-4 bg-slate-100 rounded-xl text-gray-800 m-2 flex flex-col gap-1 justify-center cursor-pointer max-w-screen-md w-screen">
    
        <div className="flex gap-2 items-center">
        <div>
    <Avatar name={authorName}/>
          
    </div>
      <div className="text-sm capitalize font-medium text-gray-500">
        {authorName}. | {publishedDate}
      </div>
      </div>
      <div className="text-xl font-bold capitalize">{title}</div>
      <div
      className="text-md"
      >{`${content.slice(0, 100) + "...."}`}
      <button className="font-medium text-sm text-green-600">read more</button>
      </div>
      <div className="text-gray-500 text-sm font-semibold">
        {`${Math.ceil(content.length / 100)} minutes read`}
      </div>
       
    </div>
    </Link>
};

export function Avatar({name}:{name:string}){

    return     <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-300 rounded-full ">
    <span className="text-lg font-bold uppercase text-gray-900">
        {name[0]}
    </span>
</div>

 
}
export default BlogCard;
