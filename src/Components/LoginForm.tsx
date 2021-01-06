
import React, { FormEvent, useState } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import { relative } from 'path';
import { useHistory } from 'react-router-dom'
const Login: React.FC = (): JSX.Element => {
	const history = useHistory();
	const toSignup = () => {
		history.push('/signup')
	}
	const toForgotpsw = () => {
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
									<Form >
										<Form.Group>
											<Form.Label>Username</Form.Label>
											<Form.Control
												name="firstName"
												required


											/>
										</Form.Group>
										<Form.Group>
											<Form.Label>PassWord</Form.Label>
											<Form.Control
												type="password"
												name="lastName"

											/>
										</Form.Group>
										<br />
										<Button variant="primary" type="submit" block>Login</Button>
									</Form>
									<br />
									<div className="py-2">
										<span className="text-center" onClick={() => toSignup()}>Create Account</span><span className="forgot_psw" onClick={() => toForgotpsw()}>Forgot Password?</span>
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