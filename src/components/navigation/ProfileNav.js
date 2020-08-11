/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Tue, 11 Aug 2020 11:41:40 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React, {useState} from 'react';
import UserAvatar from 'react-user-avatar';
import {connect} from 'react-redux'

const ProfileNav = () => {

    const profileName ='x';

    return (<div className="flex-shrink-0 flex bg-gray-700 p-4">
        <a href="#" className="flex-shrink-0 w-full group block">
            <div className="flex items-center">
                <div className="text-white">
                    <UserAvatar size="48" name={profileName}/>
                </div>
                <div className="ml-3">
                    <p className="text-sm leading-5 font-medium text-white">
                        {profileName}
                    </p>
                    <p className="text-xs leading-4 font-medium text-gray-300 group-hover:text-gray-200 transition ease-in-out duration-150">
                        View profile
                    </p>
                </div>
            </div>
        </a>
    </div>);
};


export default ProfileNav;