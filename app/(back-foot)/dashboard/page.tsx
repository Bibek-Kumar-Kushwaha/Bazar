import LeftChart from '@/components/Dashboard/Chart/LeftChart'
import RightChart from '@/components/Dashboard/Chart/RightChart'
import Heading from '@/components/Dashboard/Heading'
import LargeCards from '@/components/Dashboard/LargeCard/LargeCards'
import CustomDashboardTable from '@/components/Dashboard/RecentOrder/CustomDashboardTable'
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 ">
        <LeftChart/>
        <RightChart/>
      </div>

      {/* Recents Orders*/}
      <CustomDashboardTable/>
    </div>
  )
}

export default Dashboard
