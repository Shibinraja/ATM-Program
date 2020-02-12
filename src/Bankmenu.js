import React, { Component } from 'react';
import {Button , Form , Card} from 'react-bootstrap';
import Deposit from './Deposit';

class Bankmenu extends Component {

    state = {
        deposit:false,
        withdraw:false,
        balance:false,
    }

    deposit = () => {

        this.setState({deposit: true})
        this.props.setdeposit(this.state.deposit)
    }

    withdraw = () => {
        this.setState({withdraw: true})
        this.props.setwithdraw(this.state.withdraw)
    }

    balance = () => {
        this.setState({withdraw: true})
        this.props.setbalance(this.state.balance)
    }

    styles = () =>{
            return{
                padding:"150px",
                paddingTop:"75px",
                textAlign:"center",


            }

    }


    render() {
        return (
            <div style ={this.styles()} >

<                   Card border="secondary" style={{width: "30rem"}}>
                    <Card.Header className="font-weight-bold">Bank</Card.Header>
                    <Card.Body>
                        <Card.Title style= {{fontSize:"25px"}} className="font-weight-bold">Bank Menu</Card.Title>
                        <br></br>
                        <Button onClick ={this.balance} setBalance={this.props.setbalance} variant = "info" size="lg" active>
                            Check Balance
                        </Button>
                        <br></br><br></br>
                      
                        <Button onClick ={this.deposit} setDeposit={this.props.setdeposit} variant = "info" size="lg" active>
                            Deposit
                        </Button>
                        
                        
                        
                        <br></br><br></br>
                        <Button onClick ={this.withdraw} setWithdraw = {this.props.setwithdraw} variant = "info" size="lg" active>
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

