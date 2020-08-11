/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Tue, 11 Aug 2020 12:08:31 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import {LOGIN, LOGOUT, LOGIN_SUCCESS, LOGGED_OUT} from "../actions/actionTypes";

const initialState = {
    loggedIn: (localStorage.getItem('loggedIn') === 'yes'),
    profileName: (!localStorage.getItem('profileName')?'Guest':localStorage.getItem('profileName')),
    loading:false
}


export default function auth(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, loading: true};
        case LOGIN_SUCCESS:
            localStorage.setItem('loggedIn', 'yes');

            const profileName =(!action.profile.user.userable.name?'Guest':action.profile.user.userable.name)

            localStorage.setItem('profileName',profileName);

            return {...state, profileName:profileName, loggedIn: true, loading: false}
        case LOGOUT:
            return {...state, loading: true};
        case LOGGED_OUT:
            localStorage.setItem('loggedIn', 'no');
            return {...state, loggedIn: false, loading: false}
        default:
            return state;
    }
}
