import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductCard from '../components/ProductCard';
import HumanFull from '../assets/imgs/bg/human-full.png';
import LongDash from '../components/svg/LongDash';

const Category = () => {
  return (
    <main>
      <Container>
        <section className='sec-12 mb-6'>
          <h1 className='mb-4'>Кондиционеры</h1>
          <Breadcrumbs/>

          <Row className='gx-xxxl-5 mt-5'>
            <Col lg={3}>
              <form action="" className='form-filter'>
                <fieldset className='mb-5'>
                  <legend>Цена, ₽</legend>
                  <div className='d-flex align-items-center mt-3'>
                    <input type="number" placeholder='От' className='flex-1'/>
                    <LongDash className="gray mx-2"/>
                    <input type="number" placeholder='До' className='flex-1'/>
                  </div>
                </fieldset>
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0" as="fieldset">
                    <Accordion.Header as="legend">Вид</Accordion.Header>
                    <Accordion.Body as="ul">
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span>Значение 1</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span>Значение 2</span>
                        </label>
                      </li>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" as="fieldset">
                    <Accordion.Header as="legend">Тип</Accordion.Header>
                    <Accordion.Body as="ul">
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span>Значение 1</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span>Значение 2</span>
                        </label>
                      </li>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" as="fieldset">
                    <Accordion.Header as="legend">Назначение</Accordion.Header>
                    <Accordion.Body as="ul">
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span>Значение 1</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span>Значение 2</span>
                        </label>
                      </li>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3" as="fieldset">
                    <Accordion.Header as="legend">Параметр 1</Accordion.Header>
                    <Accordion.Body as="ul">
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span>Значение 1</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span>Значение 2</span>
                        </label>
                      </li>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4" as="fieldset">
                    <Accordion.Header as="legend">Параметр 2</Accordion.Header>
                    <Accordion.Body as="ul">
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span>Значение 1</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span>Значение 2</span>
                        </label>
                      </li>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </form>

              <section className='sec-11 mb-5'>
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
            <Col lg={9}>
              <div className='d-flex align-items-center justify-content-between mb-5'>
                <ul className='list-unstyled d-flex'>
                  <li className='me-3'>
                    <button type='button' className='btn-2'>Фильтр 1</button>
                  </li>
                  <li className='me-3'>
                    <button type='button' className='btn-2'>Фильтр 2</button>
                  </li>
                  <li>
                    <button type='button' className='btn-2'>Фильтр 3</button>
                  </li>
                </ul>

                <select defaultValue={1} className='btn-2'>
                  <option value="1">Сначала дешёвые</option>
                  <option value="2">Сначала дорогие</option>
                </select>
              </div>

              <ul className='list-unstyled row row-cols-3 gx-4 gx-xxxl-5 gy-5'>
                <li>
                  <ProductCard 
                    title={"Royal Clima GLORIA"}
                    img={"imgs/img.png"}
                  />
                </li>
                <li>
                  <ProductCard 
                    title={"Royal Clima GLORIA"}
                    img={"imgs/img.png"}
                  />
                </li>
                <li>
                  <ProductCard 
                    title={"Royal Clima GLORIA"}
                    img={"imgs/img.png"}
                  />
                </li>
                <li>
                  <ProductCard 
                    title={"Royal Clima GLORIA"}
                    img={"imgs/img.png"}
                  />
                </li>
                <li>
                  <ProductCard 
                    title={"Royal Clima GLORIA"}
                    img={"imgs/img.png"}
                  />
                </li>
                <li>
                  <ProductCard 
                    title={"Royal Clima GLORIA"}
                    img={"imgs/img.png"}
                  />
                </li>
                <li>
                  <ProductCard 
                    title={"Royal Clima GLORIA"}
                    img={"imgs/img.png"}
                  />
                </li>
                <li>
                  <ProductCard 
                    title={"Royal Clima GLORIA"}
                    img={"imgs/img.png"}
                  />
                </li>
                <li>
                  <ProductCard 
                    title={"Royal Clima GLORIA"}
                    img={"imgs/img.png"}
                  />
                </li>
              </ul>
              
              <div className="box">
                <h2 className='h1 mb-4'>Возникли вопросы?</h2>
                <h5 className='text-center text-lg-start mt-4 mt-lg-0'>Оставьте заявку и мы перезвоним вам в течение 20 минут</h5>
                <form className='mb-4'>
                  <input type="tel" placeholder='+7 ___-___-__-__'/>
                  <input type="text" placeholder='Имя'/>
                  <button type='button' className="btn-3 fw-6 px-3">Оставить заявку</button>
                </form>
                <p>Нажимая кнопку «Отправить», вы даёте согласие на обработку персональных данных</p>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default Category;