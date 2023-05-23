import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumbs from '../components/Breadcrumbs';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import 'swiper/css/pagination';
import { Thumbs, FreeMode } from 'swiper';

import { HiPlus } from "react-icons/hi2";
import ServiceImg from '../assets/imgs/service-img.png'
import ProductCard from '../components/ProductCard';

const Product = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [tab, setTab] = useState(1);

  return (
    <main>
      <Container>
        <Breadcrumbs/>
        <section className='sec-13 mb-6'>
          <div className="product-grid">
            <div className="area-1">
              <h1 className='h2'>Royal Clima GLORIA 2022</h1>
              <p className="gray fw-5 mb-4">Артикул: 3630477</p>
            </div>
            <div className="area-2">
              <Swiper
                direction="vertical"
                loop={true}
                spaceBetween={20}
                slidesPerView={'auto'}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="thumbslides"
                onSwiper={setThumbsSwiper}
              >
                <SwiperSlide>
                  <img src="imgs/img.png" alt="название товара"/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="imgs/img.png" alt="название товара"/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="imgs/img.png" alt="название товара"/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="imgs/img.png" alt="название товара"/>
                </SwiperSlide>
              </Swiper>
            
              <Swiper
                loop={true}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Thumbs]}
                className="mainslides"
                breakpoints={{
                  768: {
                    spaceBetween: 20
                  }
                }}
              >
                <SwiperSlide>
                    <img src="imgs/img.png" alt="название товара"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="imgs/img.png" alt="название товара"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="imgs/img.png" alt="название товара"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="imgs/img.png" alt="название товара"/>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="area-3">
              <Row>
                <Col xl={11} xxl={10} xxxl={9}>
                  <h5>Охлаждение</h5>
                  <ul className="params-list">
                    <li>
                      <label className='pill'>
                        <input type="radio" name="param" hidden/>
                        <div>12000 БТЕ</div>
                      </label>
                    </li>
                    <li>
                      <label className='pill'>
                        <input type="radio" name="param" hidden/>
                        <div>12000 БТЕ</div>
                      </label>
                    </li>
                    <li>
                      <label className='pill'>
                        <input type="radio" name="param" hidden/>
                        <div>12000 БТЕ</div>
                      </label>
                    </li>
                  </ul>
                  <div className="price-box">
                    <div>
                      <p className='price'>от 30 200 ₽</p>
                      <p className='info'>цена за одну штуку</p>
                    </div>
                    <button type='button' className='btn-3'>В корзину</button>
                  </div>

                  <p className='fs-12 mb-3'>В комплекте дешевле:</p>
                  <div className="set">
                    <div className="set-item">
                      <img src={ServiceImg} alt="ServiceImg" />
                      <h6>Установка кондиционера под ключ</h6>
                      <div className="set-item-price">
                        <div className="old">30 200 ₽</div>
                        <div className="new">от 30 200 ₽</div>
                      </div>
                    </div>
                    <HiPlus className='set-icon'/>
                    <div className="set-item">
                      <img src={ServiceImg} alt="ServiceImg" />
                      <h6>Установка кондиционера под ключ</h6>
                      <div className="set-item-price">
                        <div className="old">30 200 ₽</div>
                        <div className="new">от 30 200 ₽</div>
                      </div>
                    </div>
                  </div>
                  <h4 className='main-font fw-5'>Итого вы экономите до 40%</h4>
                  <div className="price-box">
                    <div>
                      <p className='price'>от 30 200 ₽</p>
                      <p className='info'>цена за одну штуку</p>
                    </div>
                    <button type='button' className='btn-3'>Хочу комплект</button>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="area-4">
              <div className='d-flex mt-5 mt-lg-0 mb-4'>
                <button 
                  type='button' 
                  className={(tab === 1) ? 'btn-2 active' : 'btn-2'} 
                  onClick={()=>setTab(1)}
                >
                  Описание
                </button>
                <button 
                  type='button' 
                  className={(tab === 2) ? 'btn-2 ms-3 active' : 'btn-2 ms-3'} 
                  onClick={()=>setTab(2)}
                >
                  Характеристики
                </button>
              </div>
              
              {
                (tab === 1)
                ? <div className='text'>
                  <h3>Описание</h3>
                  <p>Сплит-системы серии GLORIA Inverter — воплощение передовых инновационных технологий и великолепного изысканного дизайна. Одной из отличительных особенностей серии является функция ионизации, которая сделает воздух чистым, подарит здоровую атмосферу и окажет благоприятное влияние на здоровье. Многоступенчатый 5-ти скоростной вентилятор внутреннего блока позволяет выбрать максимально комфортные настройки воздушного потока, а русифицированный пульт ДУ сделает управление кондиционером невероятно простым и приятным.</p>
                </div>
                : <div className='text'>
                  <h3>Характеристики</h3>
                  <ul>
                    <li><span className='fw-6'>Тип</span> Сплит-система</li>
                    <li><span className='fw-6'>Рекомендованная площадь помещения</span> 22 м</li>
                    <li><span className='fw-6'>Инверторный компрессор</span> Да</li>
                    <li><span className='fw-6'>Мощность при охлаждении, кВт</span> 2.1</li>
                    <li><span className='fw-6'>Мощность при обогреве, кВт</span> 2.4</li>
                    <li><span className='fw-6'>Основные режимы</span> Сплит-система</li>
                    <li><span className='fw-6'>Максимальный уровень шума внутреннего блока, дБ</span> 21</li>
                  </ul>
                </div>
              }
            </div>
          </div>
        </section>

        <section className='sec-14 mb-6'>
          <h3 className='mb-4 mb-md-5'>С этим товаром также смотрят</h3>
          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            breakpoints={{
              576: {
                spaceBetween: 20,
                slidesPerView: 2
              },
              768: {
                spaceBetween: 20,
                slidesPerView: 3
              },
              992: {
                spaceBetween: 20,
                slidesPerView: 4
              },
              1400: {
                spaceBetween: 30,
                slidesPerView: 4
              },
              1598: {
                spaceBetween: 30,
                slidesPerView: 5
              }
            }}
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
        </section>
      </Container>
    </main>
  );
};

export default Product;