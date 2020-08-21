/*
 Author: Kohani (kohani@aiku.io)
 Created: Fri, 21 Aug 2020 16:09:32 Singapore Standard Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react';
import {gql, useQuery} from "@apollo/client";
import {Trans} from "@lingui/macro";
import HeaderMetaActions from "../ui/headers/HeaderMetaActions";
import {useParams} from "react-router";
import {faPencilAlt} from '@fortawesome/pro-solid-svg-icons'
import Alert from "../ui/alerts/Alert";

const SUPPLIER = gql`
    query Supplier($supplierSlug: String!) {
        supplier(slug: $esupplierSlug) {
            id
            slug
            name
            created_at,
            user {
                id
                handle
            }
          
        }
    }
`;


function SupplierShowcase(props) {

    const supplierSlug = props.supplierSlug;

    const {loading, error, data} = useQuery(SUPPLIER, {
        variables: {supplierSlug},

    });
    if (loading) return <p><Trans>Loading...</Trans></p>;
    if (error) return <p><Trans>Error</Trans> :(</p>;



    if(data['supplier']===null){
        return (<Alert type="error" text={<Trans >{supplierSlug} not found</Trans>} />)
    }

    const actions = [{
        'icon': faPencilAlt, 'label': <Trans>Edit</Trans>, 'highlighted': false

    }];


    console.log(data['supplier'])

    return (<HeaderMetaActions
        title={data['supplier'].name}
        metas={[]}
        actions={actions}

    />)

}


const Supplier = () => {

    let {supplierSlug} = useParams();


    return (<div>

        <SupplierShowcase supplierSlug={supplierSlug}/>

    </div>);
};

export default Supplier;