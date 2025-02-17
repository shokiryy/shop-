import React from 'react'
import Hero from '../compontes/Hero'
import LatestCollection from '../compontes/LatestCollection'
import BestSell from '../compontes/BEstSell'
import OverPolse from '../compontes/OverPolse'
import NewsletterBox from '../compontes/NewsletterBox'

const Home = () => {
  return (
    <div>
        <Hero/>
        <LatestCollection/>
        <BestSell/>
        <OverPolse/>
        <NewsletterBox/>
    </div>
  )
}

export default Home