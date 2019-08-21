import React, { Component } from 'react';

class Header extends Component {
  render() {
    const header = {
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#ccc',
      fontSize: '30px',
      marginBottom: '20px'
    }

    const headerRight = {
      float: 'right'
    }

    return (
      <header style={header}> 
        Good luck on Sidekicker Coding Challenge 
        <button type="button" style={headerRight} className="btn btn-primary" data-toggle="modal" data-target="#createJob">
          Create a job
        </button>
      </header>     
    )
  }
}

export default Header