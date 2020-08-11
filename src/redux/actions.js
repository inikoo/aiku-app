/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Tue, 11 Aug 2020 12:00:08 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import * as ACTIONS from '../actions/actionTypes'

let profileData = {
    name:"Guest"
}
export const loginSuccess = user_data => ({
    type: ACTIONS.LOGIN_SUCCESS,
    payload: {
        user_data:user_data
    }
})

