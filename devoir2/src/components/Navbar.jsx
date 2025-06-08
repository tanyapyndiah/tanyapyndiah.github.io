import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg position-fixed navbar-light bg-transparent mt-0 w-100 p-0 nav-bar-cont">
                <div className="container-fluid nav-bar">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mainNavbar">
                        <ul className="navbar-nav ms-auto myNav">
                            <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#repair">Repairs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#customize">Customizations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact Us</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;