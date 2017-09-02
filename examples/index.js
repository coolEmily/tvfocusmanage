import React from 'react';
import {render} from 'react-dom';
import App from './app';
import {FocusManage} from '../src';

render(
  <FocusManage>
    <App />
  </FocusManage>,
  document.getElementById('root')
);
