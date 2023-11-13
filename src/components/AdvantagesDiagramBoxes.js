import React, { useState } from 'react'
import { Collapse } from 'react-collapse'
import { IoChevronUpCircleOutline, IoChevronDownCircleOutline } from 'react-icons/io5'
import { advantages } from '../data'

const AdvantagesDiagramBoxes = () => {
  const [open, setOpen] = useState(null)

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null)
    }
    setOpen(index)
  }

  return (
    <section className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8'>
      {advantages.map((item, index) => {
        return (
          <div key={index} open={index === open} onClick={() => toggle(index)} className='flex flex-col items-center text-center'>
            <div className='mb-8 text-center bg-white w-full'>
              <div className='flex flex-col justify-center items-center py-6'>
                <div className='font-bold text-xl'>
                  {item.title}
                </div>
                <img src={item.icon} className='w-[100px] h-[100px] mt-6' alt="" />
                <Collapse isOpened={open === index}>
                  <div className='mt-6 px-6 flex flex-col items-center justify-center text-center'>
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
                </Collapse>
                {open === index ? <IoChevronUpCircleOutline className='w-8 h-8 mt-6 cursor-pointer' /> : <IoChevronDownCircleOutline className='w-8 h-8 mt-6 cursor-pointer' />}
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default AdvantagesDiagramBoxes