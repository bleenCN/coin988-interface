import Image from 'next/image'
import * as React from 'react'

import banner from '@/public/ecosystem/banner.jpg'

export default function Layout({
  children,
  ...routes
}: {
  children: React.ReactNode
  featured: React.ReactNode
  all: React.ReactNode
}) {
  return (
    <>
      <div className="container mt-4 lg:mt-8">
        <Image src={banner} alt="" priority />
      </div>
      {routes.featured}
      {routes.all}
      {children}
    </>
  )
}
