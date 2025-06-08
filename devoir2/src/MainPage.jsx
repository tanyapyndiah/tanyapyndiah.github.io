import "./MainPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage";
import ServicesPage from "./components/ServicesPage";
import RepairPage from "./components/RepairPage";
import GetInTouchPage from "./components/GetInTouchPage";
import CustomisePage from "./components/CustomisePage";

function MainPage(){
    return(
        <>
            <Navbar></Navbar>
            <LandingPage></LandingPage>
            <ServicesPage></ServicesPage>
            <RepairPage></RepairPage>
            <CustomisePage></CustomisePage>
            <GetInTouchPage></GetInTouchPage>
            <p className="created-by">Created by: Tanya Pyndiah and Vivek Perbhoo</p>
        </>
    )
}

export default MainPage;