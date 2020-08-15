/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Sun, 16 Aug 2020 01:38:12 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import Trans from "@lingui/react/Trans";


const T = ({children}) => {
    return (<Trans>{children}</Trans>);
};

export default T;