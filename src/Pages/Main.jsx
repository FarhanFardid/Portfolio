import { Outlet } from "react-router-dom";
import Navigation from "./Home/Navigation";


const Main = () => {
    return (
        <div >
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;