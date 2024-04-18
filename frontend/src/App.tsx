import { BrowserRouter, Route,  } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Blog from "./pages/Blog"
import Blogs from "./pages/Blogs"
import Publish from "./pages/Publish"
import Search from "./pages/Search"


function App() {
 

  return (
    <>
      <BrowserRouter>
      <Route   path='/blogs'>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route
        path="/blogs"
        element={<Blogs />}
        />
        <Route path="/publish" element={<Publish />} />
        <Route path="/search" element={<Search/>} />
      </Route>
      </BrowserRouter>
    </>
  )
}

export default App
