import { Filter } from 'lucide-react'
import { Suspense } from 'react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'

import { CategoryFilters } from './category-filters'
import { Projects } from './projects'
import { StickyHeaderContainer } from './sticky-header-container'

export function AllProjects({
  category,
  isParent,
}: {
  category: string | undefined
  isParent: boolean
}) {
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
                <Suspense>
                  <CategoryFilters />
                </Suspense>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </StickyHeaderContainer>
      <div className="container items-start lg:grid lg:grid-cols-[390px,1fr] lg:gap-6">
        <div className="sticky top-36 hidden h-[calc(100vh-144px)] overflow-y-auto border-r py-4 lg:top-40 lg:block lg:h-[calc(100vh-160px)]">
          <Suspense>
            <CategoryFilters />
          </Suspense>
        </div>
        <div className="grid grid-cols-2 gap-4 py-4 sm:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] sm:gap-6 sm:pt-8">
          <Suspense>
            <Projects category={category} isParent={isParent} />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
