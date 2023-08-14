import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  documents: ['app/**/*.tsx', 'app/**/*.ts'],
  generates: {
    'lib/gql/': {
      preset: 'client',
    },
  },
}
export default config
