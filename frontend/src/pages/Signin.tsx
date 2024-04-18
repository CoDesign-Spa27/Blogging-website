import Auth from "../components/Auth"
import Quote from "../components/Quote"

 

const Signin = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <div>
     <Auth type="signin" />

      </div>
     <div className="hidden lg:block">
    <Quote />
    </div>
    </div>
  )
}

export default Signin
