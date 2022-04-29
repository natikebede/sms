import React from "react";
import { useState } from "react";
import {Row,Col, Card, CardHeader, CardBody,Collapse,Button, Container} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWallet ,faClose } from '@fortawesome/free-solid-svg-icons'

function Mywallet (props)
{   const [cardopen, setcardopen]=useState(true);

    const toggle_modal=()=>
    {
        setcardopen(!cardopen);
    }
    return (
        <div className="container-fluid bg-light">
            <Container>
            <Row className="">
                <Col  md={4} className="p-3 rounded">
                    <Card className="bg-white" >
                        <CardHeader className="bg-light ">
                            <p className="text-danger fw-bolder"> Include in total</p>
                        </CardHeader>
                        <CardBody className="container-body ">
                            <Row>
                            <Col md={2} className="">
                            <div className="">
                                <FontAwesomeIcon icon={faWallet}  className="text-light fa-3x" />
                            </div>
                          
                            </Col>
                            <Col md={7} onClick={toggle_modal} className="  p-0">
                            <p className="text-dark fw-bold   p-0"> CBE
                            <p className=" text-success fw-bold p-0">+$ 1000</p>
                            </p>
                           
                            
                            </Col>

                            </Row>
                          
                        </CardBody>

                    </Card>
                </Col>
                 <Col md={7} className=" p-3 rounded"> 
                <Collapse isOpen={cardopen}>
                 <Card toggle={toggle_modal}>
                            <CardHeader className=" text-danger fw-bold"  >
                              <Row>
                              <Col sm={5} className="ps-1 ">
                               <FontAwesomeIcon icon={faClose} onClick={toggle_modal}  className="text-secondary fa-1x" />
                               <span className="text-danger ps-4 ms-3 fw-bold">Wallet details</span>
                               
                               </Col>
                               <Col sm={7} className="">
                                   <div className="d-flex justify-content-end">
                                   <Button color="danger" className="me-3 ms-2 p-2 fw-bold" outline>Delete</Button>
                                    <Button color="success"className=" me-2 ms-2 p-2 fw-bold" outline>Edit</Button>
                                   </div>
                              
                               </Col>
                              </Row>
                              
                            </CardHeader>
                            <CardBody className="bg-white">
                                <Container className="">
                                    <Row> 
                                    
                                    <Col md={10} className="  mx-auto d-flex">
                                    <div className="">
                                         <FontAwesomeIcon icon={faWallet}  className="text-primary fa-3x" />
                                     </div>
                                     <div className="  px-3">
                                        <p className="mx-2 fw-bold"> Cbe </p>
                                        <p className="mx-2 fw-bold">  United state   </p>
                                     </div>
                                    </Col>
                                   
                                    </Row>
                               
                                
                                <hr/>
                                <Row> 
                                    
                                    
                                </Row>
                                <hr/>
                                <Row> 
                                    
                                </Row>
                                <hr/>
                                </Container>
                            </CardBody>


                        </Card>
                     </Collapse>
                      
                
                </Col>
            </Row>
            </Container>
           
        </div>
    );
}
export default Mywallet;