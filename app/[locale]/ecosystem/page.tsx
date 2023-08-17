import Image from 'next/image'

import HiddenFooter from '@/components/hidden-footer'
import { Locale } from '@/i18n.config'
import banner from '@/public/ecosystem/banner.jpg'

import { AllProjects } from './all-projects.server'
import FeaturedProjects from './featured-projects'
import { FeaturedProjectsTab } from './types'

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
  params: { locale: Locale }
}) {
  return (
    <>
      <div className="container mt-4 lg:mt-8">
        <Image src={banner} alt="" priority />
      </div>
      <FeaturedProjects tab={searchParams.tab as FeaturedProjectsTab} />
      <AllProjects searchParams={searchParams} />
      <HiddenFooter />
    </>
  )
}
