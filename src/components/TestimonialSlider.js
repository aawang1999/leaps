import React from 'react'
import { testimonials } from '../data'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import '../swiper.css'
import { Autoplay, Pagination } from 'swiper'

const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        {testimonials.map((item, index) => {
          const { authorImg, authorText, authorName, authorCollege } = item
          return <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">
              <div className="w-48 h-48 lg:w-[328px] lg:h-[328px]">
                <img src={authorImg} alt="" />
              </div>
              <div className="flex flex-col max-w-3xl">
                <h5 className='font-body text-xl mb-8 italic font-normal text-black'>{authorText}</h5>
                <div>
                  <p className='text-lg text-accent'>{authorName}</p>
                  <p className='text-gray-700 mb-[50px] xl:mb-0'>{authorCollege}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        })}
      </Swiper>
    </>
  )
}

export default TestimonialSlider