
/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Tue,  Aug 2020, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLanguage} from '@fortawesome/pro-light-svg-icons'

const Footer = () => {

    return (

        <footer className="flex justify-end bg-gray-800 h-6 text-gray-300">

                    <button className="mr-5 group flex items-center  ">
                    <FontAwesomeIcon
                        className="text-lg fa-flip-horizontal mr-2 h-6 w-6 group-hover:text-gray-200 group-focus:text-gray-200 transition ease-in-out duration-150 "
                        icon={faLanguage}/>
                        <span className="group-hover:text-gray-200 group-focus:text-gray-200 transition ease-in-out duration-150">English</span>
                    </button>

        </footer>
    );


};

export default Footer;