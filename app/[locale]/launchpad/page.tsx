import Image from 'next/image'
import { CSSProperties } from 'react'

import NewTokens from '@/components/new-tokens'

import Apply from './apply'
import Information from './infomation'
import Introduction from './introduction'
import NewProjects from './new-projects'

export default function LaunchpadPage() {
  return (
    <>
      <div className="container pt-6 md:pt-12">
        <NewTokens hideTitle />
      </div>

      <div className="container pt-24">
        <NewProjects />
      </div>

      <div className="container pt-20">
        <Introduction />
      </div>

      <div className="container pt-32">
        <Information />
      </div>

      <div
        className="relative mt-20 flex h-[520px] flex-col justify-center md:mt-40"
        style={radialGradientCss}
      >
        {/* 方块 */}
        <Image
          src={'/images/launchpad-illustration1.png'}
          alt={''}
          width={270}
          height={270}
          className="absolute left-[10%] top-10 max-w-[20%]"
        />

        {/* 硬币 */}
        <Image
          src={'/images/launchpad-illustration2.png'}
          alt={''}
          width={638}
          height={638}
          className="absolute bottom-0 right-0 max-w-[50%]"
        />
        <div className="container">
          <div className="relative">
            <Apply />
          </div>
        </div>
      </div>
    </>
  )
}

const radialGradientCss: CSSProperties = {
  background:
    'radial-gradient(100% 100% at 0% 100%,#2E60FF80 0%,transparent 60%),radial-gradient(100% 100% at 100% 0%,#2E60FFA0 0%,transparent 60%)',
}
