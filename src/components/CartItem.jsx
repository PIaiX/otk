import React from 'react';
import { HiChevronDown } from "react-icons/hi2";

const CartItem = () => {
  return (
    <div className="cart-item">
      <img src="imgs/img.png" alt="Royal Clima GLORIA 2022" className="cart-item-img"/>
      <div className='cart-item-info'>
        <h5 className='fw-6'>Royal Clima GLORIA 2022</h5>
        <ul>
          <li><span className='fw-6'>Тип</span> Сплит-система</li>
          <li><span className='fw-6'>Рекомендованная площадь помещения</span> 22 м</li>
          <li><span className='fw-6'>Инверторный компрессор</span> Да</li>
        </ul>
        <div className="d-flex justify-content-between mt-4">
          <button type='button' className='more'>
            <span>Показать еще</span>
            <HiChevronDown/>
          </button>
          <h3 className='mb-0'>от 30 200 ₽</h3>
        </div>
      </div>
    </div>
  );
};

export default CartItem;