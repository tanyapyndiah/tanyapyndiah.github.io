import "./GetInTouchPage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import GetInTouch from "./GetInTouch";
import car3 from "../assets/car3.png"

function GetInTouchPage(){
    return(
        <>
            <div className="git-page-cont" id="contact">
                <GetInTouch></GetInTouch>
                <div className="car-design">
                    <div className="line-circle">
                        <div className="circle"></div>
                        <div className="git-line"></div>
                    </div>
                    <img src={car3} alt="" className="car3" />
                </div>
            </div>
        </>
    )
}

export default GetInTouchPage