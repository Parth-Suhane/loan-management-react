

export default function validateUpdateForm(loandetails) {

    let errors = [];
    let { loanAmount, loanTerm, lienType, lienId } = loandetails;

    if (loanAmount.length === 0) {
        errors.loanAmount = 'Loan Amount is required ';
    } else if (loanAmount < 1) {
        errors.loanAmount = 'Loan Amount should be greater than 1 ';
    }
    
    if (loanTerm.length === 0) {
        errors.loanTerm = 'Loan term is required ';
    }
    if (loanTerm < 1 || loanTerm > 100) {
        errors.loanTerm = 'Loan Term should be a less than 100.0 and greater than 1.0 ';
    }


    return errors;
}