import React from 'react';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SignUpForm = () =>{
    return (
        <>
        <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="inputFirstName">First Name</Label>
              <Input type="text" class="form-control" id="inputFirstName" placeholder="First Name"></Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="inputLastName">Last Name</Label>
              <Input type="text" class="form-control" id="inputLastName" placeholder="Last Name"></Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="inputEmail4">Email</Label>
              <Input type="email" class="form-control" id="inputEmail" placeholder="exampale@email.com"></Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="inputPassword4">Password</Label>
              <Input type="password" class="form-control" id="inputPassword"></Input>
              </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="inputAddress">Address</Label>
          <Input type="text" class="form-control" id="inputAddress"></Input>
        </FormGroup>
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label for="inputCountry">Country</Label>
              <Input type="text" className="form-control" id="inputCountry"></Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="inputState">State</Label>
              <Input type="text" className="form-control" id="inputState"></Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="inputCity">City</Label>
              <Input type="text" className="form-control" id="inputCity"></Input>
            </FormGroup>
          </Col>  
          <Col md={3}>
            <FormGroup>
              <Label for="inputZip">Zip</Label>
              <Input type="text" className="form-control" id="inputZip"></Input>
            </FormGroup>
          </Col>  
        </Row>
        <FormGroup className="bttn">
          <Button type="submit" className="btn btn-primary">Sign Up</Button>
          <Button type="reset" className="btn btn-primary">Cancel</Button>
        </FormGroup> 
      </Form>
    </>

    )
}

export default SignUpForm;