'use client'

import { Filter } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { usePathname } from 'next-intl/client'
import { Suspense } from 'react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'

import { Categories } from '../all-projects.server'
import { CategoryFiltersClient } from './category-filters.client'
import { StickyHeaderContainer } from './sticky-header-container'

export function AllProjects({
  categories,
  children,
}: {
  categories: Categories
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  function handleCategoryClick(category: string, isParent: boolean) {
    // @ts-ignore
    const nextSearchParams = new URLSearchParams(searchParams)
    nextSearchParams.set('category', category)
    nextSearchParams.set('isParent', String(isParent))
    startTransition(() => {
      router.replace(pathname + '?' + nextSearchParams.toString(), { scroll: false })
    })
  }

  const [isPending, startTransition] = React.useTransition()

  const categoriesFilter = (
    <CategoryFiltersClient
      categories={categories}
      onCategorySwitch={handleCategoryClick}
    />
  )

  return (
    <section className="mt-2.5">
      <StickyHeaderContainer>
        <h1 className="text-2xl font-semibold sm:text-[32px]">Ecosystem</h1>
        <div className="flex">
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline-secondary" size="icon">
                  <Filter />
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-screen">
                <SheetHeader className="mb-4 text-2xl font-semibold">Filters</SheetHeader>
                <Suspense>{categoriesFilter}</Suspense>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </StickyHeaderContainer>
      <div className="container items-start lg:grid lg:grid-cols-[390px,1fr] lg:gap-6">
        <div className="sticky top-36 hidden h-[calc(100vh-144px)] overflow-y-auto border-r py-4 lg:top-40 lg:block lg:h-[calc(100vh-160px)]">
          <Suspense>{categoriesFilter}</Suspense>
        </div>
        <div
          className="grid grid-cols-2 gap-4 py-4 sm:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] sm:gap-6 sm:pt-8"
          style={{
            opacity: isPending ? 0.6 : 1,
          }}
        >
          <Suspense>{children}</Suspense>
        </div>
      </div>
    </section>
  )
}
