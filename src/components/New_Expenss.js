import {React} from "react";
import {Card,CardBody,CardHeader,Col,Row,Form,FormGroup, Label,} from "reactstrap"
function NewExpenss()
{
    return (
        <>
        <div className=" mt-2 container m">
            <Row>
                <Col >
                    <Card>
                        <CardHeader className="w-100 text center">
                            <p className="w-100 text-center fw-bolder  text-danger"> Enter your new Expense </p>
                        </CardHeader>

                        <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label htmlFor="for">Ex</Label>
                                    </FormGroup>

                                </Form>

                        </CardBody>
                    </Card>
                
                </Col>

            </Row>
        </div>
        </>
    );
}
export default NewExpenss;