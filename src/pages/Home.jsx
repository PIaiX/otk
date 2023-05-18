import React from 'react';
import FigureMain from '../components/svg/FigureMain';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from '../components/ProductCard';
import Guarantee from '../components/svg/Guarantee';

import Woman from '../assets/imgs/woman.png'
import StarRating from '../components/utils/StarRating';
import NewsCard from '../components/NewsCard';
import Quiz from '../components/Quiz';
import Homuncule from '../assets/imgs/man.png'
import FigureMainMobile from '../components/svg/FigureMainMobile';

const Home = () => {
  return (
    <main>
      <section className='sec-1'>
        <FigureMain className="d-none d-md-block" img={"imgs/img1.jpg"}/>
        <FigureMainMobile className="d-md-none" img={"imgs/img1-mob.jpg"}/>
        <Container className='h-100 pt-4 pt-md-0'>
          <Row className='h-100 align-items-md-center'>
            <Col md={8} xl={7}>
              <h1>Продажа и монтаж кондиционеров, вентиляции и теплового оборудования </h1>
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <section className='sec-2 mb-6'>
          <div className="row row-cols-md-2 row-cols-lg-3 gx-3 gx-xl-4">
            <div>
              <ProductCard 
                title={"Royal Clima GLORIA"}
                img={"imgs/img.png"}
              />
            </div>
            <div className='d-none d-md-block'>
              <ProductCard 
                title={"Hisense EXPERT PRO DC Inverter seria A"}
                img={"imgs/img.png"}
              />
            </div>
            <div className='d-none d-lg-block'>
              <ProductCard 
                title={"Кондиционер Gree Bora DC Inverter"}
                img={"imgs/img.png"}
              />
            </div>
          </div>
        </section>
      </Container>

      <section className='sec-3 mb-6'>
        <Container>
          <h2 className='d-none d-mb-block'>Каталог товаров</h2>
          <ul className="grid">
            <li className="grid-1">
              <figure>
                <figcaption><h3>Кондиционеры</h3></figcaption>
                <img src="imgs/img2.jpg" alt="Кондиционеры" />
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
          <Row className='gx-4 gx-xxl-5'>
            <Col md={5}>
              <img src="imgs/img5.jpg" alt="" className='img-1 mb-4'/>
              <p>Вы можете не только приобрести оборудование, но и заказать его установку. Также мы оказываем услуги по ремонту и обслуживанию.</p>
            </Col>
            <Col md={7} className='d-flex flex-column flex-md-column-reverse mt-5 mt-md-0'>
              <Guarantee className="svg"/>
              <Row className='gx-3 gx-xxl-4 mb-4'>
                <Col xs={12} xl={8}>
                  <h4>Вы можете не только приобрести</h4>
                  <p>Вы можете не только приобрести оборудование, но и заказать его установку. Также мы оказываем услуги по ремонту и обслуживанию. Вы можете не только приобрести оборудование, но и заказать его установку. Также мы оказываем услуги по ремонту и обслуживанию.но и заказать его установку. Также мы оказываем услуги по ремонту.</p>
                </Col>
                <Col xl={4} className='d-none d-xl-block'>
                  <img src="imgs/img6.jpg" alt="" className='img-2' />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='sec-5 mb-6'>
        <Container>
          <h2 className="h1 text-center">Лучшие предложения <img src="imgs/icons/price-rate.svg" alt="rate" className='d-none d-md-inline'/> месяца <img src="imgs/icons/price-rate.svg" alt="rate" className='d-md-none'/></h2>

          <Swiper
            className='menu-slider'
            spaceBetween={30}
            slidesPerView={'auto'}
          >
            <SwiperSlide>
              <button type='button' className='btn-2'>Сплит-системы</button>
            </SwiperSlide>
            <SwiperSlide>
              <button type='button' className='btn-2 active'>Кондиционеры</button>
            </SwiperSlide>
            <SwiperSlide>
              <button type='button' className='btn-2'>Рекуператоры</button>
            </SwiperSlide>
            <SwiperSlide>
              <button type='button' className='btn-2'>Бризеры</button>
            </SwiperSlide>
          </Swiper>

          <Row className='justify-content-center position-relative'>
            <Col xs={12} xxl={10}>
              <Swiper
                modules={[Navigation]}
                className='offers-slider'
                spaceBetween={5}
                slidesPerView={2}
                navigation
                breakpoints={{
                  576: {
                    spaceBetween: 10,
                    slidesPerView: 2
                  },
                  768: {
                    spaceBetween: 30,
                    slidesPerView: 2
                  },
                  992: {
                    spaceBetween: 30,
                    slidesPerView: 3
                  },
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
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='sec-6 mb-6'>
        <Container className='position-relative'>
          <div className="box">
            <h2>Оставьте заявку на подбор кондиционера</h2>
            <h5 className='text-center text-lg-start mt-4 mt-lg-0'>И мы перезвоним в течение 20 минут, чтобы ответить на все ваши вопросы</h5>
            <form>
              <input type="tel" placeholder='+7 ___-___-__-__'/>
              <input type="text" placeholder='Имя'/>
              <button type='button' className="btn-1 fw-6">Отправить</button>
              <p>Нажимая кнопку «Отправить», вы даёте согласие на обработку персональных данных</p>
            </form>
            
          </div>
          <img src={Woman} alt="Woman" className='img'/>
        </Container>
      </section>

      <section className='sec-7 mb-6'>
        <Container>
          <h2 className='text-center mb-md-5'>Отзывы клиентов ОТК-Сервис</h2>
          <div className="position-relative">
            <Swiper
              modules={[Navigation]}
              className='reviews-slider'
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              breakpoints={{
                768: {
                  spaceBetween: 30,
                  slidesPerView: 2
                },
                992: {
                  spaceBetween: 30,
                  slidesPerView: 3
                },
              }}
            >
              <SwiperSlide>
                <div className="review">
                  <StarRating rate={3.7}/>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="review">
                  <StarRating rate={3.7}/>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="review">
                  <StarRating rate={3.7}/>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="review">
                  <StarRating rate={3.7}/>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </section>

      <section className='sec-8 mb-6'>
        <Container>
          <div className="title mb-4 mb-md-5">
            <h2 className='mb-0'>Новости</h2>
            <button type='button' className='btn-3 me-lg-5'>Читать все записи</button>
          </div>
          <Swiper
            loop={true}
            spaceBetween={10}
            slidesPerView={2}
            breakpoints={{
              576: {
                spaceBetween: 15,
                slidesPerView: 2
              },
              768: {
                spaceBetween: 15,
                slidesPerView: 3
              },
              992: {
                spaceBetween: 30,
                slidesPerView: 3
              },
              1200: {
                spaceBetween: 30,
                slidesPerView: 4
              },
            }}
          >
            <SwiperSlide>
              <NewsCard/>
            </SwiperSlide>
            <SwiperSlide>
              <NewsCard/>
            </SwiperSlide>
            <SwiperSlide>
              <NewsCard/>
            </SwiperSlide>
            <SwiperSlide>
              <NewsCard/>
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>

      <section className='sec-9 mb-6'>
        <Container>
          <img src={Homuncule} alt="homuncule" className='homuncule'/>
          <div className="title">
            <h2>Вызовите мастера сейчас</h2>
            <h4 className='fw-4 mb-0'>Ответьте на 4 вопроса и получите скидку на монтаж кондиционера</h4>
          </div>
          <Quiz/>
        </Container>
      </section>
    </main>
  );
};

export default Home;