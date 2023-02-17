import React from "react";

import carousel from "./images/carousel.png";
import carousel2 from "./images/carousel2.jpg";
import carousel3 from "./images/carousel3.jpg";
import people1 from "./images/people1.jpg";
import people2 from "./images/people2.jpg";
import people3 from "./images/people3.jpg";
import Carousel from 'react-bootstrap/Carousel';

const CarouselComponent = () => {

    return (
        <div className='carousel-container'>
            <Carousel showControls dealy={3000} showIndicators>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className='carousel-caption'>
                            <img className='people-photo' src={people2} alt='img'/>
                            <h5 className='name'>Володимир</h5>
                            <p className='text'>
                                " Комфортні та охайні автобуси, завжди привітні та уважні водії.<br/>Подорожі завжди на
                                вищому рівні. "
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <img className='people-photo' src={people3}/>
                        <h5 className='name'>Ганна</h5>
                        <p className='text'>
                            " Неодноразово користувалась послугами перевезеннями. Якість обслуговування на високому рівні,
                            автобуси
                            завжди чисті та зручні, водії ввічливі. Надалі користуватимусь їх послугами. "
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <img className='people-photo' src={people1}/>
                        <h5 className='name'>Іван Семенович</h5>
                        <p className='text'>
                            " Пунктуально доставляють куди потрібно без затримок, все на вищому рівні. "
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/*<MDBCarousel showControls dealy={3000} showIndicators>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={1}
                    src={carousel}
                    alt='...'
                >
                    <div className='carousel-caption'>
                        <img className='people-photo' src={people2} alt='img'/>
                        <h5 className='name'>Володимир</h5>
                        <p className='text'>
                            " Комфортні та охайні автобуси, завжди привітні та уважні водії.<br/>Подорожі завжди на
                            вищому рівні. "
                        </p>
                    </div>
                </MDBCarouselItem>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src={carousel2}
                    alt='...'
                >
                    <img className='people-photo' src={people3}/>
                    <h5 className='name'>Ганна</h5>
                    <p className='text'>
                        " Неодноразово користувалась послугами перевезеннями. Якість обслуговування на високому рівні,
                        автобуси
                        завжди чисті та зручні, водії ввічливі. Надалі користуватимусь їх послугами. "
                    </p>
                </MDBCarouselItem>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src={carousel3}
                    alt='...'
                >
                    <img className='people-photo' src={people1}/>
                    <h5 className='name'>Іван Семенович</h5>
                    <p className='text'>
                        " Пунктуально доставляють куди потрібно без затримок, все на вищому рівні. "
                    </p>
                </MDBCarouselItem>
            </MDBCarousel>*/}
        </div>
    )
}

export default CarouselComponent