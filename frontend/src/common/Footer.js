import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const footer = {
      marginTop: '20px',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#ccc',
      fontSize: '10px'
    }

    return (
      <footer style={footer}> 
        author: Xin Gao 08/08/2019
        email: xin.gao.au@outlook.com
      </footer>     
    )
  }
}

export default Footer