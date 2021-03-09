import React from 'react'
import { Carousel } from 'react-bootstrap'
import guc from '../assets/guc.jpg'
import pc from '../assets/pc.jpg'
import watch from '../assets/watch.jpg'

const Carousels = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <div id='carousel-row'>
                    <div id="carousel-left">
                        <h4><span>E</span>-SHOPPER</h4>
                        <p className="desc">100% Responsive Design</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolore nobis itaque praesentium facilis obcaecati.</p>
                        <a href="" id="btn">Get it now</a>
                    </div>
                    <div id="carousel-right">
                        <img src={watch} alt=""/>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div id='carousel-row'>
                    <div id="carousel-left">
                        <h4><span>E</span>-SHOPPER</h4>
                        <p className="desc">100% Responsive Design</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolore nobis itaque praesentium facilis obcaecati.</p>
                        <a href="" id="btn">Get it now</a>
                    </div>
                    <div id="carousel-right">
                        <img src={watch} alt=""/>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div id='carousel-row'>
                    <div id="carousel-left">
                        <h4><span>E</span>-SHOPPER</h4>
                        <p className="desc">100% Responsive Design</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolore nobis itaque praesentium facilis obcaecati.</p>
                        <a href="" id="btn">Get it now</a>
                    </div>
                    <div id="carousel-right">
                        <img src={pc} alt=""/>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default Carousels
