import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import "cross-fetch/polyfill";

const cache = new InMemoryCache();

export const gqlClient = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  uri: process.env.API_URL,

  // Provide some optional constructor fields
  name: "react-web-client",
  version: "1.3",
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
  headers: {
    "x-user-id": String(window.Telegram.WebApp.initDataUnsafe.user)
  }
});

