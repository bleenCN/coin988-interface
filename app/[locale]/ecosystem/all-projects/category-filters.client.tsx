'use client'

import * as React from 'react'
import { z } from 'zod'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  BridgeIcon,
  DefiIcon,
  GameIcon,
  ImageIcon,
  ToolsIcon,
  WalletIcon,
} from '@/components/ui/icons'

const CategorysSchema = z.object({
  data: z.array(
    z.object({
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
    }),
  ),
})

type Categories = z.infer<typeof CategorysSchema>

export function CategoryFiltersClient({
  categories,
  onCategorySwitch,
}: {
  categories: Categories
  onCategorySwitch: (category: string, isParent: boolean) => void
}) {
  return (
    <ul>
      <Accordion type="single" collapsible>
        {categories.data.map((category) => (
          <li key={category.id}>
            <AccordionItem
              value={category.id}
              onClick={() => onCategorySwitch(category.id, true)}
            >
              <AccordionTrigger className="px-4">
                {getGategoryIcon(category.name)}
                <span className="ml-2">{category.name}</span>
                <span className="mr-3 flex-1 text-right font-normal text-soft-foreground">
                  {category.count}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <ul>
                  {category.subcategories.map((subcategory) => (
                    <li key={subcategory.id}>
                      <button
                        type="button"
                        className="flex w-full justify-between py-2.5 pl-11 pr-12 hover:bg-accent"
                        onClick={(e) => {
                          e.stopPropagation()
                          onCategorySwitch(subcategory.id, false)
                        }}
                      >
                        {subcategory.name}
                        <span className="text-soft-foreground">{subcategory.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </li>
        ))}
      </Accordion>
    </ul>
  )
}

function getGategoryIcon(key: string) {
  return (
    {
      bridges: <BridgeIcon className="text-brand" />,
      wallet: <WalletIcon className="text-brand" />,
      defi: <DefiIcon className="text-brand" />,
      nft: <ImageIcon className="text-brand" />,
      game: <GameIcon className="text-brand" />,
    }[key.toLowerCase()] ?? <ToolsIcon className="text-brand" />
  )
}
