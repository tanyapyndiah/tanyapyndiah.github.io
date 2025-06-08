import "./CustomisationGrid.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomiseElement from "./CustomiseElement";
import Headlights from "../assets/Headlights.png"
import PaintJob from "../assets/PaintJob.png"
import Rims from "../assets/Rims.png"
import Wheel from "../assets/Wheel.png"
import Spoiler from "../assets/Spoiler.png"
import Tires from "../assets/Tires.png"


function CustomisationGrid({ setSelected, selected}){

    const handleSelect = (itemName) => {
        if (selected == itemName){
            setSelected(null);
        } else {
            setSelected(itemName);
        }
        
    };

    return(
        <>
            <div className="grid">
                <div className="row grid-cust-text">
                    Select your customization
                </div>
                <div className="row">
                    <div className="col-4">
                        <CustomiseElement imagePath={PaintJob} elemName={"Paint Job"} onSelect={handleSelect} selectedElem={selected}></CustomiseElement>
                    </div>
                    <div className="col-4">
                        <CustomiseElement imagePath={Wheel} elemName={"Wheel"} onSelect={handleSelect} selectedElem={selected}></CustomiseElement>
                    </div>
                    <div className="col-4">
                        <CustomiseElement imagePath={Tires} elemName={"Tires"} onSelect={handleSelect} selectedElem={selected}></CustomiseElement>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <CustomiseElement imagePath={Headlights} elemName={"Headlights"} onSelect={handleSelect} selectedElem={selected}></CustomiseElement>
                    </div>
                    <div className="col-4">
                        <CustomiseElement imagePath={Spoiler} elemName={"Spoiler"} onSelect={handleSelect} selectedElem={selected}></CustomiseElement>
                    </div>
                    <div className="col-4">
                        <CustomiseElement imagePath={Rims} elemName={"Rims"} onSelect={handleSelect} selectedElem={selected}></CustomiseElement>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomisationGrid