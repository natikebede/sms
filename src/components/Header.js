
import React from "react";
import { Navbar,NavbarBrand,NavItem,Nav,Collapse,NavbarToggler,Button, Modal, ModalFooter, ModalHeader, ModalBody, Container, Form, FormGroup, Input,Col,Row } from "reactstrap";
import {NavLink} from "react-router-dom";
import {useState} from "react";
function Header (props)
{
    const [navopen, setnavopen]=useState(false);
    const [wallet_modal,set_wallet_modal]=useState(false);
    const toggle_modal=()=>
    {
        set_wallet_modal(!wallet_modal);
    }
    return(
        <>
        <div>
          <Navbar expand="md" dark color="danger">
              <div className="container">
                  <NavbarToggler onClick={()=>setnavopen(!navopen)}/>
                  <NavbarBrand className="mt-4">
                     <span className="text-light fw-bolder p-4">CER</span> 
                  </NavbarBrand>
                  <Collapse isOpen={navopen} navbar>
                  <Nav navbar className="  fw-bolder mt-1  w-50 ml-auto">
                            <NavItem>
                                <NavLink className="nav-link "  to='/Mywallet'> Mywallet</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link "  to='/newExpenss'>   new Expenss</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/Report'> Expenss report</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'> My Account</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'> Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                  <Nav navbar className=" justify-content-end w-50">
                        <Button onClick={()=>{
                            set_wallet_modal(true);
                        }} className="bg-success fw-bold text-light p-2"> Add wallet  </Button>
                  </Nav>
                  
                  </Collapse>

              </div>

          </Navbar>
              
          

        </div>



        <Modal className="bg-light rounded" isOpen={wallet_modal} size="lg" fade={false} toggle={toggle_modal}> 
            <ModalHeader className="bg-danger text-light" toggle={toggle_modal}>
                <p> Add your new wallet</p>
            </ModalHeader>
            <ModalBody>
                <Container>
                    <Row>
                        <Col>
                        <Form>
                            <FormGroup>
                                <Row> 
                                    <Col sm={4}>
                                        <Input type="select" >
                                            <option> open</option>
                                            <option>closed </option>
                                        </Input>
                                    </Col>
                                    <Col sm={8}>
                                        <Container>
                                            <p className="fw-bolder text-danger"> Wallet name</p>
                                            <Input type="text" className="w-100 " placeholder="your wallet name ?" name="Wallet_Name"/>
                                        </Container>
                                    </Col>
                                </Row>
                            </FormGroup>


                            <FormGroup>
                                <Row> 
                                    <Col sm={4}>
                                        <Input type="select" >
                                            <option> currency</option>
                                            <option>closed </option>
                                        </Input>
                                    </Col>
                                    <Col sm={8}>
                                        <Container>
                                            <p className="fw-bolder text-danger"> Initial Amont</p>
                                            <Input type="text" className="w-100 " placeholder="Amount" name="Amount"/>
                                        </Container>
                                    </Col>
                                </Row>
                            </FormGroup>

                            <Row className=" d-flex align-content-end">
                                
                              
                                <Button className="bg-success text-light  fw-bold"> Save</Button>
                                
                              
                               
                            </Row>
                        </Form>
                        </Col>
                    </Row>
                </Container>
            </ModalBody>
            <ModalFooter>
    
            </ModalFooter>
        </Modal>
        </>
    ); 
}

export  default  Header;