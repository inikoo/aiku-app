/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Tue, 11 Aug 2020 20:49:44 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import {put, takeLatest} from 'redux-saga/effects';
import apiClient from "../services/api";

function* tryLogin(payload) {

    let result = yield apiClient.get('sanctum/csrf-cookie').then(res => {
        if (res.status !== 204) {
            return {error: 'connection', data: null}
        } else {
            return {error: false, data: null}
        }

    })

    if (result.error === false) {

        result = yield apiClient.post('api/login', payload.credentials).then(res => {
            if (res.status === 200) {
                return {error: false, data: res.data}
            } else {
                return {error: 'credentials', data: res.data}
            }
        }).catch(error => {
            return {error: 'credentials', data: error}

        });
    }

    if (result.error === false) {
        yield put({type: "LOGIN_SUCCESS", profile: result.data});
    } else {
        yield put({type: "LOGIN_ERROR", error: result.error});

    }

}

function* Logout() {

    yield apiClient.post('api/logout').then(() => {
    })

    yield put({type: "LOGGED_OUT"});

}

export const authSagas = [takeLatest("LOGIN", tryLogin), takeLatest("LOGOUT", Logout),]