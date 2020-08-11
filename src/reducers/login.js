/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Tue, 11 Aug 2020 12:08:31 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import { LOGIN ,LOGIN_SUCCESS} from "../actions/actionTypes";



export default function login(state={} , action) {
    switch(action.type) {
        case LOGIN:
            return { ...state, loading: true };
        case LOGIN_SUCCESS:
            alert('caca');
            return { ...state, profile: action.profile, loading: false }
        default:
            return state;
    }
}
