import React from 'react';
import { HiChevronRight } from "react-icons/hi2";
import {Link} from 'react-router-dom';

const CartItemService = () => {
  return (
    <div className="cart-item service">
      <img src="imgs/service-img.png" alt="Установка кондиционера под ключ" className="cart-item-img"/>
      <div className='cart-item-info'>
        <h5 className='fw-6'>Установка кондиционера под ключ</h5>
        <h3 className='mb-3'>от 8 000 ₽</h3>
        <Link to='/services' className='more'>
          <span>Подробнее</span>
          <HiChevronRight/>
        </Link>
      </div>
    </div>
  );
};

export default CartItemService;