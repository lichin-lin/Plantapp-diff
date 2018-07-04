import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { injectGlobal } from 'styled-components';
import registerServiceWorker from './registerServiceWorker';

const target = document.getElementsByClassName('artboard-preview')[0];
const ref = document.getElementsByClassName('detail-and-compare')[0];
const app = document.createElement('div');
app.id = 'root';
if (target && ref) target.insertBefore(app, ref)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()


// Global Panel style
injectGlobal`
  --onion-mode-opacity: 1;

  .detail-and-compare {
    &[data-mode='slide'],
    &[data-mode='onion'] {
      display: flex;
      justify-content: space-between;

      > .detail-screen,
      > .compare-screen {
        position: absolute;
        top: 50px;
        left: 0;
        padding: 0;
        margin: 0 !important;
        width: 100% !important;
      }

      > a.revision-link {
        position: relative !important;
      }
    }
    &[data-mode='slide'] {

    }

    &[data-mode='onion'] {
      .detail-screen img {
        opacity: var(--onion-mode-opacity);
      }
      .compare-screen img {
        opacity: calc(1 - var(--onion-mode-opacity));
      }
    }
  }
`
