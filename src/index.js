
/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Tue, 11 Aug 2020 13:41:15 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */
/*
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

serviceWorker.unregister();
*/


import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import './assets/main.css'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './reducers';
import Aiku from './Aiku';
import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware();
//import * as serviceWorker from './serviceWorker';

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);
render(<React.StrictMode><Provider store={store}>
        <Aiku />
    </Provider></React.StrictMode>,
    document.getElementById('root'),
);
if (module.hot) { module.hot.accept(Aiku);}

//serviceWorker.unregister();