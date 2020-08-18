/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Wed, 19 Aug 2020 02:45:42 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import {UPDATE_LANGUAGE} from "../actions/actionTypes";

const initialState = {
    language: (!localStorage.getItem('language') ? 'en' : localStorage.getItem('language')),
}


export default function auth(state = initialState, action) {
    switch (action.type) {

        case UPDATE_LANGUAGE:
            localStorage.setItem('language', action.language);
            return {...state, language: action.language}

        default:
            return state;
    }
}
