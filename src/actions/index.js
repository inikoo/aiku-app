/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Tue, 11 Aug 2020 13:46:49 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import {LOGIN, LOGOUT, UPDATE_LANGUAGE} from "./actionTypes";

export const login = (credentials) => ({
    type: LOGIN, credentials
})

export const logout = () => ({type: LOGOUT})

export const update_language = (language) => ({
    type: UPDATE_LANGUAGE, language
})