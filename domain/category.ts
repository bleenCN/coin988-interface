import * as z from 'zod'

export const Category = z.object({
  id: z.string(),
  name: z.string(),
  count: z.number().nullable(),
  subcategories: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      count: z.number().nullable(),
    }),
  ),
})

export type Category = z.infer<typeof Category>

export function flattenCategories(categories: Category[]) {
  return categories.flatMap((category) => [
    ...category.subcategories.map(({ id, name }) => ({ label: name, value: id })),
  ])
}

export type CategoryOption = ReturnType<typeof flattenCategories>[number]
