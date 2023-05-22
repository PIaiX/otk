import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryCard from '../components/CategoryCard';
import Hit from '../assets/imgs/icons/hit.svg';
import ProductCard from '../components/ProductCard';

const Catalog = () => {
  return (
    <main>
      <Container>
        <section className='sec-9 mb-5'>
          <Row className='gx-xxxl-5'>
            <Col xl={9}>
              <div className="title mb-4 mb-sm-5">
                <h1 className="h2">Каталог</h1>
              </div>
            </Col>
          </Row>

          <Row className='gx-xxxl-5 justify-content-center'>
            <Col xl={9}>
              <ul className='list-unstyled justify-content-center row row-cols-2 row-cols-md-3 gy-4 gy-md-0 gx-3 gx-sm-4 gx-xxxl-5'>
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
            <Col xs={12} lg={8} xl={3} className='position-relative mt-5 mt-xl-0'>
              <ProductCard
                title={"Royal Clima GLORIA"}
                img={"imgs/img.png"}
              />
              <img src={Hit} alt="hit" className='hit'/>
            </Col>
          </Row>
        </section>

        <section className='sec-6 no-img mb-6'>
          <Container className='position-relative'>
            <Row className='gx-xxxl-5'>
              <Col md={12} xxl={9}>
                <div className="box">
                  <h3>Оставьте заявку на подбор кондиционера</h3>
                  <h5 className='text-center text-lg-start mt-4 mt-lg-0'>И мы перезвоним в течение 20 минут, чтобы ответить на все ваши вопросы</h5>
                  <form>
                    <input type="tel" placeholder='+7 ___-___-__-__'/>
                    <input type="text" placeholder='Имя'/>
                    <button type='button' className="btn-1 fw-6 px-3">Оставить заявку</button>
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