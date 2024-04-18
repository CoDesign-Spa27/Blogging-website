import Quote from "../components/Quote"
import Auth from "../components/Auth"
 

const Signup = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
  <div>
    <Auth type="signup" />
  </div>
    <div className="hidden lg:block">
    <Quote />
    </div>
   
    </div>
  )
}

export default Signup
