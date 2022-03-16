import React from 'react';

import './contact-form.style.css';
import Background from '../../images/bg_3.jpg';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

var imageStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',

};

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValue: 'Select service'
        };
    }

    handleChange = (event) => {
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="kontaktai">
                <div className="kontaktaiImg" style={imageStyle}></div>
                <div className="kontaktaiForm">
                    <span>Užsirezervuokite laiką</span>
                    <h3>konsultacijai</h3>
                    <Form onSubmit={this.handleSubmit}>

                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control as="select" custom value={this.state.selectValue} onChange={(e) => { this.setState({ selectValue: e.target.value }) }}>
                                <option value='Select service' disabled>Rinktis paslaugą</option>
                                <option value='1'>Konsultacija</option>
                                <option value='2'>Taisymas</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formName">
                                <Form.Control type="text" placeholder="Vardas" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formVehicleNo">
                                <Form.Control type="text" placeholder="Vieta" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formDate">
                                <Form.Control type="Date" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formTime">
                                <Form.Control type="Time" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formMessage">
                                <Form.Control as="textarea" rows="5" placeholder="Žinutė" />
                            </Form.Group>
                        </Form.Row>
                        <Button className="btn-dark" variant="primary" type="submit" block>
                            Siųsti užsakymą
                        </Button>
                    </Form>

                </div>
            </div>
        );
    }
}

export default ContactForm;