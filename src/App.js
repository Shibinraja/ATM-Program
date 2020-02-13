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
    currentname : "",
    currentpassword : "",
    balance:""
  }

  
  login = (name,password) => {
    // console.log(name, password);
    axios.post("http://localhost:6060/login" , {name,password})
    .then(res =>{
      console.log(res);
      if(res.status === 200){
        console.log("Login successfull")
        this.setState({ view: "home", currentname:name , currentpassword:password})
        }
        else if (res.status === 403){
          console.log("Username password do not match")
        }
        else{
          console.log("Username does not exists")
        }
        
      })
  }

  moneydeposit =(amount)=>{
    axios.post("http://localhost:6060/Deposit ", {name:this.state.currentname,amount} )
    .then(res =>{
      console.log(res);
    })
    this.setState({view: "deposit"})
  }

  moneywithdraw = () => {
    this.setState({view: "withdraw"})
  }

  moneybalance = () => {
    
    axios.post("http://localhost:6060/Balance",{name:this.state.currentname})
    .then(res => {
      // console.log(res)
      this.setState({view: "Balance" , balance:res.data});
    })
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
      return <Bankmenu setdeposit = {this.moneydeposit} setwithdraw = {this.moneywithdraw} setbalance = {this.moneybalance} /> 
    }
    else if(this.state.view === "deposit"){
      return <Deposit depHome={this.dephome} setdeposit = {this.moneydeposit}/>
    }
    else if(this.state.view ==="withdraw"){
      return <Withdraw withHome={this.withhome}/>
    }
    else if(this.state.view === "Balance"){
      return <Balance balHome ={this.balhome} balance = {this.state.balance}/>
    }
  }

  }
  
  

export default App;
