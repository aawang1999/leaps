import React, { useState, useEffect, useContext } from 'react'
import { servicesNav, servicesData } from '../data'
import { Context } from './Context'
import { FiClock } from 'react-icons/fi'
import { Collapse } from 'react-collapse'
import { IoChevronUpCircleOutline, IoChevronDownCircleOutline } from 'react-icons/io5'

const ServiceItems = () => {
  const { language, setServiceCategory } = useContext(Context)
  const [item, setItem] = useState({ name: 'all' })
  const [services, setServices] = useState([])
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(null)

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null)
    }
    setOpen(index)
  }

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
      setServiceCategory('all')
    } else if (newName === 'hourly sessions' || newName === '精品服务') {
      setItem({ name: 'hourly sessions' })
      setServiceCategory('hourly sessions')
    } else {
      setItem({ name: 'packages' })
      setServiceCategory('packages')
    }
    setActive(index)
    setOpen(null)
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
        {services.map((item, index) => {
          return (
            <div key={index} open={index === open} onClick={() => toggle(index)} className='flex flex-col items-center text-center'>
              <div className='mb-8 flex justify-center items-center text-center w-full bg-white'>
                <div className='flex flex-col justify-center items-center py-6'>
                  <div className='flex flex-col justify-center items-center'>
                    <div className={`${language === 'en' ? 'tracking-normal' : 'tracking-widest'} font-bold text-xl`}>{language === 'en' ? item.name : item.zhName}</div>
                    {item.duration ?
                      <div className='flex flex-row justify-center items-center w-fit bg-gray-100 px-3 py-1 rounded-full mt-3'>
                        <FiClock className='text-gray-700 text-sm' />
                        <div className={`${language === 'en' ? 'tracking-normal' : 'tracking-widest'} text-sm ml-2 text-gray-700`}>{language === 'en' ? item.duration : item.zhDuration}</div>
                      </div> : <div></div>
                    }
                  </div>
                  <Collapse isOpened={open === index}>
                    <div className={`${language === 'en' ? 'text-base tracking-normal' : 'text-lg tracking-widest'} mt-3 text-gray-700 px-3`}>
                      {language === 'en' ? item.description : item.zhDescription}
                    </div>
                  </Collapse>
                  <div className='tracking-normal font-bold text-accent mt-3'>{item.price}</div>
                  {open === index ? <IoChevronUpCircleOutline className='w-8 h-8 mt-6 cursor-pointer' /> : <IoChevronDownCircleOutline className='w-8 h-8 mt-6 cursor-pointer' />}
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default ServiceItems