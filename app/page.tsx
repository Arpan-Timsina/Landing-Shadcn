import { Metadata } from 'next'
import Image from 'next/image'


import { Search } from '@/components/search'

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'Aesthetically pleasing landing page created using shadecn and nextjs'
}

export default function Page() {
  return (
    <>
      <div className='w-full  h-screen flex items-center justify-center'>
      <div className='mb-64' >
      <Search />
      </div>
      </div>
    </>
  )
}
