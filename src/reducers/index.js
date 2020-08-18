/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Tue, 11 Aug 2020 12:00:36 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import {combineReducers} from "redux";
import auth from './auth'
import i18n from './i18n'

export default combineReducers({auth: auth, i18n: i18n});
