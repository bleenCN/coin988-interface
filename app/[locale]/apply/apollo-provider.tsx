'use client'

import {
  ApolloClient,
  ApolloProvider as ApolloClientProvider,
  InMemoryCache,
} from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import * as React from 'react'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL!,
    headers: {
      'Apollo-Require-Preflight': 'true',
    },
  }),
})

export function ApolloProvider({ children }: { children: React.ReactNode }) {
  return <ApolloClientProvider client={client}>{children}</ApolloClientProvider>
}
