import React, { useContext } from 'react'
import { Context } from './Context'

const GetStarted = () => {
  return (
    <section className='section bg-primary'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className='section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block text-black'>
            Get Started
          </h2>
          <p className={'text-gray-700 mb-6 max-w-[520px]'}>
            If you are interested in our services, click the button below so we can get acquainted with a brief survey!
          </p>
          <p className={'subtitle text-gray-700'}>
            (Don't worry: we won't charge you or ask you for any personal information.)
          </p>
          <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all'>Get Started</button>
        </div>
      </div>
    </section>
  )
}

export default GetStarted