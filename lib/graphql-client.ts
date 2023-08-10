import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.NEXT_GRAPHQL_URL!

console.log({ endpoint })

const gqlClient = new GraphQLClient(endpoint)

export { gqlClient }
