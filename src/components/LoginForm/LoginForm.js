import React, { useState, useEffect, useRef } from 'react';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import Axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [isFormValid, setIsFormValid] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false);
    const isMounted = useRef(false)

    useEffect(() => {
        if (isMounted.current) {
            let errorsArray = [];
            if (!email) {
                errorsArray.emailAddress = "Email Address is required"
            }
            else if (!/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(email)) {
                errorsArray.emailAddress = "Invalid email address"
            }
            if (password.length < 8) {
                errorsArray.password = "Passwords must be at least 8 characters long"
            }
            setErrors(errorsArray);
            if (errorsArray.emailAddress === undefined && errorsArray.password === undefined)
                setIsFormValid(true)
            else
                setIsFormValid(false)
        } else {
            isMounted.current = true
        }
    }, [email, password])

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true)
    };

    useEffect(() => {
        if (isSubmitted) {
            setIsSubmitted(false);
            console.log("making api call")
            let user = {
                email,
                password
            }
            // console.log(user)
            Axios.post('--------------URL--------------', user)
                .then(response => {
                    if (response.status === 200) {
                        localStorage.setItem("auth", response.data.jwt);
                        //console.log(response.data.roles[0]);
                    }
                    else {
                        alert("Login not successful. Please try after some time!!!")
                    }
                    //console.log(response.data)
                    //console.log(localStorage.getItem("auth"))
                })
                .catch(error => {
                    console.log(error)
                    alert("Login not successful. Please try after some time!!!")
                }
                )
        }
    }, [isSubmitted])

    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center mt-5">
                    <Card border="primary" style={{ width: '26rem' }}>
                        <Card.Header className="bg-primary text-white" as="h5">Login</Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Label>Email address</Form.Label>
                                <Form.Group>
                                    <Form.Control name="emailId" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    {errors && <p>{errors.emailAddress}</p>}
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    {errors && errors.password}
                                </Form.Group>
                                <Button variant="primary" type="submit" disabled={!isFormValid}>Submit</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginForm;