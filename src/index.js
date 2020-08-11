
/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Tue, 11 Aug 2020 16:32:52 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css'
import Aiku from './Aiku';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<React.StrictMode>

        <Aiku/>

</React.StrictMode>, document.getElementById('root'));

// If you want your redux to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
