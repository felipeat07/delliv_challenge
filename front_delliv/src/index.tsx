// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import store from './redux/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);