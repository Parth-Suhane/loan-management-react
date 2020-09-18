import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Card, Col, Table } from 'react-bootstrap';
import Header from '../Header/Header';
import Axios from 'axios';

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
            Axios.post('http://localhost:8010/loan-api/searchLoan', state)
                .then(response => {
                    if (response.status === 200) {
                        let data = JSON.stringify(response.data);
                        setLoan(data);
                        setShowResults(true);
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
                    <tr key={item.loanNumber}>
                        <td>{item.loanNumber}</td>
                        <td>{item.borrowerName}</td>
                        <td>{item.loanNumber}</td>
                        <td>{item.loanAmount}</td>
                        <td><Button href="/update:{item.loanNumber}">Update</Button></td>
                    </tr>
                })}
            </tbody>
        </Table>
    )
}

export default LoanSearch;


{/* <table>
  {this.state.orderDetails.map((item =>
  <tr><td key={item.OrderID}>{item.CustomerID}</td></tr>
  ))}
</table> */}