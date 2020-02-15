import React, { Component } from 'react';
import {Button , Card} from 'react-bootstrap';


class Bankmenu extends Component {


    deposit = () => {
        this.props.setdeposit()
    }

    withdraw = () => {
        this.props.setwithdraw()
    }

    balance = () => {
        this.props.setbalance()

    }

    styles = () =>{
            return{
                padding:"500px",
                paddingTop:"75px",
                textAlign:"center",
            }

    }


    render() {
        return (
            <div style ={this.styles()} >

<                   Card border="secondary" style={{width: "30rem"}}>
                    <Card.Header className="font-weight-bold">Bank</Card.Header>
                    <br></br>
                    <p style = {{textAlign:"left"}}>Hello,<b>{this.props.name}</b></p>
                    <p style = {{textAlign:"right" , marginRight:"5px" , marginTop:"-40px"}}>Time Left:<b>{this.props.time}</b></p>

                    <Card.Body>
                        <Card.Title style= {{fontSize:"25px", textAlign:"center"}} className="font-weight-bold">Bank Menu</Card.Title>
                        <br></br>
                        <Button onClick ={this.balance} variant = "info" size="lg" active>
                            Check Balance
                        </Button>
                        <br></br><br></br>
                      
                        <Button onClick ={this.deposit} variant = "info" size="lg" active>
                            Deposit
                        </Button>

                        <br></br><br></br>
                        <Button onClick ={this.withdraw} variant = "info" size="lg" active>
                            Withdraw
                        </Button>
                        <br></br><br></br><br></br>
                        <Button onClick = {()=>{this.props.Login()}} style={{float: 'left'}} variant="danger">Sign Out</Button>
                        
                        <Button style={{float: 'right'}} variant="warning">Help</Button>

                    </Card.Body>
                    </Card>


            </div>
                
                
    )
}

}

export default Bankmenu;

