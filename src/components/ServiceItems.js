import React, { useState, useEffect, useContext } from 'react'
import { servicesNav, servicesData } from '../data'
import { Context } from './Context'
import Service from './Service'

const ServiceItems = () => {
  const { language } = useContext(Context)
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
    let newName = e.target.textContent.toLowerCase()
    if (newName === 'all' || newName === '全部') {
      setItem({ name: 'all' })
    } else if (newName === 'hourly sessions' || newName === '精品服务') {
      setItem({ name: 'hourly sessions' })
    } else {
      setItem({ name: 'packages' })
    }
    setActive(index)
  }


  return (
    <div>
      <nav className='mb-12 max-w-xl mx-auto'>
        <ul className='flex flex-col md:flex-row justify-evenly items-center text-black'>
          {servicesNav.map((item, index) => {
            return <li onClick={(e) => { handleClick(e, index) }} className={`${active === index ? 'active' : ''} ${language === 'en' ? 'text-base tracking-normal' : 'text-lg tracking-widest'} cursor-pointer capitalize m-4 font-bold`} key={index}>{language === 'en' ? item.name : item.zhName}</li>
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