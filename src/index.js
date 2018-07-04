import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const target = document.getElementsByClassName('header')[0];
const app = document.createElement('div');
app.id = 'root';
if (target) target.prepend(app);

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
