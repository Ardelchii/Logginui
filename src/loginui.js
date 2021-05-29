import React, {Component, Fragment}from 'react';
import{Container, Row, Col, Form, Button} from "react-bootstrap";
import"./style.css";
import LoginImg from '../src/image/home.png'
class LoginForm extends Component{
    render(){
        return(
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={6} sm={12} className="p-5 m-auto">
                            <div className="LoginBox p-5">
                            <img className="LoginImg" src={LoginImg} alt =""/>
                                          <Form className="mt-3">
                            <Form.Group>
                              <Form.Control type="email" placeholder="Enter email" />
                              
                            </Form.Group>
                          
                            <Form.Group>
                              <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="float-left">
                              <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <a className="ml-3" href="#">Forgot password
</a>
                            <Button className="btn-block" variant="success" type="submit">
                              Submit
                            </Button>
                          </Form>

                            </div>
                    </Col>
                </Row>
                </Container>
            </Fragment>
            );
        }
    }

    export default LoginForm;