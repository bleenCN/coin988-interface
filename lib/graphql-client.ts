import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_URL!

const gqlClient = new GraphQLClient(endpoint)

export { gqlClient }
