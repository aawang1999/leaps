import React from 'react'
import { advisorProfiles } from '../data'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import '../swiper.css'
import { Autoplay, Pagination } from 'swiper'

const AdvisorProfileSlider = () => {
  return (
    <section id='testimonials' className='bg-primary'>
      <div className="container mx-auto">
        <>
          <Swiper
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            modules={[Autoplay, Pagination]}
            className='mySwiper'
          >
            {advisorProfiles.map((item, index) => {
              const { advisorImg, advisorName, advisorText } = item
              return <SwiperSlide key={index}>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">
                  <div className="w-48 h-48 lg:w-[328px] lg:h-[328px]">
                    <img src={advisorImg} alt="" />
                  </div>
                  <div className="flex flex-col max-w-3xl">
                    <div>
                      <p className='font-body text-xl mb-6 font-normal text-accent'>{advisorName}</p>
                    </div>
                    <h5 className='text-base text-gray-700 mb-[50px] xl:mb-0'>{advisorText}</h5>
                  </div>
                </div>
              </SwiperSlide>
            })}
          </Swiper>
        </>
      </div>
    </section>
  )
}

export default AdvisorProfileSlider