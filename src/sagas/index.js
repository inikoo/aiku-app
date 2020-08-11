/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Tue, 11 Aug 2020 13:57:29 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import {all} from 'redux-saga/effects';


/*
import {put, takeLatest, all, call} from 'redux-saga/effects';
import apiClient from "../services/api";
import {Redirect} from "react-router-dom";
import React from "react";



function* tryLogin(payload) {


    const getCsrfCookie = yield apiClient.get('sanctum/csrf-cookie').then(res => {
        if (res.status === 204) {
            return 'ok';
        } else {
            return 'error';
        }

    })

    if (getCsrfCookie == 'ok') {

        const {state, data} = yield apiClient.post('api/auth', payload.credentials).then(res => {
            if (res.status === 200) {
                return {state: 200, data: res.data}
            } else {
                return {state: 400, data: res.data}
            }

        })

       if(state===200){
           yield put({type: "LOGIN_SUCCESS", profile: data});

       }



    }


}

function* actionWatcher() {
    yield takeLatest('LOGIN', tryLogin)
}

export default function* rootSaga() {
    yield all([actionWatcher(),]);
}

*/


import {authSagas} from './auth';

export default function* rootSaga() {
    yield all([...authSagas,])
}