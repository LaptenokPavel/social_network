import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type posts = {
    id: number
    message: string
    likes: number
};

export type dialogs = {
    id:number
    name: string

};

export type messagesData = {
    id:number
    message: string
};


let posts = [
    {id: 1, message: "Hi, How are you?", likes: 15},
    {id: 2, message: "It's my first post!", likes: 20},
];

let dialogs = [
    {id: 1, name: "Pasha"},
    {id: 2, name: "Dimych"},
    {id: 3, name: "Victor"},
    {id: 4, name: "Valera"},
    {id: 5, name: "Tanja"},
    {id: 6, name: "Luba"},

];

let messagesData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your It-incubator?"},
    {id: 3, message: "Yo"},
    {id: 4, message: "Yo"},
    {id: 5, message: "Yo"},
];

ReactDOM.render(

    <App value={posts} valueDialogs={dialogs} valueMessages={messagesData}/>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
