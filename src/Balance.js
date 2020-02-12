import React, { Component } from 'react';
import {Button , Form , Card} from 'react-bootstrap';

class Balance extends Component {

    
    state = {
        home:0
   }

   home = () => {
       this.setState({home:1}) 
       this.props.balHome(this.state.home)
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
                        <Card.Title style= {{fontSize:"5x"}} className="font-weight-bold">Balance Check</Card.Title>  
                        <br></br>
                        <Card.Text >Your Balance Amount is : Amount</Card.Text> 
                            <br></br><br></br>
                            <Button onClick={this.home} balHome = {this.props.balHome} variant="dark">Home</Button>
                    </Card.Body>
                    </Card>
            </div>
        )
    }
}

export default Balance
