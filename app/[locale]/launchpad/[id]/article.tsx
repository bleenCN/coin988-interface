import Image from 'next/image'
import { memo } from 'react'

const Article = memo(function Article() {
  const imageUrl = '/images/launchpad-article-placeholder.png'

  const content = `Circle recently launched Euro Coin on Avalanche, allowing people to use Euros on-chain via Avalanche C-Chain. This is the first step of a campaign to get users acquainted with Euro Coin and its use-cases.
  Follow the “How to Participate” below during the participation period to get yourself a one of a kind OAT!
  OAT’s will be issued after the campaign period ends so check back then!
  The participation timing was from July 21 - August 4th. Eligible participants will be able to claim the OAT until August 11th at 11:59pm.
  Disclaimer: Provided for informational purposes only, without representation, warranty or guarantee of any kind. None of this is as an endorsement by Ava Labs, Inc., the Avalanche Foundation Limited or any of their respective subsidiaries or affiliates, nor is any of this investment or financial advice. Please review  and conduct your own research to properly evaluate the risks and benefits of any project.`

  return (
    <div>
      <Image
        src={imageUrl}
        alt={''}
        width={1300}
        height={360}
        className="overflow-hidden rounded-xl"
      />

      <pre className="mt-4 whitespace-pre-wrap font-[Inter] opacity-90 lg:mt-8">
        {content}
      </pre>
    </div>
  )
})

export default Article
