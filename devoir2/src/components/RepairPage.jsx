import "./RepairPage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import car2 from '../assets/car2.png';
import BookingFields from "./BookingFields";

function RepairPage(){
    return(
        <>
            <div className="repair-page-cont" id = "repair">
                <BookingFields></BookingFields>
                <div className="bg-cont">
                    <img className="car" src={car2} alt="car side view" />
                    <div className="lines">
                        <div className="red-line"></div>
                        <div className="blue-line"></div>
                    </div>
                        
                </div>
                
            </div>


        </>
    )
}

export default RepairPage