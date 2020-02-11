import React, { Component } from 'react';
import {Button , Form } from 'react-bootstrap';

class Login extends Component {
    render() {
        return (
            <Form className="login-form">
      
                <h1><span className="font-weight-bold text-center">ATM-MACHINE</span></h1>
                <h2 className="text-center">Login</h2>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type = "text" placeholder="UserName"/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type = "password" placeholder="Password"/>
                </Form.Group>
                
                <Button className=" btn-lg btn-block">Login</Button>

            </Form>
                
            
        )
    }
}

export default Login;
