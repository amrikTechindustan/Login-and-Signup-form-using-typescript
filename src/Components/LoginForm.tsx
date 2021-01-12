
import React, { useState, ChangeEvent,  FormEvent } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap'

import { useHistory } from 'react-router-dom'
import config from './config'
import axios from 'axios'
type TProduct = {
	[key: string]: string
}
const Login: React.FC = (): JSX.Element => {
	const history=useHistory()

	const [count, setCount] = useState({
		email: '',
		password: ''
	} as TProduct);
	const [errors, setErrors] = useState({ email: '', password: '' } as TProduct);

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
		axios.post(`${config.baseUrl2}`, requestOptions).then((res: any,) => {
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
	const toForgotScreen=()=>{
		history.push('/forgotpsw')
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
									<h2 className="title-1">Welcome!</h2>
									<h1 className="title-2">Let's start together</h1>
									<h3 className="pt-4 title-3"><span>Login</span> your account</h3>
									<Form onSubmit={onHandleSubmit}>
										<Form.Group>
											<Form.Label>email</Form.Label>
											<Form.Control
												name="email"
												value={count.email}
												onChange={handleChange}


											/>
										</Form.Group>
										<Form.Group>
											<Form.Label>PassWord</Form.Label>
											<Form.Control
												type="password"
												name="password"
												value={count.password}
												onChange={handleChange}

											/>
										</Form.Group>
										<br />
										<Button variant="primary" type="submit" block>Login</Button>
									</Form>
									<br />
									<div className="py-2">
										<span className="text-center">Create Account</span><span className="forgot_psw" onClick={toForgotScreen}>Forgot Password?</span>
									</div>



								</Col>
							</Row>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
}

export default Login;