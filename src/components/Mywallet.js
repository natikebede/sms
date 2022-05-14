import React from "react";
import { useState } from "react";
import {Row,Col, Card, CardHeader, CardBody,Collapse,Button, Container, FormGroup, Label,Input, Modal,ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWallet ,faClose ,faUserFriends} from '@fortawesome/free-solid-svg-icons'
import Adjustment_modal from "./Adjustmodal";


function Mywallet (props)
{   
    const [isAccount,setAccount]=useState({
        Balance:"",
        Account:"CBE"

    });
    const [cardopen, setcardopen]=useState(true);
    const [ adjustopen, setadjust]=useState(false);
    const [ deleteModal,setdeletModal] =useState(false);
    const toggle_delete_modal=()=>
    {
        setdeletModal (!deleteModal);
    }
    const toggle_modal=()=>
    {
        setcardopen(!cardopen);
    }
    const toggel_adjustment =()=>
    {
        setadjust(!adjustopen);
    }
   function adjust_Account(props)
   {
      
       console.log(props);
    setAccount(values => ({...values,Balance: props.Balance,Account:props.Account}));

   }
   function delete_wallet ()
   {
       setAccount(values=>({ ...values,Balance:"",Account:""}));
       toggle_delete_modal();
   }
    
    return (
        <div className="container-fluid bg-light">
            <Container>
            <Row className="">
                <Col  md={5} className="p-3 rounded">
                    <Card className="bg-white" >
                        <CardHeader className="bg-light ">
                            <p className="text-danger fw-bolder"> Include in total</p>
                        </CardHeader>
                        <CardBody className="container-body ">
                            <Row>
                            <Col md={2} className="">
                            <div className="">
                                <FontAwesomeIcon icon={faWallet}  className="text-info fa-3x" />
                            </div>
                          
                            </Col>
                            <Col md={7} onClick={toggle_modal} className="  p-0">
                            <h6 className="text-secondary  p-0 mx-3"> {isAccount.Account}
                            <p className=" text-success fw-bold p-0 ">+$ {isAccount.Balance}</p>
                            </h6>
                           
                            
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
                               <h6 className="text-danger ps-4 ms-3 fw-bold">Wallet details</h6>
                               
                               </Col>
                               <Col sm={7} className="">
                                   <div className="d-flex justify-content-end">
                                   <Button color="danger" className="me-3 ms-2 p-2 fw-bold" onClick={toggle_delete_modal} outline>Delete</Button>
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
                                         <FontAwesomeIcon icon={faWallet}  className="text-info fa-3x" />
                                     </div>
                                     <div className="  px-3">
                                        <h6 className="mx-2 text-secondary"> {isAccount.Account} </h6>
                                        <p className="mx-2   text-secondary" >  United state   </p>
                                     </div>
                                    </Col>
                                   
                                    </Row>
                               
                                
                                <hr/>
                                <Row> 
                                    <Col md={10} className="  mx-auto d-flex">
                                        <p className="text-danger px-2 fw-bold">
                                        Users  
                                        </p>
                                    </Col>
                                    
                                    <Col md={10} className="  mx-auto d-flex">
                                    <div className="">
                                         <FontAwesomeIcon icon={faUserFriends}  className="text-info fa-3x" />
                                     </div>
                                     <div className="  px-3">
                                        <h6 className="mx-2 text-secondary"> Natnael Kebede </h6>
                                        <p className="mx-2   text-secondary" >  Natikebede119@gmail.com   </p>
                                     </div>
                                    </Col>
                                   
                                    </Row>
                                <hr/>
                                <Row> 

                                <Col md={10} className="ps-4  mx-auto d-flex">
                                  <FormGroup check>
                                        <Input type="checkbox"className="p-2" />
                                        {' '}
                                        <Label check>
                                        <h5 className="ms-5  text-secondary"> Exclude from Total </h5>
                                        <p className="ms-5  text-secondary"> Ignore this wallet and its balance in the "Total" mode.</p>
                                        </Label>
                                     </FormGroup>
                                    </Col>
                                    
                                    <Col md={10} className="ps-4  mx-auto d-flex">
                                  <FormGroup check>
                                        <Input type="checkbox"className="p-2" />
                                        {' '}
                                        <Label check>
                                        <h5 className="ms-5  text-secondary"> Archived </h5>
                                        <p className="ms-5  text-secondary"> Freeze this wallet and stop generating bills & recurring transactions.</p>
                                        </Label>
                                     </FormGroup>
                                    </Col>


                                    
                                </Row>
                                <hr/>
                                <div className=" w-100 d-flex justify-content-center">
                                    <Button onClick={toggel_adjustment}  color="success"className=" w-100 fw-bold border-0" outline>ADJUST BALANCE</Button>
                                </div>
                                
                                </Container>
                            </CardBody>


                        </Card>
                     </Collapse>
                      
                
                </Col>
            </Row>
            </Container>
            <Adjustment_modal open={adjustopen} toggles={toggel_adjustment} Account={isAccount} adjust={adjust_Account}/>

{/* 
 Modal for deleting wallet 


*/}
            <Modal isOpen={deleteModal} fade={false} toggle={toggle_delete_modal}>
                <ModalHeader className="border-0">
                    <h6 className="">Do you want to Delete Wallet your  {isAccount.Account} ?</h6>
                </ModalHeader>
                <ModalBody>
                    <p className="text-secondary fw-bold"> 
                    You will also delete all of its transactions, budgets, events, bills and this action cannot be undone.
                    </p>

                </ModalBody>
                <ModalFooter>
                <div className="d-flex justify-content-end">
                        <Button color="success" className=" mx-2 " onClick={toggle_delete_modal}> Cancel</Button>
                        <Button color="danger " className="ms-3 "onClick={delete_wallet}> Delete</Button>
                  </div>

                </ModalFooter>

            </Modal>


        </div>


   
    );
}
export default Mywallet;