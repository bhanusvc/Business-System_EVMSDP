import React, { useState } from 'react'
import '../css/Slider.css'
import Button from '@mui/material/Button';
import BtnSlider from './Slider/BtnSlider'
import dataSlider from './Slider/dataSlider'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)
    console.log(slideIndex)
    console.log(dataSlider.length)
    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                console.log(obj.id)
                console.log(obj.title);
                return (
                    <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <div className='hehe'>
                            <div className='context'>
                                <div className='inner'>
                                    <h1>{obj.title}</h1>
                                    <p>
                                        {obj.subTitle}
                                    </p>
                                    <div id='click'>
                                        {obj.button}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img
                            src={process.env.PUBLIC_URL + `/Imgs/p${index + 1}.jpg`} alt={obj.subTitle} />

                    </div>

                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            <Button variant='contained' href='/' sx={{position:'absolute',right:'50%',bottom:'20%'}} >Start</Button>


       </div>
    )
}