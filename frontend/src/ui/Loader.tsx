 
import Lottie from "react-lottie-player"
import loader from "../assets/blog-loader.json"

const Loader = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div>
   <Lottie 
   animationData={loader}
   play
   style={{ width: 150, height: 150 }}
   />
   </div>
   <div>
    
   </div>
    </div>
  )
}

export default Loader
