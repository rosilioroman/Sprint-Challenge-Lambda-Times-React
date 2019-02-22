import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';

class App extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      user: ""
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  submitForm = e => {
    e.preventDefault();
    localStorage.setItem('User', this.state.user);
    window.location.reload();
  }

  handleChanges = e => {
    this.setState({ user: e.target.value })
  }

  logout = e => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  }


  render() {
    return (
      <div className="App">
        <TopBar 
          toggleModal={this.toggle} 
          modal={this.state.modal} 
          value={this.state.user} 
          submitHandler={this.submitForm}
          handleChanges={this.handleChanges}
          logoutHandler={this.logout}
        />
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
