/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Tue, 11 Aug 2020 13:57:29 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import {put, takeLatest, all, call} from 'redux-saga/effects';
import apiClient from "../services/api";
import {Redirect} from "react-router-dom";
import React from "react";


export const loginRequest = (payload) => {
    apiClient.get('sanctum/csrf-cookie').then(response => {

        if (response.status === 204) {

            return 'caca';
            return apiClient.post('http://kun.localhost:8000/api/login', payload.credentials).then(res => {


                if (res.status === 200) {

                    return res.data

                    //props.login();
                    //dispatch('loginSuccess', res);
                    //     return <Redirect to='/'/>
                    // setToHome(true);
                }
            }).catch(error => {
                alert('xxx')
                if (error.response && error.response.status === 422) {
                    // setAuthError(true);
                } else {
                    //setUnknownError(true);
                    console.error(error);
                }
            });


        } else {

        }


    }).catch(() => {

        //setUnknownError(true);

    });
}

function* tryLogin(payload) {


    const getCsrfCookie = yield apiClient.get('sanctum/csrf-cookie').then(res => {
        if (res.status === 204) {
            return 'ok';
        } else {
            return 'error';
        }

    })

    if (getCsrfCookie == 'ok') {

        const {state, data} = yield apiClient.post('api/login', payload.credentials).then(res => {
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


    /*

    apiClient.get('sanctum/csrf-cookie').then(response => {

        if (response.status === 204) {

            return 'caca';
            return apiClient.post('http://kun.localhost:8000/api/login', payload.credentials).then(res => {


                if (res.status === 200) {

                    return res.data

                    //props.login();
                    //dispatch('loginSuccess', res);
                    //     return <Redirect to='/'/>
                    // setToHome(true);
                }
            }).catch(error => {
                alert('xxx')
                if (error.response && error.response.status === 422) {
                    // setAuthError(true);
                } else {
                    //setUnknownError(true);
                    console.error(error);
                }
            });




        } else {

        }


    }).catch(() => {

        //setUnknownError(true);

    });
*/


    //  yield put({type: "NEWS_RECEIVED", json: 'm'});
}

function* actionWatcher() {
    yield takeLatest('LOGIN', tryLogin)
}

export default function* rootSaga() {
    yield all([actionWatcher(),]);
}