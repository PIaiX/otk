import React from 'react';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Logo from '../assets/imgs/logo.png';
import ShoppingCart from './svg/ShoppingCart';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Container className='h-100 d-flex justify-content-between align-items-center'>
        <div className="d-flex align-items-center">
          <Link to="/" className='logo'><img src={Logo} alt="logotip" /></Link>
          <Dropdown>
            <Dropdown.Toggle variant={'none'}>
              Казань
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Москва</Dropdown.Item>
              <Dropdown.Item>Санкт-Петербург</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <ul className='list-unstyled d-flex menu'>
          <li><a href="/">Каталог</a></li>
          <li><a href="/">Услуги</a></li>
          <li><a href="/">Примеры работ</a></li>
          <li><a href="/">Контакты</a></li>
        </ul>

        <div className="d-flex align-items-center">
          <form action="">
            <input type="search" placeholder='Поиск'/>
          </form>
          <a href="tel:+79893685862" className='phone ms-4 ms-xxxl-5'>+7 989 368-58-62</a>
          <button type='button' className='cart ms-4 ms-xxxl-5'>
            <ShoppingCart/>
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;