import "./ServicesPage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import car4 from '../assets/car4.png';
import car4sm from '../assets/car4-sm.png';
import React, { useEffect, useRef } from "react";



function ServicesPage(){
    const imgRef = useRef(null);

    useEffect(() => {
        if (!imgRef.current) return;
        const mediaQuery = window.matchMedia("(max-width: 1100px)");

        const updateImage = (e) => {
        if (imgRef.current) {
            if (e.matches) {
            imgRef.current.src = car4sm;
            } else {
            imgRef.current.src = car4;
            }
        }
        };

        updateImage(mediaQuery);
        mediaQuery.addEventListener("change", updateImage);

        return () => {
            mediaQuery.removeEventListener("change", updateImage);
        };
    }, []);
    return(
        <>
            <div className="services-page" id="services">
                <img ref={imgRef} src={car4} alt="" className="car4" id="car4"/>
                <div className="services-cont">
                    <h1 className="our-services-title">Our Services</h1>
                    <div className="repairs-services-cont">
                        <div className="services-text-btn">
                            <p className="services-title">Repairs</p>
                            <a href="#repair" className="services-book-btn">Book</a>
                        </div>
                        <ul className="rep-services-text">
                            <li>Engine diagnostics and repairs</li>
                            <li>Transmission repair or replacement</li>
                            <li>Brake repair (pads, rotors, calipers)</li>
                            <li>Suspension and steering system repairs</li>
                            <li>Radiator and cooling system repair</li>
                        </ul>
                    </div>
                    <div className="customize-services-cont">
                        <div className="services-text-btn">
                            <p className="services-title">Customizations</p>
                            <a href="#customize" className="services-book-btn">Book</a>
                        </div>
                        <div className="cust-services-text">
                            <ul className="left-list">
                                <li>Paint Job</li>
                                <li>Wheel</li>
                                <li>Tires</li>
                            </ul>
                            <ul className="right-list">
                                <li>Spoiler</li>
                                <li>Rims</li>
                                <li>Headlights</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesPage