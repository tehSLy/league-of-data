import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';
import { config } from '../config';
import 'cross-fetch/polyfill';

const cache = new InMemoryCache();

export const gqlClient = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  uri: `http://${config.API_URL}`,

  // Provide some optional constructor fields
  name: 'react-web-client',
  version: '1.3',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});
