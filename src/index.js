import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css'
import Aiku from './Aiku';
import {Provider} from 'react-redux'
import store from './redux/store'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<React.StrictMode>
    <Provider store={store}>
        <Aiku/>
    </Provider>
</React.StrictMode>, document.getElementById('root'));

// If you want your redux to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
