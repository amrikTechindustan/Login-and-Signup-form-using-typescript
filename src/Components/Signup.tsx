
import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import { relative } from 'path';

const Signup: React.FC = (): JSX.Element => {
	// 	const history = useHistory();
	// 	const [count,setCount]=useState({
	// 		firstName: '',
	// 		lastName: '',
	// 		userName: '',
	// 		email:'',
	// 		contact:'',
	// 		psw:'',
	// 		confirm_psw:''
	// 	})
	//    const onHandleSubmit = (e: FormEvent) => {
	// 		e.preventDefault();
	// 		const inputs={...count}

	// 		let errors = {};
	// 		if (!count.firstName || count.firstName.length < 3) {
			 
	// 			return 'firstname length should be greater then 3'
	// 		}
	// 		return errors;
	// 	  };



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
									<Form >
										<Form.Group>
											<Form.Label>First Name</Form.Label>
											<Form.Control
												name="firstName"
												required


											/>
										</Form.Group>
										<Form.Group>
											<Form.Label>Last Name</Form.Label>
											<Form.Control
												name="lastName"

											/>
										</Form.Group>
										<Form.Group>
											<Form.Label>Username</Form.Label>
											<Form.Control
												name="userName"
											/>
										</Form.Group>
										<Form.Group>
											<Form.Label>Email</Form.Label>
											<Form.Control
												name="email"

											/>
										</Form.Group>
										<Form.Group>
											<Form.Label>Contact No.</Form.Label>
											<Form.Control
												name="contact"
											/>
										</Form.Group>
										<Form.Group>
											<Form.Label>Password</Form.Label>
											<Form.Control
												name="psw"
												type="password"
											/>
										</Form.Group>
										<Form.Group>
											<Form.Label>Confirm Password</Form.Label>
											<Form.Control
												name="confirm_psw"
												type="password"
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