import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import React from "react"

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/


class App extends React.Component {
  constructor(){
    super()
    this.state = {
        isloggedin: false
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleSignout = this.handleSignout.bind(this)
  }

  handleLogin(){
      this.setState({isloggedin: true})
  }
  handleSignout(){
      this.setState({isloggedin:false})
  }
  render() {
    return (
      <div>
        <Header />
        
        <div>
        {this.state.isloggedin? 
            <div> 
                <MainContent />
                <button class="button logout-button" onClick ={this.handleSignout}>Sign out</button> </div> : 
            <div>
                <h1>You're not logged in</h1>
                <button class="button login-button" onClick ={this.handleLogin}>Log in</button>
            </div>
            } 
        </div>
    
        <Footer />
      </div>
    );
  }
}

export default App;
