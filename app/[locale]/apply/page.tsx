import { flattenCategories } from '@/domain/category'
import { loadCategories } from '@/lib/services'

import { ApolloProvider } from './apollo-provider'
import { ApplyForm } from './apply-form'
import TestComponent from './component-test'

export default async function Page() {
  const categories = await loadCategories()
  const categoryOptions = flattenCategories(categories)

  return (
    <ApolloProvider>
      <ApplyForm categoryOptions={categoryOptions} />
      <TestComponent />
    </ApolloProvider>
  )
}
