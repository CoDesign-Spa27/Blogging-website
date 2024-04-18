import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { cors } from 'hono/cors'
 
 
const app = new Hono<{
  Bindings:{
   DATABASE_URL:string ,
   JWT_SECRET:string

  }
}>()
app.use('/*',cors())
app.route('/api/v1/user',userRouter)
app.route('/api/v1/blog',blogRouter)

app.use('/api/v1/blog/*', async (c, next) => {
  const jwt=c.req.header("Authorization");
  if(!jwt){
    c.status(403)
    return c.json({error : "Unauthorized attempt "})
  }
  const token=jwt.split(" ")[1]
  const response=await verify(token,c.env.JWT_SECRET)
  if(!response){
    next()
  }else{
    c.status(403);
   return c.json({error : "unauthorized attempt"})
  }
  await next()
})




export default app
