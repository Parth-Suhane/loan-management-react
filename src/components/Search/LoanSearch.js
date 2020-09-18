import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Card, Col, Table } from 'react-bootstrap';
import Header from '../Header/Header';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const LoanSearch = () => {
    const search = {
        borrowerName: '',
        loanNumber: '',
        loanAmount: ''
    }

    const [state, setState] = useState(search);
    const [showResults, setShowResults] = useState(false);
    const [loan, setLoan] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);


    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    useEffect(() => {
        if (isSubmitted) {
            Axios.post('http://localhost:8765/loan/loan-api/loan/search', state)
                .then(response => {
                    if (response.status === 200) {
                        let data = response.data;
                        setLoan(data);
                        setShowResults(true);
                    }
                    else{

                    }
                })
                .catch(error => {
                    console.log(error)
                });
            setState(search);
            setIsSubmitted(false)
        }

    }, [isSubmitted])

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center mt-5">
                        <Card>
                            <Card.Header>
                                <Form inline onSubmit={handleSubmit}>
                                    <Form.Row className="align-items-center">
                                        <Form.Group>
                                            <Col xs="auto">
                                                <Form.Control name="borrowerName" placeholder="Borrower Full Name" type="text" value={state.borrowerName} onChange={handleChange} />
                                            </Col>
                                            <Col xs="auto">
                                                <Form.Control name="loanNumber" placeholder="Loan Number" type="number" min="0" value={state.loanNumber} onChange={handleChange} />
                                            </Col>
                                            <Col xs="auto">
                                                <Form.Control name="loanAmount" placeholder="Loan Amount" type="number" min="0" value={state.loanAmount} onChange={handleChange} />
                                            </Col>
                                        </Form.Group>
                                        <Button variant="outline-primary" type="submit">Search</Button>
                                    </Form.Row>
                                </Form>
                            </Card.Header>
                            <Card.Body>
                                {showResults ? <LoanSearchTable loan={loan || null} /> : null}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>

    );
}


const LoanSearchTable = ({ loan }) => {
    console.log(loan);
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Borrower Name</th>
                    <th>Loan Number</th>
                    <th>Loan Amount</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {loan.map((item) => {
                     return ( 
                    <tr key={item.loanId}>
                        <td>{item.loanId}</td>
                        <td>{item.borrowerName}</td>
                        <td>{item.loanId}</td>
                        <td>{item.loanAmount}</td>
                        <td><Link to={{ pathname: '/update', state: { loanDetail: item } }}>Update</Link></td>
                    </tr>
                     )
                })}
            </tbody>
        </Table>
    )
}

export default LoanSearch;
