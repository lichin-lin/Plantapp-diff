import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const viewport = document.getElementById('viewport');
const app = document.createElement('div');
app.id = 'root';
if (viewport) viewport.prepend(app);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
