import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const httpTransport = axios.create({
  baseURL: "https://api.sometestdomain.me/api/v1/",
});

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      ping: "Waiting"
    }
  }

  componentDidMount() {
    httpTransport.get('/digits')
      .then((res, err) => {
        if(res.status === 200) {
          this.setState({
            digits: res.data.digits
          })
        }
        else {
          console.log(err);
        }
      })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.digits}
          </a>
        </header>
      </div>
    );
  }
}

export default App;