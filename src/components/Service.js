import React from 'react'
import WhiteBackground from '../assets/img/white.png'
import { FiClock } from 'react-icons/fi'

const Service = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div id='service-container' className='mb-8 relative text-center'>
        <img id='service-background' src={WhiteBackground} />
        <div className='absolute top-1/2 left-1/2 text-black flex flex-col justify-center items-center' style={{ transform: 'translate(-50%, -50%)' }}>
          <div id='service-front' className='flex flex-col justify-center items-center w-60 xl:w-80'>
            <div className='font-bold text-xl'>{item.name}</div>
            {item.duration ?
              <div className='flex flex-row justify-center items-center w-fit bg-gray-100 px-3 py-1 rounded-full mt-3'>
                <FiClock className='text-gray-700 text-sm' />
                <div className='text-sm ml-2 text-gray-700'>{item.duration}</div>
              </div> : <div></div>
            }
          </div>
          <div id='service-back' className='mt-3 text-gray-700'>{item.description}</div>
        </div>
      </div>
    </div>
  )
}

export default Service