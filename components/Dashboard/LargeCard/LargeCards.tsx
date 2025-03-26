import React from 'react'
import LargeCard from './LargeCard'
import { ShoppingBag, Calendar, TrendingUp, Clock, Award } from 'lucide-react'

const LargeCards = () => {
    const orderStats = [
        {
            icon: <ShoppingBag size={24} />,
            period: "Today Orders",
            sales: 10000,
            classname: "bg-green-600"
        },
        {
            icon: <Calendar size={24} />,
            period: "Yesterday Orders",
            sales: 14000,
            classname: "bg-blue-600"
        },
        {
            icon: <TrendingUp size={24} />,
            period: "This Month",
            sales: 12000,
            classname: "bg-orange-600"
        },
        {
            icon: <Clock size={24} />,
            period: "Last Month",
            sales: 11000,
            classname: "bg-yellow-600"
        },
        {
            icon: <Award size={24} />,
            period: "All-Time Sales",
            sales: 11000,
            classname: "bg-purple-600"
        },
    ]
    
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-8'>
            {orderStats.map((item, index) => (
                <LargeCard 
                    key={index}
                    classname={item.classname}
                    icon={item.icon}
                    period={item.period}
                    sales={item.sales}
                /> 
            ))}
        </div>
    )
}

export default LargeCards