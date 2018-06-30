import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './components/App';

export default ({ store }) => (
    <Provider store={store}>
        <App />
    </Provider>
);
