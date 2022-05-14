import { Button,Input,Container,Col,Row,FormGroup,Label,Form} from 'reactstrap';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import './App.css';
import { Switch,Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Maincomponent from './components/MainComponent';
import Login from './components/login';

function App() {
 

  return (
    <>
   <Switch>
   <Route path="/Main" exact  component={Maincomponent}/>
   <Route path="/Login"  component={Login}/>
    <Redirect to="/Login"/>
    
   </Switch>
 
    </>
  );
   
    
}

export default App;
