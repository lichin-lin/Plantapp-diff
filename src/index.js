import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { injectGlobal } from 'styled-components';
import registerServiceWorker from './registerServiceWorker';

const target = document.getElementsByClassName('artboard-preview')[0];
const ref = document.getElementsByClassName('detail-and-compare')[0];
const app = document.createElement('div');
app.id = 'plantapp-diff-plugin';
// check if target exist & ref is not hidden
if (target && ref) target.insertBefore(app, ref)

ReactDOM.render(<App />, document.getElementById('plantapp-diff-plugin'))
registerServiceWorker()


// Global Panel style
injectGlobal`
  --onion-mode-opacity: 1;
  --swipe-mode-width: '50%';
  .artboard-preview {
    .input-range__track,
    .input-range__slider-container {
      transition: none;
    }
  }
  .detail-and-compare {
    &[data-mode='swipe'],
    &[data-mode='onion'] {
      display: flex;
      justify-content: space-between;

      > .detail-screen,
      > .compare-screen {
        overflow: scroll;
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
    &[data-mode='swipe'] {

      > .compare-screen {
        width: 0;
        overflow: scroll;
        /* Force Hardware Acceleration in WebKit */
        transform: translateZ(0);
        backface-visibility: hidden;
        width: var(--swipe-mode-width) !important;
      }
    }

    &[data-mode='onion'] {
      .detail-screen img {
        opacity: calc(1 - var(--onion-mode-opacity));
      }
      .compare-screen img {
        opacity: var(--onion-mode-opacity);
      }
    }
  }
`
