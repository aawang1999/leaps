import React from 'react'

const AdvantagesDiagramBox = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div id='service-container' className='mb-8 text-center bg-white w-full h-[500px]'>
        <div className='flex flex-col justify-center items-center py-6'>
          <div className='font-bold text-xl'>
            {item.title}
          </div>
          <div className='w-[100px] h-32 mt-3'>{item.icon}</div>
          <div className='w-60 xl:w-80 mt-3 text-gray-700'>
            {item.content}
          </div>
          {
            item.footnote !== null
              ? <div className='text-xs mt-3 text-gray-700'>
                {item.footnote}
              </div>
              : <></>
          }
        </div>
      </div>
    </div>
  )
}

export default AdvantagesDiagramBox