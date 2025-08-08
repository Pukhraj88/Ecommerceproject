import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import GridBackground from "../background/GridBackground"

export const Layout = ({ children }) => {

  return (
    <>
    
      <Nav />
      <div className="pt-[90px] sm:pt-0">
<GridBackground className='owncontainer'>
      
        <Outlet />
    </GridBackground>

      </div>
      <Footer />
    </>
  );
};
