import React, { Component } from 'react'
//import ApiService from "../../service/ApiService";
import axios from 'axios';
const initialState = {
    
    borrowerNameError: '',
    loanTypeError: '',
    loanTermError: '',
    loanAmountError:'',
    addressLine1Error:'',
    addressLine2Error:'',
    cityError: '',
    zipCodeError: '',
    legalDocumentError: '',
  };
class AddLoanComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            borrowerName: '',
            loanType: '',
            loanTerm: '',
            loanAmount: '',
            message:'',
          
        property: {
            addressLine1: '',
            addressLine2: '',
            city: '',
            zipCode: '',
            legalDocument: '',
            }
        };
        this.saveLoan = this.saveLoan.bind(this);
    }
    validate = () => {
        let {borrowerNameError,loanTypeError,loanTermError,loanAmountError,addressLine1Error,addressLine2Error,cityError,zipCodeError,legalDocumentError} = "";
        

        if (!this.state.borrowerName) {
            borrowerNameError = "BorrowerName cannot be blank";
          }
          if (!this.state.loanType) {
            loanTypeError = "LoanType cannot be blank";
          }
          if (!this.state.loanTerm) {
            loanTermError = "LoanTerm cannot be blank";
          }
      
          if (!this.state.loanAmount) {
            loanAmountError = "LoanAmount cannot be blank";
          }
      
          if (!this.state.addressLine1) {
            addressLine1Error = "AddressLine1 cannot be blank";
          }
      
          if (!this.state.addressLine2) {
            addressLine2Error = "AddressLine2 cannot be blank";
          }
      

          if (!this.state.city) {
            cityError = "City cannot be blank";
          }
      
          if (!this.state.zipCode) {
            zipCodeError = "ZipCode cannot be blank";
          }
      
          if (!this.state.legalDocument) {
            legalDocumentError = "LegalDocument cannot be blank";
          }
          
      
          if (borrowerNameError || loanTypeError||loanAmountError||loanTermError||addressLine1Error||addressLine2Error||cityError||zipCodeError||legalDocumentError) {
            this.setState({ borrowerNameError, loanTypeError,loanAmountError,loanTermError,addressLine1Error,addressLine2Error,cityError,zipCodeError,legalDocumentError});
            return false;
          }
      
          return true;
        };
    saveLoan = (e) => {
        e.preventDefault();
        const isValid = this.validate();
    if (isValid) {
            this.setState(initialState);
          }
        
    
        let loan = {
                    borrowerName: this.state.borrowerName,
                    loanType: this.state.loanType, 
                    loanTerm: this.state.loanTerm,
                    loanAmount: this.state.loanAmount, 
                    property: {
                        addressLine1: this.state.addressLine1, 
                        addressLine2: this.state.addressLine2, 
                        city: this.state.city,
                        zipCode: this.state.zipCode,
                        legalDocument: this.state.legalDocument
                    }

                };

                

        axios.post('http://localhost:8081/loan-api/addLoan',loan)
        .then(res => {
              this.setState({message : 'Loan created successfully.'});               
         });
    }

    onChange = (e) =>
        this.setState({...initialState,[e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add Loan</h2>
                <form>
                <div className="form-group">
                    <label>Borrower Name:</label>
                    <input type="text" placeholder="borrowerName" name="borrowerName" className="form-control" value={this.state.borrowerName} onChange={this.onChange}/>
                </div>
                <div style={{ fontSize: 12, color: "red" }}>
                   {this.state.borrowerNameError}
                </div>
                <div className="form-group">
                    <label>Loan Type:</label>
                    <input type="text" placeholder="loanType" name="loanType" className="form-control" value={this.state.loanType} onChange={this.onChange}/>
                </div>
                
                <div style={{ fontSize: 12, color: "red" }}>
                   {this.state.loanTypeError}
                </div>
                <div className="form-group">
                    <label>Loan Term:</label>
                    <input type="text" placeholder="loanTerm" name="loanTerm" className="form-control" value={this.state.loanTerm} onChange={this.onChange} required/>
                </div>
                <div style={{ fontSize: 12, color: "red" }}>
                   {this.state.loanTermError}
                </div>
                <div className="form-group">
                    <label>Loan Amount:</label>
                    <input type="text" placeholder="loanAmount" name="loanAmount" className="form-control" value={this.state.loanAmount} onChange={this.onChange}/>
                </div>
                <div style={{ fontSize: 12, color: "red" }}>
                   {this.state.loanAmountError}
                </div>
                <div className="form-group">
                    <label>AddressLine1:</label>
                    <input type="text" placeholder="addressLine1" name="addressLine1" className="form-control" value={this.state.addressLine1} onChange={this.onChange}/>
                </div>
                <div style={{ fontSize: 12, color: "red" }}>
                   {this.state.addressLine1Error}
                </div>
                <div className="form-group">
                    <label>AddressLine2:</label>
                    <input type="text" placeholder="addressLine2" name="addressLine2" className="form-control" value={this.state.addressLine2} onChange={this.onChange}/>
                </div>
                <div style={{ fontSize: 12, color: "red" }}>
                   {this.state.addressLine2Error}
                </div>
                <div className="form-group">
                    <label>City:</label>
                    <input type="text" placeholder="city" name="city" className="form-control" value={this.state.city} onChange={this.onChange}/>
                </div>
                <div style={{ fontSize: 12, color: "red" }}>
                   {this.state.cityError}
                </div>
                <div className="form-group">
                    <label>ZipCode:</label>
                    <input type="text" placeholder="zipCode" name="zipCode" className="form-control" value={this.state.zipCode} onChange={this.onChange}/>
                </div>
                <div style={{ fontSize: 12, color: "red" }}>
                   {this.state.zipCodeError}
                </div>
                <div className="form-group">
                    <label>LegalDocument:</label>
                    <input type="text" placeholder="legalDocument" name="legalDocument" className="form-control" value={this.state.legalDocument} onChange={this.onChange}/>
                </div>
                <div style={{ fontSize: 12, color: "red" }}>
                   {this.state.legalDocumentError}
                </div>
                <div className="modal-body">
                       
						<div className="thank-you-pop">
							
							<h1 style={{ fontSize: 40, color: "green" }}><strong>{this.state.message}</strong></h1>
							<h3 className="cupon-pop"></h3>
							
 						</div>
                         
                    </div>
                <button className="btn btn-success" onClick={(this.saveLoan)}>Save</button>
            </form>
    </div>
        );
    }
}

export default AddLoanComponent;