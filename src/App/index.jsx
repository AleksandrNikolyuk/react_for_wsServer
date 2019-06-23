import React, { Component } from 'react';
// import axios from 'axios';
import logo from './logo.svg';
import styles from './styles.module.scss';
import socketOpen from 'socket.io-client';

class App extends Component {
  state = {
    country: '',
  };

  componentDidMount() {
    const socket = socketOpen('http://localhost:5000');
    
    socket.on('take country', (country) => {
      console.log(country);
      this.setState({ country: country });
    })
  }

  render() {
    const { country } = this.state;

    return (
      <div className={styles.App}>
        <header className={styles['App-header']}>
          <img src={logo} className={styles['App-logo']} alt="logo" />
          <p>
            { country }
          </p>
        </header>
      </div>
    );
  }
}

export default App;
