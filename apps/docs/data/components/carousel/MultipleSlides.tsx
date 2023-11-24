import CarouselSlider from '@comfortdelgro/react-compass-old/carousel'
import {useEffect, useState} from 'react'
import style from './sample.module.css'

const Sliders = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [count, setCount] = useState(3)

  const handleSwitchSlide = (index: number) => {
    setActiveIndex(index)
  }

  useEffect(() => {
    const handleResize = () => {
      const itemPerpage = window.innerWidth >= 768 ? 3 : 1
      setCount(itemPerpage)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <CarouselSlider
      onSwitchSlide={handleSwitchSlide}
      effect={'slide'}
      className={style.myMultipleSlidesSlider}
      itemPerPage={count}
    >
      {Array.from({length: 9}).map((item, index) => (
        <CarouselSlider.Slide
          key={index}
          className={`slider-side responsive-slide${
            activeIndex === index ? ' active' : ''
          }`}
          active={false}
        >
          <div className={style.sampleSlideInner}>Carousel slide {index}</div>
        </CarouselSlider.Slide>
      ))}
    </CarouselSlider>
  )
}

export default Sliders
