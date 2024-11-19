import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

 





const MainLayout = () => {
  return (
    <div >
    
      <div>
       <Navbar/>
      </div>
        <div className="min-h-screen">
        <Outlet/>
        </div>
     
    
       <div>
       <Footer/>
       </div>
      
    </div>


  )
}

export default MainLayout;
