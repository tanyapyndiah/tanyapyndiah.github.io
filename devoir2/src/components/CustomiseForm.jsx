import "./CustomiseForm.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function CustomiseForm({submitCheck}){
    const [validated, setValidated] = useState(false);
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        const isCustomisationSelected = submitCheck();
        if (form.checkValidity() === false || !isCustomisationSelected) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    
    return(
        <>
            <div className="cust-cont">
                <p className="cust-text">Customize<br />your car</p>
                {/* <div className="cust-field-cont">
                    <label htmlFor="name" className="cust-input-label">Name</label> <br />
                    <input type="text" name="name" id="cust-name" placeholder="Name" className="cust-field"/> <br /><br />
                </div>
                <div className="cust-field-cont">
                    <label htmlFor="email" className="cust-input-label">Email</label> <br />
                    <input type="text" name="email" id="cust-email" placeholder="Email" className="cust-field"/> <br /><br />
                </div>
                <div className="cust-field-cont">
                    <label htmlFor="car-model" className="cust-input-label">Car Model</label> <br />
                    <input type="text" name="car-model" id="cust-car-model" placeholder="Car Model" className="cust-field"/> <br /><br />
                </div>
                <div className="cust-field-cont">
                    <label htmlFor="name" className="cust-input-label">Date</label> <br />
                    <input type="datetime-local" name="date" id="cust-date" placeholder="Name" className="cust-field"/>
                </div>
                <button className="book-btn">Book</button> */}

                <Form noValidate validated={validated} onSubmit={handleSubmit} className="form-cust-cont">
                    <Form.Group className="mb-3 field-container">
                        <Form.Label className="cust-input-label">Name</Form.Label>
                        <Form.Control type="name" placeholder="Name" className="cust-field" id="cust-name" required/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please provide a name.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3 field-container">
                        <Form.Label className="cust-input-label">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className="cust-field" id="cust-email" required/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please provide your email address.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3 field-container">
                        <Form.Label className="cust-input-label">Car Model</Form.Label>
                        <Form.Control type="text" placeholder="Enter car model" className="cust-field" id="cust-car-model" required/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please provide your email address.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3 field-container">
                        <Form.Label className="cust-input-label">Date</Form.Label>
                        <Form.Control type="datetime-local" placeholder="" className="cust-field" id="cust-date" required/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please enter a date for your repair.</Form.Control.Feedback>
                    </Form.Group>

                    
                    <Button variant="primary" type="submit" className="customise-btn">
                        Submit
                    </Button>
                </Form>
            </div>

            
        </>
    )
}

export default CustomiseForm