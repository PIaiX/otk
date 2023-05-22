import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import HumanFull from '../assets/imgs/bg/human-full.png';

const Services = () => {
  return (
    <main>
      <Container className='mt-4'>
        <Row className='gx-xxxl-5'>
          <Col xl={9}>
            <section className='sec-10 mb-5'>
              <div className="title mb-4 mb-sm-5">
                <h1 className="h2">Услуги</h1>
              </div>

              <ul className='list-unstyled row row-cols-1 row-cols-md-2 g-3 g-xxl-4'>
                <li>
                  <Link to="/" className='btn-5 w-100'>Установка</Link>
                </li>
                <li>
                  <Link to="/" className='btn-5 w-100'>Демонтаж старого оборудования</Link>
                </li>
                <li>
                  <Link to="/" className='btn-5 w-100'>Ремонт кондиционеров</Link>
                </li>
                <li>
                  <Link to="/" className='btn-5 w-100'>Обслуживание</Link>
                </li>
              </ul>
            </section>
            
            <section className='sec-6 no-img mb-6'>
              <div className="box gradient">
                <h3>Возникли вопросы?</h3>
                <h5 className='text-center text-lg-start mt-4 mt-lg-0'>Оставьте заявку и мы перезвоним вам в течение 20 минут</h5>
                <form>
                  <input type="tel" placeholder='+7 ___-___-__-__'/>
                  <input type="text" placeholder='Имя'/>
                  <button type='button' className="btn-1 fw-6 px-3">Оставить заявку</button>
                  <p>Нажимая кнопку «Отправить», вы даёте согласие на обработку персональных данных</p>
                </form>
              </div>
            </section>
          </Col>
          <Col xl={3} className='d-none d-xl-block'>
            <section className='sec-10 mb-5'>
              <div className="offer">
                <div className="text">
                  <h3>Вместе выгоднее</h3>
                  <p>Закажите оборудование и получите скидку 50% на его установку</p>
                  <button type='button' className='btn-4 mt-3 ms-auto'>Подробнее</button>
                </div>
                <img src={HumanFull} alt="HumanFull" />
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Services;