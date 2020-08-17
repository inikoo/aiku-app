/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Tue, 11 Aug 2020 13:57:29 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import {all} from 'redux-saga/effects';


import {authSagas} from './auth';

export default function* rootSaga() {
    yield all([...authSagas,])
}