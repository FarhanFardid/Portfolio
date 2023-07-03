import { Outlet } from "react-router-dom";
import Navigation from "./Home/Navigation";
import Footer from "./Home/Footer";



const Main = () => {
    return (
        <div >
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;