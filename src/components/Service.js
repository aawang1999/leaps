import React, { useContext } from 'react'
import { Context } from './Context'
import { FiClock } from 'react-icons/fi'

const Service = ({ item }) => {
  const { language } = useContext(Context)

  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div id='service-container' className='mb-8 flex justify-center items-center text-center w-full bg-white'>
        <div className='flex flex-col justify-center items-center'>
          <div id='service-front' className='flex flex-col justify-center items-center'>
            <div className={`${language === 'en' ? 'tracking-normal' : 'tracking-widest'} font-bold text-xl`}>{language === 'en' ? item.name : item.zhName}</div>
            {item.duration ?
              <div className='flex flex-row justify-center items-center w-fit bg-gray-100 px-3 py-1 rounded-full mt-3'>
                <FiClock className='text-gray-700 text-sm' />
                <div className={`${language === 'en' ? 'tracking-normal' : 'tracking-widest'} text-sm ml-2 text-gray-700`}>{language === 'en' ? item.duration : item.zhDuration}</div>
              </div> : <div></div>
            }
          </div>
          <div id='service-info' className={`${language === 'en' ? 'text-base tracking-normal' : 'text-lg tracking-widest'} mt-3 text-gray-700 px-3`}>
            {language === 'en' ? item.description : item.zhDescription}
          </div>
          <div className='tracking-normal font-bold text-accent mt-3'>{item.price}</div>
        </div>
      </div>
    </div>
  )
}

export default Service