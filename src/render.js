import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, updateNewPostText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (State) => {
    root.render(
        <React.StrictMode>
            <App appState={State} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>
    );
}
reportWebVitals();
