
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import axios from 'axios'
import config from './config'

type TProduct = {
	[key: string]: string
}
const Signup: React.FC = (): JSX.Element => {
	const history = useHistory();
	const dispatch = useDispatch();	

	const [count, setCount] = useState({
		firstName: '',
		lastName: '',
		userName: '',
		email: '',
		contact: '',
		password: '',
		confirm_password: ''
	} as TProduct);
	const [errors, setErrors] = useState({ firstName: '', lastName: '', userName: '', email: '', contact: '', password: '', confirm_password: '' } as TProduct);

	const onHandleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const inputs = { ...count }
		let localErrors = {}

		if (inputs.firstName.length === 0) {
			localErrors = { ...localErrors, firstName: "First name is required!" };
		}

		if (inputs.email.length < 5) {
			localErrors = { ...localErrors, email: "Email should be at least 5 charcters long" }
		}
		if (inputs.email.split("").filter(x => x === "@").length !== 1) {
			localErrors = { ...localErrors, email: "Email should contain a @" }
		}
		if (inputs.email.indexOf(".") === -1) {
			localErrors = { ...localErrors, email: "Email should contain at least one dot" }
		}

		if (inputs.password.length < 6) {
			localErrors = { ...localErrors, password: "Password should be at least 6 characters long" }
		}
		if (!Object.keys(localErrors).length) {
			const requestOptions: Object = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				data: JSON.stringify(count),
			};
			axios.post(`${config.baseUrl}`, requestOptions).then((res: any) => {
				console.log("Response are", res)
			})
		} else {
			setErrors({ ...errors, ...localErrors })
		}

	}


	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
									<h2 className="title-1">Welcome!</h2>
									<h1 className="title-2">Let's start together</h1>
									<h3 className="pt-4 title-3"><span>Login</span> your account</h3>
									<Form onSubmit={onHandleSubmit}  >
										<Form.Group>
											<Form.Label>First Name</Form.Label>
											<Form.Control
												name="firstName"
												value={count.firstName}
												onChange={handleChange}
											/>
											{(errors && errors.firstName) || ""}
										</Form.Group>
										<Form.Group>
											<Form.Label>Last Name</Form.Label>
											<Form.Control
												name="lastName"
												value={count.lastName}

												onChange={handleChange}

											/>
										</Form.Group>
										<Form.Group>
											<Form.Label>Username</Form.Label>
											<Form.Control
												name="userName"
												value={count.userName}

												onChange={handleChange}
											/>
										</Form.Group>
										<Form.Group>
											<Form.Label>Email</Form.Label>
											<Form.Control
												name="email"
												value={count.email}

												onChange={handleChange}

											/>
											{(errors && errors.email) || ""}
										</Form.Group>
										<Form.Group>
											<Form.Label>Contact No.</Form.Label>
											<Form.Control
												name="contact"
												value={count.contact}

												onChange={handleChange}
											/>
										</Form.Group>
										<Form.Group>
											<Form.Label>Password</Form.Label>
											<Form.Control
												name="password"
												type="password"
												value={count.password}

												onChange={handleChange}
											/>
											{(errors && errors.psw) || ""}
										</Form.Group>
										<Form.Group>
											<Form.Label>Confirm Password</Form.Label>
											<Form.Control
												name="confirm_password"
												value={count.confirm_password}

												type="password"
												onChange={handleChange}
											/>
										</Form.Group>
										<Button variant="primary" type="submit" block>Signup</Button>
									</Form>
									<div className="py-2">
										<span className="text-center">Already have an account?</span>
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

export default Signup;