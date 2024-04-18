import  {  useState } from 'react';

import AppBar from '../components/AppBar';
 
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';
 
 
const Publish = () => {
 const [content,setContent]=useState("")
 const [title,setTitle]=useState("")

const navigate=useNavigate();
 
const publishButton=async()=>{
const response=  await axios.post(`${BACKEND_URL}/api/v1/blog`,{title,content},{
  headers:{
    Authorization:localStorage.getItem("token")
  }
})
navigate(`/blog/${response.data.id}`)
}
 
  return (
    <div >
<AppBar />      
 
    <div className="flex py-5 gap-20 flex-col items-center justify-center">
  <div className="w-full max-w-3xl">
    <div>
      <div className="p-5">
        <label className="block mb-2 text-lg font-bold text-gray-900">Title</label>
        <input
          type="text"
          placeholder='Head of your thoughts'
          onChange={ e=>setTitle(e.target.value)}
          className="block capitalize w-full text-xl p-3 font-bold text-gray-900 border-b border-gray-300   bg-white  focus:outline-none focus:ring-green-500 focus:border-green-500"
        />
        
      </div>
      <div className="p-5">
        <label className="block mb-2 text-xl font-medium text-gray-900">Content</label>
        <textarea
          rows={7}
          onChange={ e=>setContent(e.target.value)}
          className="block w-full text-sm text-gray-900 bg-white  border-b border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500"
          placeholder="Write your thoughts here..."
        ></textarea>
     
      </div>
      
    </div>
   
  </div>
  <div className=' '>
      <button 
      onClick={publishButton}
      className="  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300  ">
<span className=" px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
Publish Post
</span>
</button>
</div>
 
</div>
 
</div>
  )
}

export default Publish
