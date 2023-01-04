import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
 
 
  {
    path: "/about",
    element: <About/>,
  }
]);
export default router