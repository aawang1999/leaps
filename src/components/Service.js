import React from 'react'
import SampleImage from '../assets/img/sample.jpg'

const Service = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8 relative text-center'>
        <img src={SampleImage} />
        <div className='absolute top-1/2 left-1/2 font-bold text-white' style={{ transform: 'translate(-50%, -50%)' }}>{item.name}</div>
      </div>
    </div>
  )
}

export default Service