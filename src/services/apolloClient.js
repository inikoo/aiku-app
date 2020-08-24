import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, {headers}) => {


    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    return {
        headers: {
            ...headers, 'X-XSRF-TOKEN': decodeURIComponent(getCookie('XSRF-TOKEN'))
        }
    }
});


const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink), cache: new InMemoryCache(),

    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'network-only', errorPolicy: 'ignore',
        }, query: {
            fetchPolicy: 'network-only', errorPolicy: 'all',
        },
    },
});


export default apolloClient;