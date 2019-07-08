import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Welcome from './components/Welcome';
// import Comment from './components/Comment';
// import Clock from './components/Clock';
// import Toggle from './components/Toggle'
// import LoginControl from './components/LoginControl'
import Greeting from './components/Greeting';
import Login from './components/Login';
import Logout from './components/Logout';



class App extends Component {
  constructor() {
    super()
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <Logout onClick={this.handleLogoutClick} />;
    } else {
      button = <Login onClick={this.handleLoginClick} />;
    }

    return (
      <div>
      <div className="App">
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
        {/* <Welcome name='Kenneth' />
        <Comment 
          date={comment.date}
          text={comment.text}
          author={comment.author}
        />
        <Clock />
        <Toggle /> */}
      </div>
    </div>
    )
  }
}


export default App;
