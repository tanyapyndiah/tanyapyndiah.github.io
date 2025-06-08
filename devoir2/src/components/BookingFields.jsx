import "./BookingFields.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


function BookingFields(){
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return(
        <>
            <div className="booking-cont">
                <p className="booking-text">Book a<br />repair</p>
                {/* <div className="field-cont">
                    <label htmlFor="name" className="input-label">Name</label> <br />
                    <input type="text" name="name" id="name" placeholder="Name" className="field"/> <br /><br />
                </div>
                <div className="field-cont">
                    <label htmlFor="email" className="input-label">Email</label> <br />
                    <input type="text" name="email" id="email" placeholder="Email" className="field"/> <br /><br />
                </div>
                <div className="field-cont">
                    <label htmlFor="name" className="input-label">Date</label> <br />
                    <input type="datetime-local" name="date" id="date" placeholder="Name" className="field"/>
                </div> */}
                 <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Label className="input-label">Name</Form.Label>
                        <Form.Control type="name" placeholder="Name" className="field" id="name" required/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please provide a name.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="input-label">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className="field" id="email" required/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid" >Please provide your email address.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="input-label">Type of Service</Form.Label>
                        <Form.Select className="field" id="service" required>
                            <option value="">Select a service</option>
                            <option value="repair">Engine diagnostics and repairs</option>
                            <option value="maintenance">Transmission repair or replacement</option>
                            <option value="inspection">Brake repair (pads, rotors, calipers)</option>
                            <option value="custom">Suspension and steering system repairs</option>
                            <option value="custom">Radiator and cooling system repair</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please select a service type.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="input-label">Date</Form.Label>
                        <Form.Control type="datetime-local" placeholder="" className="field" id="date" required/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid" >Please enter a date for your repair.</Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="repair-btn">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default BookingFields