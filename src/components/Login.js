import React from 'react';
import {Redirect} from 'react-router-dom';
import apiClient from '../services/api';
import {ReactComponent as LoginLogo} from "../cerebro.svg";

import { connect } from 'react-redux';
import { login } from '../actions';

import Alert from "./alerts/Alert";




let Login = ({login}) => {




    const [credentials, setCredentials] = React.useState({
        handle: "", password: ""
    });

    const [error, setAuthError] = React.useState({
        error: ""
    });


    const handleChange = ({target}) => {
        setCredentials({
            ...credentials, [target.name]: target.value
        });
    }

    const onSubmit = e => {

        e.preventDefault();
        login(credentials)



    }


    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
                <div>
                    <LoginLogo className="mx-auto h-16 w-auto"/>
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                        AIku.io
                    </h2>
                    <p className="mt-2 text-center text-sm leading-5 text-gray-600">
                        <span className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
            Demo account
          </span>
                    </p>
                </div>
                <form className="mt-8" action="#" method="POST" onSubmit={onSubmit}>
                    <input type="hidden" name="remember" value="true"/>
                    <div className="rounded-md shadow-sm">
                        <div>
                            <input
                                onChange={handleChange}
                                aria-label="Username" name="handle" type="string" required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                placeholder="Username"/>
                        </div>
                        <div className="-mt-px">
                            <input
                                onChange={handleChange}
                                aria-label="Password" name="password" type="password" required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                placeholder="Password"/>
                        </div>
                    </div>


                    <div className="mt-6">
                        <button type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
              </svg>
            </span>
                            Sign in
                        </button>
                    </div>
                </form>

                <Alert type="error" text="hello" />




            </div>
        </div>

    );
}


const mapDispatchToProps = {
    login: login,
};
Login = connect(null,mapDispatchToProps)(Login);
export default Login

