import "./CustomiseElement.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomiseElement({ imagePath, elemName, onSelect, selectedElem }){
    const isSelected = selectedElem === elemName;
    return(
        <>
            <div className={`elem-cont ${isSelected ? "selected-border" : ""}`} onClick={() => onSelect(elemName)}>
                <div className="img-cont">
                    <img className="cust-img" src={imagePath} alt="customisation" />
                </div>
                <p className="elem-text">{elemName}</p>
            </div>
        </>
    )
}

export default CustomiseElement