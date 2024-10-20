import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

export const Listings = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-12 min-h-screen gap-6 pb-10'>
      <div className='col-span-1 md:col-span-7 mt-24 flex flex-col gap-5'>
        <div>
          <h1>Search results for <span>London</span> </h1>
          
            
        </div>
        <div></div>
      </div>
      <div className='col-span-1 md:col-span-5 bg-[#fcf5f3]'></div>
    </div>
  )
}
