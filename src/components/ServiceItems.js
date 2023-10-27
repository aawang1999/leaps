import React, { useState, useEffect } from 'react'
import { servicesNav, servicesData } from '../data'
import Service from './Service'

const ServiceItems = () => {
  const [item, setItem] = useState({ name: 'all' })
  const [services, setServices] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (item.name === 'all') {
      setServices(servicesData)
    } else {
      const newServices = servicesData.filter((service) => {
        return service.category.toLowerCase() === item.name
      })
      setServices(newServices)
    }
  }, [item])

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() })
    setActive(index)
  }

  return (
    <div>
      <nav className='mb-12 max-w-xl mx-auto'>
        <ul className='flex flex-col md:flex-row justify-evenly items-center text-black'>
          {servicesNav.map((item, index) => {
            return <li onClick={(e) => { handleClick(e, index) }} className={`${active === index ? 'active' : ''} cursor-pointer capitalize m-4 font-bold`} key={index}>{item.name}</li>
          })}
        </ul>
      </nav>
      <section className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8'>
        {services.map((item) => {
          return <Service item={item} key={item.id} />
        })}
      </section>
    </div>
  )
}

export default ServiceItems