import React, { Component } from 'react';
import {Button , Card} from 'react-bootstrap';

class Balance extends Component {


   home = () => {
       this.props.balHome()
    
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
                        <Card.Title style= {{fontSize:"5x"}} className="font-weight-bold">Balance Check</Card.Title>  
                        <br></br>
                        <p><strong>Balance Amount : {this.props.balance}</strong></p>
                            <br></br><br></br>
                            <Button onClick={this.home} variant="dark">Home</Button>
                    </Card.Body>
                    </Card>
            </div>
        )
    }
}

export default Balance
