import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import todoApp from './reducers';

const store = createStore(todoApp);

ReactDOM.render(<App />, document.getElementById('root'));
