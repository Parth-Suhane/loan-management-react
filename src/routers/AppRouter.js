import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import LoanSearch from '../components/Search/LoanSearch';
import UpdateLoan from '../components/UpdateLoan/UpdateLoan';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={LoginForm} exact={true} />
            <Route path="/search" component={LoanSearch} />
            <Route path="/update" component={UpdateLoan} />
        </Switch>
    </BrowserRouter >
);

export default AppRouter;