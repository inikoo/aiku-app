/*
 Author: Kohani (kohani@aiku.io)
 Created: Fri, 28 Aug 2020 17:03:38 Singapore Standard Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';


const StatsSimple = (props) => {

    return (<>
        <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
                Last 30 days
            </h3>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <dl>
                            <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                                Total Subscribers
                            </dt>
                            <dd className="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                                71,897
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <dl>
                            <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                                Avg. Open Rate
                            </dt>
                            <dd className="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                                58.16%
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <dl>
                            <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                                Avg. Click Rate
                            </dt>
                            <dd className="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                                24.57%
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default StatsSimple;