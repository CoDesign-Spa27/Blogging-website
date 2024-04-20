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
                Authorization:localStorage.getItem('blogToken')
            }
        }).then((response)=>{
            setBlog(response.data.post);
            setLoading(false)
        }).catch(( )=>{
            
            alert("error while fetching data please signin "
            )
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
                Authorization:localStorage.getItem('blogToken')
            }
        }).then((response)=>{
            setBlogs(response.data.post);
            setLoading(false)
        }).catch(()=>{
            
            alert("Please signup if you do not have an account" )
            setLoading(false)
        })
    },[])

    return {
        loading,blogs
    }
}