import { useNavigate } from "react-router-dom"
import { TypeAnimation } from "react-type-animation"
 
const LandingPage = () => {

 const navigate=useNavigate();

  return (
    <div className="w-full flex md:gap-10 gap-5 flex-col justify-center
    items-center h-screen bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="md:text-4xl text-2xl py-4 bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent font-extrabold"> 
            InkSpire hub
        </div>
        <div className="md:text-6xl px-2 sm:text-3xl text-xl md:py-4 bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent font-extrabold ">
      <TypeAnimation
      sequence={
        [
            'Where Ideas Take Flight :',
            1000,
            'Blogging Beyond Boundaries !',
            1000
        ]
      }
      wrapper="span"
      speed={50}
      repeat={Infinity}
      />
        </div>
        <div className="py-4">
        <button 
        onClick={()=>navigate('/blogs')}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
<span className="relative md:px-5 px-2 py-2 md:py-2.5 transition-all  ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Take Flight To Blogs
</span>
</button>
        </div>
    </div>
  )
}

export default LandingPage
