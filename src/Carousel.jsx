import React from "react";
import carousel from "./images/carousel.png";
import carousel2 from "./images/carousel2.jpg";
import carousel3 from "./images/carousel3.jpg";
import people1 from "./images/people1.jpg";
import people2 from "./images/people2.jpg";
import people3 from "./images/people3.jpg";
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';



const CarouselComponent = () => {
    return (
        <div className='carousel-container'>
        <MDBCarousel showControls dealy={3000} showIndicators>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src={carousel}
                alt='...'
            >
                <img className='people-photo' src={people2}/>
                <h5 style={{fontWeight: "bold", fontSize: 30}}>Володимир</h5>
                <p style={{marginBottom: 70, fontStyle: "italic", fontWeight: 200, fontSize: 20}}>
                    " Комфортні та охайні автобуси, завжди привітні та уважні водії.<br/>Подорожі завжди на вищому рівні. "
                </p>
            </MDBCarouselItem>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src={carousel2}
                alt='...'
            >
            <img className='people-photo' src={people3}/>
            <h5 style={{fontWeight: "bold", fontSize: 30}}>Ганна</h5>
            <p style={{marginBottom: 70, fontStyle: "italic", fontWeight: 200, fontSize: 20}}>
                    " Неодноразово користувалась послугами перевезеннями. Якість обслуговування на високому рівні, автобуси
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
            <h5 style={{fontWeight: "bold", fontSize: 30}}>Іван Семенович</h5>
            <p style={{marginBottom: 70, fontStyle: "italic", fontWeight: 200, fontSize: 20}}>
                   " Пунктуально доставляють куди потрібно без затримок, все на вищому рівні. "
            </p>
        </MDBCarouselItem>
        </MDBCarousel>
        </div>
            )
}

export default CarouselComponent