import React, { Component } from "react";
import { Button, Container,Col,Row, FormGroup, Input ,Form} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fa} from '@fortawesome/free-solid-svg-icons'
class Login extends Component
{
  render()
  {
      return (
          <>
          <div className="">
              <Container fluid className="bg-danger my-0 p-2">
            <h6 className="text-light fw-bold display-4">CER</h6>
             <img src="Assets/logo3.png" className="rounded mx-auto d-flex my-0" width="100px" height="100px"/> 

          </Container> 
          </div>
        
          <div className=" w-50 mx-auto bg-danger py-2 rounded-bottom login-container "> 

          <Container className="bg-light rounded-bottom   ">
            <div className="mx-auto   ">
            <h2 className=" w-100 text-center fw-bold p-2 ">Log In</h2>
              <Row className="">
                <Col sm={6} className="">
                  
                <h6 className="text-secondary text-center"> Using social networking accounts</h6>
                    <div className="mx-auto  ">
                      <Button className="w-100 mx-1 p-2 my-1 fw-bold" outline color="danger">
                      <i className="fa fa-google"></i> Connect with Google</Button>
                      <Button className="w-100 mx-1 p-2 my-1 fw-bold"  outline color="primary">
                      <i className="fa fa-facebook"></i> Connect with Facebook</Button>
                      <Button className="w-100 mx-1  p-2 my-1 fw-bold"  outline color="dark">
                      <i className="fa fa-apple"></i> Sign in with Apple</Button>
                    </div>
                  
                      </Col>
                  
                <Col sm={6} className="border-start p-3">
                <h6 className="text-secondary text-center">Using CER account</h6>
                    <div className="mx-auto   ">
                      <Form>
                        <FormGroup>
                          <Input type="email" name="Email" placeholder="Email" className="p-2 mx-2 bg-light"/>
                        </FormGroup>
                        <FormGroup>
                          <Input type="password" name="Password" placeholder="password"   className="p-2 mx-2 bg-light"/>
                          <h6 className="text-end w-100"><Button className="text-danger register-text border-0 fw-bold" color="" >Forgot password ?</Button></h6>
                        </FormGroup>
                        <Button color="success" type="submit" className="w-100 fw-bold ">Login</Button>
                      </Form>
                    </div>
                    <h6 className="mt-2">Don't Have an Account ? <span className=" register-text">Register</span></h6>
                  
                </Col>
              </Row>
            </div>
             

          </Container>
          </div>
         
          </>
      );
  }
}
export default Login;