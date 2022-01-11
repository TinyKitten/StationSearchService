import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import "semantic-ui-css/semantic.min.css";
import AppHeader from "../components/AppHeader";

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
  cache,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AppHeader />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
