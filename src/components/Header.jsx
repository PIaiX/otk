import React from 'react';
import Container from 'react-bootstrap/Container';
import Logo from '../assets/imgs/logo.png';
import ShoppingCart from './svg/ShoppingCart';

const Header = () => {
  return (
    <header>
      <Container className='h-100 d-flex justify-content-between align-items-center'>
        <img src={Logo} alt="logotip" />
        <select name="" id="" defaultValue={1}>
          <option value="0" disabled>Выберите город</option>
          <option value="1">Казань</option>
          <option value="2">Москва</option>
          <option value="3">Санкт-Петербург</option>
        </select>
        <ul className='list-unstyled d-flex'>
          <li><a href="/">Каталог</a></li>
          <li><a href="/">Услуги</a></li>
          <li><a href="/">Примеры работ</a></li>
          <li><a href="/">Контакты</a></li>
        </ul>
        <form action="">
          <input type="search" placeholder='Поиск'/>
        </form>
        <a href="tel:+79893685862" className='fs-15 fw-5'>+7 989 368-58-62</a>
        <button type='button' className='fs-18'>
          <ShoppingCart/>
        </button>
      </Container>
    </header>
  );
};

export default Header;