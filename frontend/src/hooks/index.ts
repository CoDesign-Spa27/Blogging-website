import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios";

export interface BlogType{
    content: string;
    title: string;
    id: string;
    author: {
        name: string | null;
    };
}

interface BlogsType{
    content: string;
    title: string;
    id: string;
    author: {
        name: string | null;
    };

}
export const useBlog=({id} : {id:string})=>{
    const [loading,setLoading]=useState(true);
    const [blog,setBlog]=useState<BlogType>();

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        }).then((response)=>{
            setBlog(response.data.post);
            setLoading(false)
        }).catch((error)=>{
            
            alert("error while fetching data" + error)
            setLoading(false)
        })
    },[])
    return {
        loading,blog
    }
}

export const useBlogs=()=>{
    const [loading,setLoading]=useState(true);
    const [blogs,setBlogs]=useState<BlogsType[]>([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        }).then((response)=>{
            setBlogs(response.data.post);
            setLoading(false)
        }).catch((error)=>{
            
            alert("error while fetching data" + error)
            setLoading(false)
        })
    },[])

    return {
        loading,blogs
    }
}