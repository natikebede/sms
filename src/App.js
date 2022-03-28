import { Button,Input,Container,Col,Row,FormGroup,Label,Form} from 'reactstrap';
import sendMessage from './sendSMS';
import './App.css';
function send ()
{
  sendMessage();

}
function App() {

  return (
    <div className="container  mt-auto bg-dark text-light rounded">
      <div className="row">
        <div className='col'>
          <Form className="mt-3">
            <FormGroup row>
            <Label md={2} className="text-light">phone number</Label>
            <Col md={10}>
          <Input type='text' name="number" className='w-50'/>
          </Col>
          </FormGroup>
          <FormGroup row>
            <Label md={2} className="text-light">Message</Label>
            <Col md={10}>
          <Input type='textarea'rows='5' name="text area" className='w-50'/>
          </Col>
          <Col> 
          <Button className='btn btn-primary' onClick={send} color='primary'> send</Button>
          </Col>
          </FormGroup>

          </Form>

        </div>

      </div>

      
    </div>
  );
}

export default App;
