
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createPostInput, updatePostInput } from "@sandeep28/common";
import { Hono } from "hono";
import { verify } from "hono/jwt";


export const blogRouter=new Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
    },
    Variables:{
      userId: string;
    }
  }>();

blogRouter.use('/*',async (c,next)=>{
  const token=c.req.header("Authorization") || "";
  const user=await verify(token,c.env.JWT_SECRET)
 try{ if(user){
    c.set("userId", user.id);
 await   next();
  }
  else{
    c.status(403);
    return c.json({
      message:"You are not logged in"
    })
  }
 }catch(e){
  c.status(411)
  return c.json({message:"You are not logged in"})
 }
 
})

blogRouter.post('/',async (c) => {
    const body=await c.req.json();
    const { success}=createPostInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({message:"Inputs are not valid"})
    }
    const authorId=c.get("userId")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
try{
    const post =  await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:authorId
        }
      })
    return c.json({
      id:post.id
    })}
    catch(err){
      c.status(411)

      return c.json({error :"Internal Error occurred at our side" + err})
    }
  })
  
  
  
  blogRouter.put('/',async (c) => {
    const body=await c.req.json();
    const { success}=updatePostInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({message:"Inputs are not valid"})
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());

   try{   const post=await prisma.post.update({
        where:{
          id:body.id
        },
        data:{
          title:body.title,
          content:body.content,
        }
      })

    return c.json({
      id:post.id
    }) }
    catch(err){
      c.status(411)

      return c.json({error :"Internal Error occurred at our side" + err})
    }
  })
  
  blogRouter.get('/bulk',async (c) => {
   
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());

  try{ 
       const post=await prisma.post.findMany({
        select:{
          content:true,
          title:true,
          id:true,
          author:{
            select:{
              name:true
            }
          }
        }
       })

    return c.json({
     post:post,
    
    }) 

}
    catch(err){
      c.status(411)
      return c.json({error :"Internal Error occurred at our side" + err})
    }
  })
  

  blogRouter.get('/:id',async (c) => {
      const id= c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());

  try{    const post=await prisma.post.findFirst({
        where:{
          id:id
        },
        select:{
          content:true,
          title:true,
          id:true,
          author:{
            select:{
              name:true
            }
          }
        }
      })

    return c.json({
     post:post
    }) }
    catch(err){
      c.status(411)

      return c.json({error :"Internal Error occurred at our side" + err})
    }
  })
  
  