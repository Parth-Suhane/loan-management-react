

import React, { useState } from 'react';
import useForm from '../updatehooks/updateUserForm';
import validate from '../updatehooks/updateValidation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

const UpdateForm = (props) => {
    console.log(props);
    const [loadLoanDetailsFrom, setLoadLoanDetailsFrom] = useState(
        props.location.loanDetailProps.loandetails
    );

    const { handleChange, handleSubmit, errors } = useForm(validate, loadLoanDetailsFrom);

    const history = useHistory();

    return (
        <div>
            <div className="col-12 col-md-6">
                <div className="card">
                    <div className="card-header">Loan Details Update Form</div>
                    <div className="card-body">
                        <form autoComplete="off" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Borrower name</label>
                                <input
                                    type="text"
                                    name="borrowerName"
                                    value={loadLoanDetailsFrom.borrowerName}
                                    className="form-control"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label>Loan Number</label>
                                <input
                                    type="text"
                                    name="loanNumber"
                                    value={loadLoanDetailsFrom.loanId}
                                    className="form-control"
                                    disabled
                                />
                            </div>




                            <div className="form-group">
                                <label>Loan Amount</label>
                                <input
                                    type="text"
                                    name="loanAmount"
                                    placeholder="Enter Loan amount"
                                    defaultValue={loadLoanDetailsFrom.loanAmount}
                                    className="form-control"
                                    onChange={handleChange}
                                />
                                <p className="text-danger">{errors.loanAmount}</p>

                            </div>
                            <div className="form-group">
                                <label>Loan Term</label>
                                <input
                                    type="text"
                                    name="loanTerm"
                                    placeholder="Enter Loan term "
                                    defaultValue={loadLoanDetailsFrom.loanTerm}
                                    className="form-control"
                                    onChange={handleChange}

                                />
                                <p className="text-danger">{errors.loanTerm}</p>


                            </div>

            
                            <div className="form-group text-center">
                                <button className="btn btn-primary" style={{ margin: "5px" }}>Submit</button>
                                <button className="btn btn-danger" onClick={() => { return history.push("/Search") }} npstyle={{ margin: "5px" }}  >Cancel</button>

                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    );

};

export default UpdateForm;