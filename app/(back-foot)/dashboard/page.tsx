import Heading from '@/components/Dashboard/Heading'
import LargeCards from '@/components/Dashboard/LargeCard/LargeCards'
import SmallCards from '@/components/Dashboard/SmallCard/SmallCards'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      {/* Heading */}
      <Heading text={"Dashboard"}/>

      {/* Large Card */}
        <LargeCards/>

      {/* Small Card */}
        <SmallCards/>
        
      {/*  Charts */}

      {/* Recents Orders*/}
    </div>
  )
}

export default Dashboard
