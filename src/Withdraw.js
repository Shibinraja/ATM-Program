import React, { Component } from 'react';
import {Button , Form , Card} from 'react-bootstrap';

class Deposit extends Component {

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
                        <Card.Title style= {{fontSize:"5x"}} className="font-weight-bold">Withdraw</Card.Title>  
                        <br></br>
                        <Card.Text >Amount</Card.Text> 
                        <Form>
                            <Form.Control type="number" placeholder="Enter the Amount"/>
                            <br></br>
                            <Button variant="outline-primary">Enter</Button>
                            <br></br><br></br>
                            <Button variant="dark">Home</Button>
                        </Form>
                    </Card.Body>
                    </Card>
            </div>
        )
    }
}

export default Deposit
