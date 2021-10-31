import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Room from './components/Room';
import reportWebVitals from './reportWebVitals';

const CHANNELS = ['channel 1', 'channel 2', 'channel 3', 'channel 4'];

ReactDOM.render(
  <React.StrictMode>
    {CHANNELS.map((channel) => (
      <Room key={channel} channel={channel} />
    ))}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
