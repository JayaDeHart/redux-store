import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/index';
import { Provider } from 'react-redux';

function Entry() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

ReactDOM.render(<Entry />, document.getElementById('root'));
