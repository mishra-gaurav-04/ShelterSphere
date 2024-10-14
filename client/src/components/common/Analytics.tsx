import React from 'react'
import { AnalyticsProps } from '@/lib/types'

const Analytics = (props: AnalyticsProps) => {
    return (
        <div className='flex flex-col gap-1'>
            <p className='text-5xl font-bold'>{props.value}+</p>
            <p className='font-mono text-2xl'>{props.text}</p>
        </div>
    )
}

export default Analytics