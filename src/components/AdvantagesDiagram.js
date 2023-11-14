import React from 'react'
import AdvantagesDiagramBoxes from './AdvantagesDiagramBoxes'

const AdvantagesDiagram = () => {
  return (
    <div className="container mx-auto pt-12 lg:pt-32">
      {/* <div className="flex flex-col items-center text-center">
        <h2 className='section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block text-black mt-[50px] lg:mt-[0px]'>
          Advantages
        </h2>
        <p className='subtitle text-gray-700'>
          In short, here's why we stand out.
        </p>
      </div> */}
      <AdvantagesDiagramBoxes />
    </div>
  )
}

export default AdvantagesDiagram