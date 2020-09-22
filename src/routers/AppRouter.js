import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import LoanSearch from '../components/Search/LoanSearch';
import LoanUpdate from '../components/UpdateLoan/LoanUpdate';
import AddLoanComponent from '../components/AddLoan/AddLoanComponent';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={LoginForm} exact={true} />
            <Route path="/search" component={LoanSearch} />
            <Route path="/update" component={LoanUpdate} />
            <Route path="/add-loan" component={AddLoanComponent} />
        </Switch>
    </BrowserRouter >
);

export default AppRouter;