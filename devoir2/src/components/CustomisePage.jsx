import "./CustomisePage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomisationGrid from "./CustomisationGrid"
import CustomiseForm from "./CustomiseForm";
import { useState } from "react";

function CustomisePage(){
    const [selected, setSelected] = useState(null);

    const handleSubmit = () => {
        if (selected != null) {
            return true;
        } else {
            alert("Please select a customization option.");
            return false;
        }
    };
    return(
        <>
            <div className="cust-page-cont" id="customize">
                <div className="row cust-grid-fields-cont">
                    <div className="col-12 col-lg-8 p-0 cust-grid-cont ">
                        <CustomisationGrid setSelected={setSelected} selected={selected}></CustomisationGrid>
                    </div>
                    <div className="col-12 col-lg-4 p-0 cust-form-cont">
                        <CustomiseForm submitCheck={handleSubmit}></CustomiseForm>
                    </div>
                   
                </div>
                    <div className="cust-lines">
                        <div className="cust-blue-line"></div>
                        <div className="cust-red-line"></div>
                    </div>
            </div>
        </>
    )
}

export default CustomisePage