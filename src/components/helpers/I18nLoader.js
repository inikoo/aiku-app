/*
 Author: Raul A Perusquía-Flores (raul@aiku.io)
 Created: Wed, 19 Aug 2020 02:37:26 Malaysia Time, Kuala Lumpur, Malaysia
 Copyright (c) 2020. Aiku.io
 */

import React from 'react'
import {connect} from 'react-redux'
import {I18nProvider} from '@lingui/react'

export class I18nLoader extends React.Component {
    state = {
        catalogs: {},
    }

    loadCatalog = async (language) => {
        const catalog = await import(
            /* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
            `../../../src/locales/${language}/messages.js`)

        this.setState(state => ({
            catalogs: {
                ...state.catalogs, [language]: catalog
            }
        }))
    }

    componentDidMount() {
        this.loadCatalog(this.props.language)
    }

    shouldComponentUpdate(nextProps, nextState) {
        const {language} = nextProps
        const {catalogs} = nextState

        if (language !== this.props.language && !catalogs[language]) {
            this.loadCatalog(language)
            return false
        }

        return true
    }

    render() {
        const {children, language} = this.props
        const {catalogs} = this.state

        // Skip rendering when catalog isn't loaded.
        if (!catalogs[language]) return ''

        return (<I18nProvider language={language} catalogs={catalogs}>
                {children}
            </I18nProvider>)
    }
}

const getLanguage = state => state.i18n.language

export default connect(state => ({
    language: getLanguage(state)
}))(I18nLoader)