import React, {useEffect, useRef, useState} from "react";
import { MDBBtn, MDBContainer, MDBIcon } from 'mdb-react-ui-kit';
import './App.css';
import about from './images/about.jpg'
import icon from './images/icon.png'
import {CheckOutlined} from "@ant-design/icons";
import {BsCheckCircle, BsPhone, BsWhatsapp} from "react-icons/bs";
import {AiOutlinePhone} from "react-icons/ai";
import {FaViber} from "react-icons/fa";
import Media from "./Media";
import Carousel from "./Carousel";
import Loader from "./Loader/Loader";


const App = () => {
  const [loader, setLoader] = useState(true);
  const [colorChange1, setColorChange1] = useState(false);
  const [colorChange2, setColorChange2] = useState(false);
  const [colorChange3, setColorChange3] = useState(false);
  const [colorChange4, setColorChange4] = useState(false);
  const [colorChange5, setColorChange5] = useState(false);
  const [colorChange6, setColorChange6] = useState(false);
  const changeNavbarColor = () =>{
    if(window.scrollY <= document.getElementById('header').offsetHeight - 10){
      setColorChange1(true);
      setColorChange2(false);
      setColorChange3(false);
      setColorChange4(false);
      setColorChange5(false);
      setColorChange6(false);
    }
    else if(window.scrollY < document.getElementById('header').offsetHeight - 10 + document.getElementById('about').offsetHeight){
      setColorChange2(true);
      setColorChange1(false);
      setColorChange3(false);
      setColorChange4(false);
      setColorChange5(false);
      setColorChange6(false);
    }
    else if(window.scrollY <
        document.getElementById('header').offsetHeight
        + document.getElementById('about').offsetHeight
        + document.getElementById('advantages').offsetHeight - 10){
      setColorChange3(true);
      setColorChange2(false);
      setColorChange1(false);
      setColorChange4(false);
      setColorChange5(false);
      setColorChange6(false);
    }
    else if(window.scrollY <
        document.getElementById('header').offsetHeight
        + document.getElementById('about').offsetHeight
        + document.getElementById('advantages').offsetHeight
        + document.getElementById('cars').offsetHeight - 10){
      setColorChange4(true);
      setColorChange2(false);
      setColorChange3(false);
      setColorChange1(false);
      setColorChange5(false);
      setColorChange6(false);
    }
    else if(window.scrollY <
        document.getElementById('header').offsetHeight
        + document.getElementById('about').offsetHeight
        + document.getElementById('advantages').offsetHeight
        + document.getElementById('cars').offsetHeight
        + 150){
      setColorChange4(false);
      setColorChange2(false);
      setColorChange3(false);
      setColorChange1(false);
      setColorChange5(true);
      setColorChange6(false);
    }
    else if(window.scrollY <
        document.getElementById('header').offsetHeight
        + document.getElementById('about').offsetHeight
        + document.getElementById('advantages').offsetHeight
        + document.getElementById('cars').offsetHeight
        + document.getElementById('carousel').offsetHeight
        + 200){
      setColorChange4(false);
      setColorChange2(false);
      setColorChange3(false);
      setColorChange1(false);
      setColorChange5(false);
      setColorChange6(true);
    }
  };

  const refHeader = useRef()
  const refAbout = useRef()
  const refAdvantages = useRef()
  const refCars = useRef()
  const refCarousel = useRef()
  const refContacts = useRef()

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    return () => window.removeEventListener('scroll', changeNavbarColor);
  }, []);

  let mybutton;

  window.onscroll = function () {
    mybutton = document.getElementById("btn-back-to-top");
    scrollFunction(mybutton);
  };

  function scrollFunction(mybutton) {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const [isShrunk, setShrunk] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
            !isShrunk &&
            (document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20)
        ) {
          return true;
        }

        if (
            isShrunk &&
            document.body.scrollTop < 4 &&
            document.documentElement.scrollTop < 4
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);

  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1000)
  }, [])

  if(loader) return <Loader />

  return (
      <div className="App">

        <header id='header' ref={refHeader} className="header">
          <div className='navbar-container'
               style={isShrunk ? {height: 65, backgroundColor: 'rgba(0, 0, 0, 0.85)'} : {height: 80}}>
            <div className='navbar'>
              <div className='logo'
                   onClick={() => {refHeader.current?.scrollIntoView({behavior: 'smooth'});}}
              >
                <img className='logo' src={icon} alt='icon'/>
              </div>
              <div className='navbar-items'>
                <div style={colorChange1 ? {color: "#FFB021"} : {}} className='navbar-item'
                     onClick={() => {refHeader.current?.scrollIntoView({behavior: 'smooth'});}}
                >Головна</div>
                <div style={colorChange2 ? {color: "#FFB021"} : {}} className='navbar-item'
                     onClick={() => {refAbout.current?.scrollIntoView({behavior: 'smooth'});}}
                >Про нас</div>
                <div style={colorChange3 ? {color: "#FFB021"} : {}} className='navbar-item'
                     onClick={() => {refAdvantages.current?.scrollIntoView({behavior: 'smooth'});}}
                >Переваги</div>
                <div style={colorChange4 ? {color: "#FFB021"} : {}} className='navbar-item'
                     onClick={() => {refCars.current?.scrollIntoView({behavior: 'smooth'});}}
                >Транспорт</div>
                <div style={colorChange5 ? {color: "#FFB021"} : {}} className='navbar-item'
                     onClick={() => {refCarousel.current?.scrollIntoView({behavior: 'smooth'});}}
                >Відгуки</div>
                <div style={colorChange6 ? {color: "#FFB021"} : {}} className='navbar-item'
                     onClick={() => {refContacts.current?.scrollIntoView({behavior: 'smooth'});}}
                >Контакти</div>
                <a className='navbar-item' href="tel:+380975589515">
                  +38 (097) 558-95-15
                </a>
              </div>
            </div>
          </div>
          <div className='header-content-container'>
            <div className='header-content'>
              <div className='content-header'>Пасажирські перевезення <br/> Україна - Польща</div>
              <div className='content-text'>Регулярні пасажирські перевезення пасажирів і передач з України до
                Європи і у зворотньому напрямку. <br/> Підтримка 24 на 7. Щоденні виїзди!
              </div>
              <a className='content-number' href="tel:+380975589515">
                +38 (097) 558-95-15
              </a>
            </div>
          </div>
        </header>
        <div id='about' ref={refAbout} className='about'>
          <div className='about-header'>
            <div className='about-header-text'>Про Нас</div>
            <div className='line' style={{width: '40%'}}/>
          </div>
          <div className='about-content'>
            <div className='about-part1'>
              <img className='about-img' src={about} alt='about'/>
              <div className='about-text'>
                <div>Наша компанія займається перевезенням пасажирів з Польщі в Україну і в зворотному
                  напрямку. Для цього ми використовуємо тільки зручні та комфортні мікроавтобуси.
                </div>
                <br/>
                <div className='countries'>
                  <div className='countries-part'>
                    <div style={{display: "flex", alignItems: "center"}}><CheckOutlined className='done'/> Тернопіль</div>
                    <div style={{display: "flex", alignItems: "center"}}><CheckOutlined className='done'/> Львів</div>
                    <div style={{display: "flex", alignItems: "center"}}><CheckOutlined className='done'/> Ряшів</div>
                    <div style={{display: "flex", alignItems: "center"}}><CheckOutlined className='done'/> Краків</div>
                  </div>
                  <div className='countries-part'>
                    <div style={{display: "flex", alignItems: "center"}}><CheckOutlined className='done'/> Катовіце</div>
                    <div style={{display: "flex", alignItems: "center"}}><CheckOutlined className='done'/> Вроцлав</div>
                    <div style={{display: "flex", alignItems: "center"}}><CheckOutlined className='done'/> Легніца</div>
                    <div style={{display: "flex", alignItems: "center"}}><CheckOutlined className='done'/> Зелена Гура</div>
                  </div>
                </div>
                <div>Відмінністю нашої роботи є не тільки професіоналізм і комфортність пересування на
                  великі відстані, але і індивідуальний підхід до кожного пасажира.
                  <br/>
                  <br/>
                  Ми враховуємо всі побажання і негайно зупинимося на прохання будь-якого пасажира, а
                  також доставимо вас до самого будинку і допоможемо з багажем.
                </div>
              </div>
            </div>
            <div className='about-part2'>
              Також ви можете скористатися нашими послугами і для доставки посилок. З нами легко, комфортно і,
              найголовніше, безпечно. Наш транспорт завжди технічно справний. Перед кожною поїздкою все строго
              контролюється: автомобілі перевіряються, все поломки усуваються. Водії завжди доброзичливі і
              привітні. З нами ви точно можете бути впевнені, що знаходитеся в надійних руках і в призначений
              час опинитеся в потрібному місці.
              <br/>
              <br/>
              Усі рейси здайснються регулярно та прямують з різних міст України, за детальною інформацією
              звертайтесь до наших операторів. Ціни уточнюйте по телефону.
            </div>
          </div>
        </div>
        <div id='advantages' ref={refAdvantages} className='advantages'>
          <div className='about-header'>
            <div className='about-header-text'>Наші Переваги</div>
            <div className='line' style={{width: '40%'}}/>
          </div>
          <div className='advantages-content'>
            <div className='advantages-content-part'>
              <div className='advantages-content-item'>
                <BsCheckCircle className='advantages-icon'/>
                <div className='advantages-text'>Швидке Бронювання</div>
              </div>
              <div className='advantages-content-item'>
                <BsCheckCircle className='advantages-icon'/>
                <div className='advantages-text'>Без Передоплат</div>
              </div>
              <div className='advantages-content-item'>
                <BsCheckCircle className='advantages-icon'/>
                <div className='advantages-text'>Щоденні Виїзди</div>
              </div>
            </div>
            <div className='advantages-content-part'>
              <div className='advantages-content-item'>
                <BsCheckCircle className='advantages-icon'/>
                <div className='advantages-text'>Комфортні Сидіння</div>
              </div>
              <div className='advantages-content-item'>
                <BsCheckCircle className='advantages-icon'/>
                <div className='advantages-text'>Досвідчені Водії</div>
              </div>
              <div className='advantages-content-item'>
                <BsCheckCircle className='advantages-icon'/>
                <div className='advantages-text'>Беремо Передачі</div>
              </div>
            </div>
            <div className='advantages-content-part'>
              <div className='advantages-content-item'>
                <BsCheckCircle className='advantages-icon'/>
                <div className='advantages-text'>Кондиціонер та Автономне <br/> Опалення</div>
              </div>
            </div>
          </div>
        </div>
        <div id='cars' ref={refCars} className='cars'>
          <div className='about-header'>
            <div className='about-header-text'>Наш Транспорт</div>
            <div className='line' style={{width: '40%'}}/>
          </div>
          <div className='about-text' style={{width: '100%'}}>
            Автопарк нашої компанії складається з комфортабельних мікроавтобусів Mercedes Sprinter 8 місць,
            оснащених комфотними сидіннями, телевізорами, WIFI, USB зарядками телефонів, додатковим опаленням
            салону, кондиціонерами, великими багажниками.
          </div>
          <Media/>
        </div>
        <div id='carousel' ref={refCarousel} className='carousel-container'>
          <Carousel />
        </div>
        <div id='contacts' ref={refContacts} className='contacts'>
          <div className='about-header'>
            <div className='about-header-text'>Наші Контакти</div>
            <div className='line' style={{width: '40%'}}/>
          </div>
          <div className='number-content'>
            <div className='number-item'>
              <BsPhone className='phone-icon' />
              <div style={{fontWeight: "bold", color: '#444', fontSize: 20}}>Василь:</div>
              <a href="tel:+380975589515" className='number'>+38 (097) 558-95-15</a>
              <AiOutlinePhone style={{fontSize: 30, marginTop: 10, color: '#000000'}}/>
            </div>
            <div className='number-item'>
              <BsPhone className='phone-icon' />
              <div style={{fontWeight: "bold", color: '#444', fontSize: 20}}>Василь:</div>
              <a href="tel:+380975589515" className='number'>+38 (097) 558-95-15</a>
              <FaViber style={{fontSize: 30, marginTop: 10, color: '#825ef5'}}/>
            </div>
            <div className='number-item'>
              <BsPhone className='phone-icon' />
              <div style={{fontWeight: "bold", color: '#444', fontSize: 20}}>Василь:</div>
              <a href="tel:+380975589515" className='number'>+38 (097) 558-95-15</a>
              <BsWhatsapp style={{fontSize: 30, marginTop: 10, color: '#24cb63'}}/>
            </div>
          </div>
        </div>
        <MDBContainer fluid>
          <MDBBtn
              onClick={backToTop}
              id='btn-back-to-top'
              style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                display: "none",
              }}
              className='btn-floating'
              color='warning'
              size='lg'>
            <MDBIcon fas icon="arrow-up" />
          </MDBBtn>
        </MDBContainer>
      </div>
  );
}

export default App;
