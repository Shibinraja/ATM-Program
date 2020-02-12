import React from 'react';
import './App.css';
import Login from './Login';
import Bankmenu from './Bankmenu';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import Balance from './Balance';
import axios from 'axios';

class App extends React.Component {
  state = {
    view : "login",
  }

  
  login = (email,password) => {
    console.log(email, password);
    this.setState({ view: "home"})
    axios.post(`http://localhost:6060/login` , {email , password})
      .then(res =>{
        console.log(res);
        if(res.data.code ==200){
          console.log("Login successfull")
        }
        else if (res.data.code ==204){
          console.log("Username password do not match")
        }
        else{
          console.log("Username does not exists")
        }
        
      })
  }

  moneydeposit =()=>{
    this.setState({view: "deposit"})
  }

  moneywithdraw = () => {
    this.setState({view: "withdraw"})
  }

  moneybalance = () => {
    this.setState({view: "Balance"})
  }

  dephome = () => {
    this.setState({view: "home"})
  }
  
  withhome = () => {
    this.setState({view: "home"})
  }

  balhome = () =>{
    this.setState({view: "home"})
  }


  render() {
    if(this.state.view === "login"){
      return <Login setLogin = {this.login}/>
    }
    else if(this.state.view === "home"){
      return <Bankmenu setdeposit = {this.moneydeposit} setwithdraw = {this.moneywithdraw} setbalance = {this.moneybalance}/> 
    }
    else if(this.state.view === "deposit"){
      return <Deposit depHome={this.dephome}/>
    }
    else if(this.state.view ==="withdraw"){
      return <Withdraw withHome={this.withhome}/>
    }
    else if(this.state.view === "Balance"){
      return <Balance balHome ={this.balhome}/>
    }
  }

  }
  
  

export default App;
