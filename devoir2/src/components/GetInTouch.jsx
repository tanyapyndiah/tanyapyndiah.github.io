import "./GetInTouch.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function GetInTouch(){
    return(
        <>
            <div className="git-cont">
                <p className="git-text">Get in touch</p>
                    <div className="info-cont">
                        <p className="info-label">Telephone number</p>
                        <div className="info-field">
                            <p className="git-info">+1 613 123 4567</p>
                        </div>
                    </div>
                    <div className="info-cont">
                        <p className="info-label git-email">Email</p>
                        <div className="info-field">
                            <a href="mailtzo:pitstop@gmail.com" className="email-link">
                            <p className="git-info git-info-email">pitstop@gmail.com</p>
                            </a>
                        </div>
                    </div>
                    <div className="info-cont">
                        <p className="info-label">Address</p>
                        <div className="info-field">
                            <p className="git-info">5, Laurier Ave, Ottawa, ON</p>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default GetInTouch