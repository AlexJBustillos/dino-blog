import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const post = {
  title: "Dinosaurs are awesome",
  author: "Stealthy Stegosaurus",
  body: "Check out this body property!",
  comments: ["First!", "Great Post", "Hire this author now"]
};
// const newComments = post.comments.forEach(element => {
//   return element
// })

ReactDOM.render(
  <React.StrictMode>
    <App post={post}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
