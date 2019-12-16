import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'

const store = createStore(reducers);

ReactDom.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'))
