import React from 'react';
import Container from 'react-bootstrap/Container';
import {Link, NavLink} from 'react-router-dom';
import useIsMobile from '../hooks/useIsMobile';
import { HiOutlineHome, HiOutlineSquares2X2, HiOutlineShoppingCart, HiOutlinePhone, HiOutlineUser } from "react-icons/hi2";
import Devs from './utils/Devs';

const Footer = () => {
  const {isMobile} = useIsMobile('991px');

  if(isMobile) {
    return (<footer className='mobile'>
      <Container className='h-100'>
        <nav>
          <ul>
            <li>
              <Link to="/" className='active'>
                <HiOutlineHome/>
                <span>Главная</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <HiOutlineSquares2X2/>
                <span>Каталог</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <HiOutlineShoppingCart/>
                <span>Корзина</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <HiOutlinePhone/>
                <span>Контакты</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <HiOutlineUser/>
                <span>Профиль</span>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>)
  } else { 
    return (
      <footer className='desktop'>
        <Container className='h-100 d-flex justify-content-between align-items-center'>
          <div>
            <ul className='mb-4'>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/">Каталог</Link>
              </li>
              <li>
                <Link to="/">Услуги</Link>
              </li>
              <li>
                <Link to="/">Доставка и оплата</Link>
              </li>
              <li>
                <Link to="/">Примеры работ</Link>
              </li>
              <li>
                <Link to="/">Контакты</Link>
              </li>
            </ul>
            <ul className='mb-4'>
              <li>
                <Link to="/">Кондиционеры</Link>
              </li>
              <li>
                <Link to="/">Рекуператоры</Link>
              </li>
              <li>
                <Link to="/">Бризеры</Link>
              </li>
              <li>
                <Link to="/">Сплит-системы</Link>
              </li>
              <li>
                <Link to="/">Тепловое оборудование</Link>
              </li>
            </ul>
            <div><Link to="/" className='bb-05'>Политика конфиденциальности</Link></div>
          </div>
          <Devs/>
        </Container>
      </footer>
    );
  }
};

export default Footer;