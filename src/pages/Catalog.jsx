import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryCard from '../components/CategoryCard';
import Woman from '../assets/imgs/woman.png';
import ProductCard from '../components/ProductCard';

const Catalog = () => {
  return (
    <main>
      <Container>
        <section className='mb-5'>
          <Row className='gx-5'>
            <Col md={9}>
              <div className="title mb-4 mb-sm-5">
                <h1 className="h2">Каталог</h1>
              </div>
            </Col>
          </Row>

          <Row className='gx-5'>
            <Col md={9}>
              <ul className='list-unstyled row row-cols-3 gx-5'>
                <li>
                  <CategoryCard
                    title={"Кондиционеры и сплит-системы"}
                    img={"imgs/category-1.png"}
                  />
                </li>
                <li>
                  <CategoryCard
                    title={"Вентиляционое оборудование"}
                    img={"imgs/category-2.png"}
                  />
                </li>
                <li>
                  <CategoryCard
                    title={"Бризеры и рекуператоры"}
                    img={"imgs/category-3.png"}
                  />
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <ProductCard
                title={"Royal Clima GLORIA"}
                img={"imgs/img.png"}
              />
            </Col>
          </Row>

        </section>

        <section className='sec-6 no-img mb-6'>
          <Container className='position-relative'>
            <Row className='gx-5'>
              <Col md={9}>
                <div className="box">
                  <h3>Оставьте заявку на подбор кондиционера</h3>
                  <h5 className='text-center text-lg-start mt-4 mt-lg-0'>И мы перезвоним в течение 20 минут, чтобы ответить на все ваши вопросы</h5>
                  <form>
                    <input type="tel" placeholder='+7 ___-___-__-__'/>
                    <input type="text" placeholder='Имя'/>
                    <button type='button' className="btn-1 fw-6 px-4">Оставить заявку</button>
                    <p>Нажимая кнопку «Отправить», вы даёте согласие на обработку персональных данных</p>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Container>
    </main>
  );
};

export default Catalog;