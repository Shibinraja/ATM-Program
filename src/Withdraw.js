import React, { Component } from 'react';
import {Button , Form , Card} from 'react-bootstrap';

class Deposit extends Component {

    state = {
        cash:0
   }

   home = () => {
       this.props.withHome()
   }

   values = () => {
    this.props.moneywithdraw(this.state.cash)
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

                    <Card border="secondary" style={{width: "30rem"}}>
                    <Card.Header className="font-weight-bold">Bank</Card.Header>
                    <Card.Body>
                        <Card.Title style= {{fontSize:"5x"}} className="font-weight-bold">Withdraw</Card.Title>  
                        <br></br>
                        <Card.Text >Amount</Card.Text> 
                        <Form>
                            <Form.Control onChange = {(e)=>{this.setState({cash:e.target.value})}} value={this.state.cash} type="number" placeholder="Enter the Amount"/>
                            <br></br>
                            <Button onClick={this.values} variant="outline-primary">Enter</Button>
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
