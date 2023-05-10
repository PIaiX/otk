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

      <section className='sec-2 mb-5'>
      <Container className='h-100'>
          <Row className='h-100 align-items-center'>
            <Col md={7}>
              <div className="row row-cols-3">
                <div>
                  <figure className="product">
                    <img src="imgs/img.png" alt="" />
                    <figcaption>
                      <h5>Royal Clima GLORIA</h5>
                      <div className="d-flex">
                        <div>от 27 200 ₽</div>
                        <button type='button' className='btn-1'>Купить</button>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div></div>
                <div></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='sec-3 mb-5'>
        <h3>Каталог товаров</h3>
      </section>

      <section className='sec-4 mb-5'>
        <h3>ОТК-СЕРВИС доверяют более 2 000 клиентов</h3>
      </section>

      <section className='sec-5 mb-5'>
        <Container>
          <h2 className="h1 text-center">Лучшие предложения месяца</h2>
          <ul className='list-unstyled d-flex justify-content-center align-items-center'>
            <li>
              <button type='button' className='btn-2'>Сплит-системы</button>
            </li>
            <li>
              <button type='button' className='btn-2'>Кондиционеры</button>
            </li>
            <li>
              <button type='button' className='btn-2'>Рекуператоры</button>
            </li>
            <li>
              <button type='button' className='btn-2'>Бризеры</button>
            </li>
          </ul>

          <Row className='justify-content-center'>
            <Col lg={10}>
              <Swiper
                modules={[Navigation]}
                className='offers-slider'
                spaceBetween={30}
                slidesPerView={3}
              >
                <SwiperSlide>
                  продукт
                </SwiperSlide>
                <SwiperSlide>
                  продукт
                </SwiperSlide>
                <SwiperSlide>
                  продукт
                </SwiperSlide>
                <SwiperSlide>
                  продукт
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Home;