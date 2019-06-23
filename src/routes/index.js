import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterList from './router-list';

/* components */
import Main from '../pages/main';
import Login from '../pages/login';

class RouterApp extends Component {

  constructor(props){
    super();
    this.state = {
      auth: true
    }
  }
  componentDidMount(){
  }

  signIn = (e)=>{
    e.preventDefault();
    this.setState({
      auth: true
    })
  }
  signOut = (e)=>{
    e.preventDefault();
    this.setState({
      auth: false
    })
  }
  render(){
    return(
      <Router>
        {
          this.state.auth ?
          <Main
            signOut = { this.signOut }
          >
            <RouterList user={ this.state.user }/>
          </Main>
          : <Login
              signIn = { this.signIn }
            />
        }
      </Router>
    )
  }
}
export default RouterApp;