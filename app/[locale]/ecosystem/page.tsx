import Image from 'next/image'

import banner from '@/public/ecosystem/banner.jpg'

import { FeaturedProjects } from './featured-projects'

export default function EcosystemPage() {
  return (
    <div className="container">
      <div className="mt-4 lg:mt-8">
        <Image src={banner} alt="" />
      </div>
      <FeaturedProjects />
      <section className="mt-5 lg:mt-[42px]">
        <h1 className="text-[32px] font-semibold">Ecosystem</h1>
      </section>
    </div>
  )
}
