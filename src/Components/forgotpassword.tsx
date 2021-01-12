
import React, { FormEvent,ChangeEvent, useState } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import config from './config'

type TProduct = {
	[key: string]: string
}
const Forgotpsw: React.FC = (): JSX.Element => {
    const [count, setCount] = useState({
		email: '',
	} as TProduct);
    const [errors, setErrors] = useState({ email: '' } as TProduct);
    
	const onHandleSubmit = (e: FormEvent) => {
		e.preventDefault()
		console.log("gjmerlgjlaergkaelrgaekl;rg")
		const inputs = { ...count }
		let localErrors = {}

		const requestOptions: Object = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			data: JSON.stringify(count),
		};
		axios.post(`${config.baseUrl3}`, requestOptions).then((res: any,) => {
			console.log("Response are", res,localStorage.setItem('token',res.token))
		})

		setErrors({ ...errors, ...localErrors })

    }
    const handleChange =(e: ChangeEvent<HTMLInputElement>) => {
		const { name, value }: { name: string, value: string } = e.target;
		console.log(name, value, ">>>>>>>>");
		setCount({
			...count,
			[name]: value
		})
		setErrors({
			...errors,
			[name]: ""
		})
	}


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
                                    <Form onSubmit={onHandleSubmit}>
                                        <Form.Group>
                                            <Form.Label>Enter Your Email Address</Form.Label>
                                            <Form.Control
                                                name="email"
                                                value={count.email}
                                                onChange={handleChange}
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