import React, { Component } from 'react';
import {Button , Form } from 'react-bootstrap';

class Login extends Component {

    state = {
        name:"",
        password:"",
        time:60
    }

    logininfo=(e)=>{
        e.preventDefault();
        this.props.setLogin(this.state.name, this.state.password , this.state.time)
        
    };

    userChange=(event)=>{
        this.setState({name:event.target.value});
    };

    passChange=(event)=>{
        this.setState({password:event.target.value})
    };

    render() {
        return (
            <Form  onSubmit={this.logininfo} className="login-form">
      
                <h1><span className="font-weight-bold text-center">ATM-MACHINE</span></h1>
                <h2 className="text-center">Login</h2>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={this.userChange} value={this.state.name} type = "text" placeholder="UserName"/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={this.passChange} value={this.state.password} type = "password" placeholder="Password"/>
                </Form.Group>
                
                <Button type="submit" className=" btn-lg btn-block">Login</Button>

            </Form>
                
            
        )
    }
}

export default Login;
