import React from 'react'
import SmallCard from './SmallCard'
import { ShoppingBag, Calendar, TrendingUp, Clock, Award } from 'lucide-react'

const SmallCards = () => {
    const orderStats = [
        {
            icon: <ShoppingBag size={24} />,
            period: "Today Orders",
            number: 10000,
            classname: "bg-green-600"
        },
        {
            icon: <Calendar size={24} />,
            period: "Yesterday Orders",
            number: 14000,
            classname: "bg-blue-600"
        },
        {
            icon: <TrendingUp size={24} />,
            period: "This Month",
            number: 12000,
            classname: "bg-orange-600"
        },
        {
            icon: <Clock size={24} />,
            period: "Last Month",
            number: 11000,
            classname: "bg-yellow-600"
        },
    ]
    
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
            {orderStats.map((item, index) => (
                <SmallCard 
                    key={index}
                    classname={item.classname}
                    icon={item.icon}
                    period={item.period}
                    number={item.number}
                /> 
            ))}
        </div>
    )
}

export default SmallCards