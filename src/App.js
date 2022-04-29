import { Button,Input,Container,Col,Row,FormGroup,Label,Form} from 'reactstrap';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import './App.css';
import { Switch,Route } from 'react-router-dom';

import NewExpenss from './components/New_Expenss';
import ExpenseReport from './components/Expense_report';
import { Redirect } from 'react-router-dom';
import Mywallet from './components/Mywallet';

function pull_request (values)
{
// list= values
 

}
function App() {
  const [letter,setletter] =useState("");
  const [count ,setcount]=useState(0);
  const handelchange=(event)=>
  {
  const   textbox= event.target;

    setletter(textbox.value);
    
  }
  useEffect(()=>{
    
    setcount(letter.length);
  },[letter]);

  return (
    <>
    <Header/>
    <Switch>
      <Route path="/newExpenss" exact component={NewExpenss}/>
      <Route path="/Report" component={ExpenseReport}/> 
      <Route path="/Mywallet" component={Mywallet}/>
      <Redirect to="/newExpenss"/>
    

    </Switch>
    {/* <div className="container  mt-auto bg-light  rounded">
      <div className="row">
        <div className='col'>
          <Form className="mt-3" onSubmit={(values) => pull_request(values)}  >
            <FormGroup row>
            <Label md={2} className="text-dark">movie name:</Label>
            <Col md={10}>
             <input type="text" name="movie"  maxlength="160"className='borders w-100'  onChange={handelchange}/>
             <p className='w-100 text-end'>{count}/160</p>

          </Col>
          </FormGroup>
          <FormGroup>
            <Col md={12}>
              <Button  color='primary'con onClick={()=> pull_request(letter)}> search</Button>
               </Col>
          </FormGroup>
          </Form>

        </div>

      </div>
    </div> */}
    </>
  );
   
    
}

export default App;
