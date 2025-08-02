import React from 'react'
import Carousel from './carousel'
import {images} from '@/lib/data'

const Showcase = () => {
  return (
    <div className=' pl-24 sm:pl-26 lg:pl-28 py-12 '>
      <h2 className="text-2xl font-bold mb-4 text-center">Showcase</h2>
      <Carousel images={images} />
    </div>
  )
}

export default Showcase