import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumbs from '../components/Breadcrumbs';
import CartImg from '../assets/imgs/cart-img.png';
import CartItem from '../components/CartItem';
import CartItemService from '../components/CartItemService';

const ShoppingCart = () => {
  return (
    <main>
      <Container>
        <Breadcrumbs/>

        <section className='sec-15 mb-6'>
          <div className="title mb-4 mb-sm-5">
            <h1 className='h2'>Корзина</h1>
          </div>

          <Row xs={1} xl={2}>
            <Col className='pe-xxxl-5'>
              <ul className='list-unstyled pb-sm-4 pb-xxl-5'>
                <li className='mb-4'><CartItem/></li>
              </ul>

              <label className='mt-4 mt-xxl-5 mb-4'>
                <div className='fs-12 fw-5 me-4'>Заказать установку</div>
                <input type="checkbox" defaultChecked={true} />
              </label>
              <CartItemService/>
            </Col>
            <Col className='ps-xxxl-5 mt-5 mt-xl-0'>
              <div className="position-relative d-flex align-items-center justify-content-end">
                <div className="box">
                  <h3 className='fw-6'>Заказ № 5432–56</h3>
                  <h5>на сумму 38 200₽</h5>
                  <p className='mt-4'>После оформления заказа оператор перезвонит вам и уточнит стоимость товаров и услуг</p>
                  <button className='btn-1 fs-12 mt-4'>Оформить</button>
                </div>
                <img src={CartImg} alt="корзина" className='cart-img' />
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default ShoppingCart;