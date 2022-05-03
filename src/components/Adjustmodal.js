import React from "react";
import { useState } from "react";
import {Container,Col,Row,Modal,ModalHeader,Button,ModalBody, FormGroup, Label, ModalFooter, Input,InputGroup} from "reactstrap";
function Adjustment_modal (props)
{

    const [inputs, setInputs] = useState(props.Account);
    const handelchange =(event)=>
    {
        const Name=event.target.name;
        const value=event.target.value;
        setInputs(values=>({...values,[Name]:value}));

    }
    function donehandler()
        {
            props.adjust(inputs);
           
            props.toggles();
        }
    return(<>

    <Container>
        <Row>
        <Col sm={12}>
            <Modal  size="md" isOpen={props.open} toggle={props.toggles} fade={false}>
                <ModalHeader className="border-0">
                    <h6 className="text-secondary"> Adjust Balance </h6>
                </ModalHeader>
              <ModalBody>
                    <FormGroup className=" px-4">
                       
                        <Input type="select" name="Account" value={inputs.Account}  className="w-100 p-3" onChange={handelchange} >
                            <option value="CBE" className="fw-bold text-secondary">
                                    CBE
                            </option>
                            <option value ="Dashin" className="fw-bold text-secondary">
                                    Dashin
                            </option>
                            <option value="Awash" className="fw-bold text-secondary" >
                                    Awash
                            </option>
                        
                        </Input>
                      
                        
                     

                    </FormGroup>
                    <FormGroup className=" px-4 ">
                        <div className="border rounded p-1">
                        <h6 className="text-secondary">Enter current balance of this wallet</h6>
                        <InputGroup>
                            <Button color="success" className="fw-bolder ">
                                $
                            </Button>
                            <Input type="number" name="Balance" onChange={handelchange} value={inputs.Balance} className="W-100 text-success border-0 fw-bolder p-3"/>
                         </InputGroup>
                    
                        </div>
                   
                      
                    </FormGroup>
              </ModalBody>
              <ModalFooter>
                  <div className="d-flex justify-content-end">
                        <Button color="danger mx-2 " onClick={props.toggles}> Cancel</Button>
                        <Button color="success ms-3 "onClick={donehandler}> Done</Button>
                  </div>
              </ModalFooter>
            </Modal>
        </Col>

        </Row>
    </Container>
    </>);
}
export default Adjustment_modal