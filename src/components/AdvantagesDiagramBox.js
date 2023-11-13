import React from 'react'

const AdvantagesDiagramBox = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div id='advantage-container' className='mb-8 text-center bg-white w-full'>
        <div className='flex flex-col justify-center items-center py-6'>
          <div className='font-bold text-xl'>
            {item.title}
          </div>
          <img src={item.icon} className='w-[100px] h-[100px] mt-6' alt="" />
          <div id='advantage-info' className='mt-6 px-6 flex flex-col items-center justify-center text-center'>
            <div className='text-gray-700 flex flex-col items-center justify-center text-center'>
              {item.content}
            </div>
            {
              item.footnote !== null
                ? <div className='text-xs mt-6 text-gray-700'>
                  {item.footnote}
                </div>
                : <></>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvantagesDiagramBox