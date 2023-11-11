import React from 'react'
import AdvantagesDiagramBox from './AdvantagesDiagramBox'
import { advantages } from '../data'

const AdvantagesDiagramBoxes = () => {
  return (
    <section className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8'>
      {advantages.map((item) => {
        return <AdvantagesDiagramBox item={item} key={item.id} />
      })}
    </section>
  )
}

export default AdvantagesDiagramBoxes