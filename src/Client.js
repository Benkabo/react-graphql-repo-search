import {ApolloClient, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://api.github.com/graphql',
    headers: {
        Authorization: `bearer ${process.env.REACT_APP_GITHUB_KEY}`
    }
    
})

export default client;