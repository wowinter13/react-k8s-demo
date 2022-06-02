import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const httpTransport = axios.create({
  baseURL: "https://api.sometestdomain.me/api/v1/",
});


export const App = () => {
  const [digits, setDigits] = useState(0);

  useEffect(() => {
    httpTransport.get('/digits')
      .then((res) => setDigits(res.data.digits))
      .catch(err => console.log(err));
  }, []);

  return <div className="App">
    <header className="App-header">
      <img
        src={logo}
        className="App-logo"
        alt="logo"
      />
      <a
        href="#"
        className="App-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {digits}
      </a>
    </header>
  </div>;
};

export default App;