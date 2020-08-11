import React ,{ useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import UserAvatar from 'react-user-avatar';
import {
    selectName
} from './../../features/profile/profileSlice'




const ProfileNav = () => {

    const Name = useSelector(selectName)


    return (

        <div className="flex-shrink-0 flex bg-gray-700 p-4">
            <a href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                    <div className="text-white">
                        <UserAvatar size="48"   name={Name} />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm leading-5 font-medium text-white">
                            {Name}
                        </p>
                        <p className="text-xs leading-4 font-medium text-gray-300 group-hover:text-gray-200 transition ease-in-out duration-150">
                            View profile
                        </p>
                    </div>
                </div>
            </a>
        </div>


    );


};

export default ProfileNav;