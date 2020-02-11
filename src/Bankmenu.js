import React, { Component } from 'react';
import {Button , Form , Card} from 'react-bootstrap';
import {Link, BrowserRouter, Route , withRouter} from 'react-router-dom';
import Deposit from './Deposit';

class Bankmenu extends Component {

    styles = () =>{
            return{
                padding:"150px",
                paddingTop:"75px",
                textAlign:"center",


            }

    }

    handleClick = (e) =>{
        
        e.preventDefault();
        window.location = <Deposit/>;

    }

    render() {
        return (
            <div style ={this.styles()} >

<                   Card border="secondary" style={{width: "30rem"}}>
                    <Card.Header className="font-weight-bold">Bank</Card.Header>
                    <Card.Body>
                        <Card.Title style= {{fontSize:"25px"}} className="font-weight-bold">Bank Menu</Card.Title>
                        <br></br>
                        <Button variant = "info" size="lg" active>
                            Check Balance
                        </Button>
                        <br></br><br></br>
                      
                        
                        <Button onClick= {this.handleClick} variant = "info" size="lg" active>
                            Deposit
                        </Button>
                        
                        <br></br><br></br>
                        <Button variant = "info" size="lg" active>
                            Withdraw
                        </Button>
                        <br></br><br></br><br></br>
                        <Button style={{float: 'left'}} variant="danger">Sign Out</Button>
                        
                        <Button style={{float: 'right'}} variant="warning">Help</Button>

                    </Card.Body>
                    </Card>


            </div>
                
                
    )
}

}

export default Bankmenu;

