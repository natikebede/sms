import React, { Component } from 'react';

import { Switch,Route } from 'react-router-dom';
import Header from './Header';
import ExpenseReport from './Expense_report';
import NewExpenss from './New_Expenss';
import { Redirect } from 'react-router-dom';
import Mywallet from './Mywallet';
function Maincomponent ()
{
  
        return (
           <>
            <Header/>
            <Switch>
            <Route path="/newExpenss"  component={NewExpenss}/>
            <Route path="/Report" component={ExpenseReport}/> 
            <Route path="/Mywallet" component={Mywallet}/>
            <Redirect to="/newExpenss"/>
    

    </Switch>
           </> 
        );
    
}
export default Maincomponent;