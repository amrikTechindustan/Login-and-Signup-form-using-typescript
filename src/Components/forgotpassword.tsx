
import React, { FormEvent, useState } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
const Forgotpsw: React.FC = (): JSX.Element => {
    return (
        <div>
            <Row className="m-0">
                <Col sm="12" className="p-0">
                    <div className="layout-wrapper">
                        <div className="form-layout">
                            <Row>
                                <Col sm="12" md="8" className="form-left-panel p-0">
                                    <img src="images/back.jpg" />
                                </Col>
                                <Col sm="12" md="4" className="form-wrapper">
                                    <h3 className="pt-4 title-3"><span>Whats</span> My Password ?</h3>
                                    <br />
                                    <Form >
                                        <Form.Group>
                                            <Form.Label>Enter Your Email Address</Form.Label>
                                            <Form.Control
                                                name="email"
                                            />
                                        </Form.Group>

                                        <br />
                                        <Button variant="primary" type="submit" block>Send My Password</Button>
                                    </Form>



                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Forgotpsw;