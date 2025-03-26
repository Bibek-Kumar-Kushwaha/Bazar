import React from 'react'

interface HeadingProps {
    text: string
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
    return (
        <div>
            <h2 className='font-bold text-xl'>{text}</h2>
        </div>
    )
}

export default Heading
