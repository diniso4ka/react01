import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


export let dialogsData = [
  { id: 1, name: 'Denisochka' },
  { id: 2, name: 'Savajan' },
  { id: 3, name: 'Lena' },
  { id: 4, name: 'Masha' },
  { id: 5, name: 'Kirill' },
]


export let messagesData = [
  { id: 1, message: 'Hi, im гуль' },
  { id: 2, message: 'Hi, im 2' },
  { id: 3, message: 'ded insaid' },
  { id: 4, message: 'oh yeah' },

]

export let postsData = [
  { id: 1, message: 'depressiia', likesCount: 12 },
  { id: 2, message: 'tilt', likesCount: 15 },
  { id: 3, message: 'dsadw', likesCount: 1215 },
  { id: 4, message: 'tilgawergaewrgt', likesCount: 35 },
]






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






