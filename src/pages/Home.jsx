import React from 'react';
import FigureMain from '../components/svg/FigureMain';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from '../components/ProductCard';
import Guarantee from '../components/svg/Guarantee';

const Home = () => {
  return (
    <main>
      <section className='sec-1'>
        <FigureMain img={"imgs/img1.jpg"}/>
        <Container className='h-100'>
          <Row className='h-100 align-items-center'>
            <Col md={7}>
              <h1>Продажа и монтаж кондиционеров, вентиляции и теплового оборудования </h1>
            </Col>
          </Row>
        </Container>
        <Link to='/' className='btn-catalog'>
          <span>в каталог</span>
        </Link>
      </section>

      <section className='sec-2 mb-6'>
        <Container className='h-100'>
          <Row className='h-100 align-items-center'>
            <Col md={7}>
              <div className="row row-cols-3">
                <div>
                  <ProductCard 
                    title={"Royal Clima GLORIA"}
                    img={"imgs/img.png"}
                  />
                </div>
                <div>
                  <ProductCard 
                    title={"Hisense EXPERT PRO DC Inverter seria A"}
                    img={"imgs/img.png"}
                  />
                </div>
                <div>
                  <ProductCard 
                    title={"Кондиционер Gree Bora DC Inverter"}
                    img={"imgs/img.png"}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='sec-3 mb-6'>
        <Container>
          <h2>Каталог товаров</h2>
          <ul className="grid">
            <li className="grid-1">
              <figure>
                <img src="imgs/img2.jpg" alt="Кондиционеры" />
                <figcaption><h3>Кондиционеры</h3></figcaption>
              </figure>
            </li>
            <li className="grid-2">
              <figure>
                <img src="imgs/img3.jpg" alt="Кондиционеры" />
                <figcaption><h3>Бризеры</h3></figcaption>
              </figure>
            </li>
            <li className="grid-3">
              <figure>
                <figcaption><h3>Вентиляционое оборудование</h3></figcaption>
                <img src="imgs/img4.jpg" alt="Вентиляционое оборудование" />
              </figure>
            </li>
          </ul>
        </Container>
      </section>

      <section className='sec-4 mb-6'>
        <Container>
          <h2>ОТК-СЕРВИС доверяют более 2 000 клиентов</h2>
          <Row className='gx-5'>
            <Col md={5}>
              <img src="imgs/img5.jpg" alt="" className='img-1 mb-4'/>
              <p>Вы можете не только приобрести оборудование, но и заказать его установку. Также мы оказываем услуги по ремонту и обслуживанию.</p>
            </Col>
            <Col md={7}>
              <Row className='mb-4'>
                <Col md={8}>
                  <h4>Вы можете не только приобрести</h4>
                  <p>Вы можете не только приобрести оборудование, но и заказать его установку. Также мы оказываем услуги по ремонту и обслуживанию. Вы можете не только приобрести оборудование, но и заказать его установку. Также мы оказываем услуги по ремонту и обслуживанию.но и заказать его установку. Также мы оказываем услуги по ремонту.</p>
                </Col>
                <Col md={4}>
                  <img src="imgs/img6.jpg" alt="" className='img-2' />
                </Col>
              </Row>
              <Guarantee className="svg"/>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='sec-5 mb-6'>
        <Container>
          <h2 className="h1 text-center">Лучшие предложения <img src="imgs/icons/price-rate.svg" alt="rate" /> месяца</h2>
          <ul className='list-unstyled d-flex justify-content-center align-items-center mb-5'>
            <li>
              <button type='button' className='btn-2'>Сплит-системы</button>
            </li>
            <li>
              <button type='button' className='btn-2 active'>Кондиционеры</button>
            </li>
            <li>
              <button type='button' className='btn-2'>Рекуператоры</button>
            </li>
            <li>
              <button type='button' className='btn-2'>Бризеры</button>
            </li>
          </ul>

          <Row className='justify-content-center position-relative'>
            <Col lg={10}>
              <Swiper
                modules={[Navigation]}
                className='offers-slider'
                spaceBetween={30}
                slidesPerView={3}
                navigation
              >
                <SwiperSlide>
                  <ProductCard 
                    title={"Royal Clima GLORIA"}
                    img={"imgs/img.png"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCard 
                    title={"Royal Clima GLORIA"}
                    img={"imgs/img.png"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCard 
                    title={"Royal Clima GLORIA"}
                    img={"imgs/img.png"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCard 
                    title={"Royal Clima GLORIA"}
                    img={"imgs/img.png"}
                  />
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='sec-6 mb-6'>
        <Container>
          <form action="">
            <h2>Оставьте заявку на подбор кондиционера</h2>
          </form>
        </Container>
      </section>

      <section className='sec-7 mb-6'>
        <Container>
          <h2 className='text-center'>Отзывы клиентов ОТК-Сервис</h2>
        </Container>
      </section>
    </main>
  );
};

export default Home;