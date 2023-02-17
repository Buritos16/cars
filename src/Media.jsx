import React, {useState} from "react";
import f1 from './images/1.jpg'
import f2 from './images/2.jpg'
import f3 from './images/3.jpg'
import f4 from './images/4.jpg'
import f5 from './images/5.jpg'
import f6 from './images/6.jpg'
import f7 from './images/7.jpg'
import f8 from './images/8.jpg'
import f9 from './images/9.jpg'
import f10 from './images/10.jpg'
import f11 from './images/11.jpg'
import f12 from './images/12.jpg'
import f13 from './images/13.jpg'
import f14 from './images/14.jpg'
import f15 from './images/15.jpg'
import f16 from './images/16.jpg'
import f17 from './images/17.jpg'
import f18 from './images/18.jpg'
import f19 from './images/19.jpg'
import f20 from './images/20.jpg'
import f21 from './images/21.jpg'
import f22 from './images/22.jpg'
import f23 from './images/23.jpg'
import f24 from './images/24.jpg'
import f25 from './images/25.jpg'
import f26 from './images/26.jpg'
import f27 from './images/27.jpg'
import f28 from './images/28.jpg'
import f29 from './images/29.jpg'
import f30 from './images/30.jpg'
import f31 from './images/31.jpg'
import FsLightbox from "fslightbox-react";

const Media = () => {

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    function openLightboxOnSlide(number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number
        });
    }

    return (
        <div style={{marginTop: 50}}>
            <div className='media-row'>
                <img onClick={() => openLightboxOnSlide(1)} className='media' src={f1} alt='f1'/>
                <img onClick={() => openLightboxOnSlide(2)} className='media' src={f2} alt='f1'/>
                <img onClick={() => openLightboxOnSlide(3)} className='media' src={f3} alt='f1'/>
            </div>
            <div className='media-row'>
                <img onClick={() => openLightboxOnSlide(4)} className='media' src={f4} alt='f1'/>
                <img onClick={() => openLightboxOnSlide(5)} className='media' src={f5} alt='f1'/>
                <img onClick={() => openLightboxOnSlide(6)} className='media' src={f6} alt='f1'/>
            </div>
            <div className='media-row'>
                <img onClick={() => openLightboxOnSlide(7)} className='media' src={f7} alt='f1'/>
                <img onClick={() => openLightboxOnSlide(8)} className='media' src={f8} alt='f1'/>
                <img onClick={() => openLightboxOnSlide(9)} className='media' src={f9} alt='f1'/>
            </div>
            <div className='media-row'>
                <img onClick={() => openLightboxOnSlide(10)} className='media' src={f10} alt='f1'/>
                <img onClick={() => openLightboxOnSlide(11)} className='media' src={f11} alt='f1'/>
                <img onClick={() => openLightboxOnSlide(12)} className='media' src={f12} alt='f1'/>
            </div>
            <div className='media-row'>
                <img onClick={() => openLightboxOnSlide(13)} className='media' src={f13} alt='f1'/>
                <img onClick={() => openLightboxOnSlide(14)} className='media' src={f14} alt='f1'/>
                <img onClick={() => openLightboxOnSlide(15)} className='media' src={f15} alt='f1'/>
            </div>
            <div className='media-row'>
                <img onClick={() => openLightboxOnSlide(16)} className='media' src={f16} alt='f1'/>
                <img onClick={() => openLightboxOnSlide(17)} className='media' src={f17} alt='f1'/>
                <img onClick={() => openLightboxOnSlide(18)} className='media' src={f18} alt='f1'/>
            </div>
            <div className='media-row'>
                <img onClick={() => openLightboxOnSlide(19)} className='media' src={f19} alt='f1'/>
                <img onClick={() => openLightboxOnSlide(20)} className='media' src={f20} alt='f1'/>
                <img onClick={() => openLightboxOnSlide(21)} className='media' src={f21} alt='f1'/>
            </div>
            <div className='media-row'>
                <img onClick={() => openLightboxOnSlide(22)} className='media' src={f22} alt='f1'/>
                <img onClick={() => openLightboxOnSlide(23)} className='media' src={f23} alt='f1'/>
                <img onClick={() => openLightboxOnSlide(24)} className='media' src={f24} alt='f1'/>
            </div>
            <div className='media-row'>
                <img onClick={() => openLightboxOnSlide(25)} className='media' src={f25} alt='f1'/>
                <img onClick={() => openLightboxOnSlide(26)} className='media' src={f26} alt='f1'/>
                <img onClick={() => openLightboxOnSlide(27)} className='media' src={f27} alt='f1'/>
            </div>
            <div className='media-row'>
                <img onClick={() => openLightboxOnSlide(28)} className='media' src={f28} alt='f1'/>
                <img onClick={() => openLightboxOnSlide(29)} className='media' src={f29} alt='f1'/>
                <img onClick={() => openLightboxOnSlide(30)} className='media' src={f30} alt='f1'/>
            </div>
            <div className='media-row'>
                <img onClick={() => openLightboxOnSlide(31)} className='media' src={f31} alt='f1'/>
            </div>
            <FsLightbox
                toggler={lightboxController.toggler}
                sources={[
                    f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13,f14,f15,f16,f17,f18,f19,f20,f21,f22,f23,f24,f25,f26,f27,f28,f29,f30,f31
                ]}
                slide={lightboxController.slide}
            />
        </div>
    )
}

export default Media