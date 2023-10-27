import React from 'react'
import WhiteBackground from '../assets/img/white.png'
import { FiClock } from 'react-icons/fi'

const Service = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div id='service-container' className='mb-8 relative text-center'>
        <img src={WhiteBackground} />
        <div className='absolute top-1/2 left-1/2 text-gray-700 flex flex-col justify-center items-center' style={{ transform: 'translate(-50%, -50%)' }}>
          <div id='service-front' className='flex flex-col justify-center items-center w-60 xl:w-80'>
            <div className='font-bold text-xl'>{item.name}</div>
            {item.duration ?
              <div className='flex flex-row justify-center items-center w-fit bg-gray-700 px-2 py-1 mt-3'>
                <FiClock className='text-white' />
                <div className='text-base ml-2 text-white'>{item.duration}</div>
              </div> : <div></div>
            }
            <div className='mt-3'>{item.description}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service