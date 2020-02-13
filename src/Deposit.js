import React, { Component } from 'react';
import {Button , Form , Card} from 'react-bootstrap';

class Deposit extends Component {

    state = {
        amount:0
    }
    
    home = () => {
        this.props.depHome()
    }

    values = () => {
        this.props.setdeposit(this.state.amount)
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

                    <Card border="secondary" style={{width: "30rem"}}>
                    <Card.Header className="font-weight-bold">Bank</Card.Header>
                    <Card.Body>
                        <Card.Title style= {{fontSize:"5x"}} className="font-weight-bold">Deposit</Card.Title>  
                        <br></br>
                        <Card.Text >Amount</Card.Text> 
                        <Form>
                            <Form.Control  onChange={(e)=>{this.setState({amount:e.target.value})}} value ={this.state.amount} type="number" placeholder="Enter the Amount in Rs"/>
                            <br></br>
                            <Button onClick={this.values}  variant="outline-primary">Enter</Button>
                            <br></br><br></br>
                            <Button onClick={this.home} variant="dark">Home</Button>
                        </Form>
                    </Card.Body>
                    </Card>
    
            </div>
        )
    }
}

export default Deposit
