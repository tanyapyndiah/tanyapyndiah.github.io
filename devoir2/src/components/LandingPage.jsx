import "./LandingPage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import car1 from '../assets/car1.png';

function LandingPage(){
    return(
        <>
            <div className="container-fluid landing-page-cont">
                <div className="row-cont">
                    <div className="row  fade-in row-text">
                        <div className="col-4"></div>
                        <div className="col-4 landing-page-text">
                            <p className="pitstop-title">
                                <span className="pitstop-title-gradient">PITST</span>
                                <span className="red-text">O</span>
                                <span className="pitstop-title-gradient">P</span>                        
                            </p>
                            <div className="pitstop-desc-text">
                            Ottawa's<br/>finest auto<br />repair shop
                            </div>
                        </div>
                        
                    </div>
                    <div className="row  fade-in">
                        <div className="col-12 car1-cont">
                            <img src= {car1} alt="car 3/4 view" className="car1-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage