//Grabbing all the files
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Renders the app to the DOM
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
